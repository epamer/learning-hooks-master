import React from "react";

import Login from "./Login";
import Register from "./Register";
import { useUserState } from "../hooks";

const Logout = React.lazy(() => import("./Logout"));

function UserBar() {
  const user = useUserState();

  if (user) {
    return <Logout />;
  } else {
    return (
      <div className="flex-row">
        <div className="flex-small">
          <Login />
        </div>
        <div className="flex-small">
          <Register />
        </div>
      </div>
    );
  }
}

export default UserBar;
