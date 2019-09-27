import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { login } from "./login";

export default function Home() {
  // const {value, setValue} = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    document.title = "HomePage"
  });
  
  return (
    <div className="page">
      <h1>Hello!</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {/* <button onClick = {() => setValue("from  my home")}> change message</button> */}
      {user ? (
        <button
          onClick={() => {
            setUser(null); 
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </div>
  );
}
