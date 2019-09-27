import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Page1() {
  const {user} = useContext(UserContext);

  return (
    <div className="page">
      <h1>Hello this is page 1</h1>
      <pre>{JSON.stringify(user,null,2)}</pre>
      {/* <p>This message is {value}</p> */}
    </div>
  );
}
