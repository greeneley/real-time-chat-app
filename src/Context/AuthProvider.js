import React, { useState } from "react";
import { Spin } from "antd";
import { auth } from "../components/firebase/config";
import { useHistory } from "react-router-dom";

export const AuthContext = React.createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  React.useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged((user) => {
      console.log({ user });
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL
        });
        setIsLoading(false);
        history.push("/");
      }
      history.push("/login");
    });

    return () => {
      unsubscibed();
    };
  }, [history]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
}
