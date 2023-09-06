import React from "react";
import Messages from "../../components/admin/Message";

const page = () => {
  return (
    <div className="p-4 sm:ml-64 mt-[60px] space-x-5 flex flex-wrap">
      <Messages />
      <Messages />
    </div>
  );
};

export default page;
