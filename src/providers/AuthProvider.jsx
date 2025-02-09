import { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";
// context api create korte hobe, jehetu onek place e use korbo tai component er baire likhbo
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const authInfo = {
    user,
    loading,
  };
  return (
    // context use korte hole provider add kore dite hoy
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
