"use server";

import { Client } from "@notionhq/client";
import { cookies } from "next/headers";
import { markdownToBlocks } from "@tryfabric/martian";
import { BlockObjectRequest } from "@notionhq/client/build/src/api-endpoints";

export async function listNotionDatabases() {
  const auth = cookies().get("notion_token")?.value;
  if (!auth) {
    throw new Error("You are not authenticated to notion.");
  }
  const notion = new Client({ auth: auth });
  return await notion.search({
    page_size: 100,
    filter: { property: "object", value: "database" },
  });
}

export async function createPageInDb(
  databaseId: string,
  title: string,
  markdown: string,
) {
  const auth = cookies().get("notion_token")?.value;
  if (!auth) {
    throw new Error("You are not authenticated to notion.");
  }
  try {
    const notion = new Client({ auth: auth });
    const page = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title: [
            {
              type: "text",
              text: {
                content: title,
              },
            },
          ],
        },
      },
    });
    await notion.blocks.children.append({
      block_id: page.id,
      children: markdownToBlocks(markdown) as BlockObjectRequest[],
    });
    return true;
  } catch (error) {
    return false;
  }
}
