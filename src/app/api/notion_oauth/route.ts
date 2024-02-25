import { NextRequest, NextResponse } from "next/server";

import { Client } from "@notionhq/client";
import { cookies } from "next/headers";

const notion = new Client();

export async function GET(req: NextRequest) {
  let code = req.nextUrl.searchParams.get("code") as string;
  if (!code) {
    return NextResponse.redirect(
      `https://api.notion.com/v1/oauth/authorize?client_id=${process.env.NOTION_CLIENT_ID}&response_type=code&owner=user&redirect_uri=${process.env.NOTION_REDIRECT_URI}`,
    );
  }
  try {
    const args = {
      client_id: process.env.NOTION_CLIENT_ID || "",
      client_secret: process.env.NOTION_CLIENT_SECRET || "",
      code: code,
      redirect_uri: process.env.NOTION_REDIRECT_URI,
      grant_type: "authorization_code",
    };
    const tokenResponse = await notion.oauth.token(args);
    cookies().set({
      name: "notion_token",
      value: tokenResponse.access_token,
      httpOnly: true,
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
    });
    return NextResponse.json({ token: tokenResponse }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
