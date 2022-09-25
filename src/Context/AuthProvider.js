import React, { useState } from "react";
import { Spin } from "antd";
import { auth } from "../components/firebase/config";
import { useHistory } from "react-router-dom";

export const AuthContext = React.createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        setIsLoading(false);
        history.push("/");
        return;
      }
      setIsLoading(false);
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
