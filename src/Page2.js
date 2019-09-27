import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";


export default function Page2(){
  const {user} = useContext(UserContext);
  useEffect(() => {
    document.title = "Page2"
  });
  return(
    <div>
      <h1>This is page 2</h1>
      <h2>Omg! I am </h2>
      <pre>{JSON.stringify(user,null,2)}</pre>
    </div>
  )
  
}

