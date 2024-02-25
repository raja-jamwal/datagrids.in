import React, { PropsWithChildren } from "react";

function Layout(props: PropsWithChildren) {
  return (
    <div className="flex flex-col max-w-[300px] h-screen space-y-1 p-4">
      {props.children}
    </div>
  );
}

export default Layout;
