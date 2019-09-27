import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

export default function Page1() {
  const {user} = useContext(UserContext);

  useEffect(() => {
    document.title = "Page 1"
  });
  return (
    <div className="page">
      <h1>Hello this is page 1</h1>
      <pre>{JSON.stringify(user,null,2)}</pre>
      {/* <p>This message is {value}</p> */}
    </div>
  );
}
