import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
// context api create korte hobe, jehetu onek place e use korbo tai component er baire likhbo
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //============ AUTH STATE WATCH ===============//

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  //============ CREATE USER  ===============//
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //============ LOGIN USER  ===============//

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //============ LOGOUT USER  ===============//
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // UPDATE USER NAME AND PHOTO
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //============ EMAIL VERIFICATION TO THE USER ===============//
  const verifyEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  // ============= PASSWORD RESET ====================//
  const forgetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  // ============= GOOGLE AUTHENTICATION  ====================//
  const googleSign = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    verifyEmail,
    forgetPassword,
    googleSign,
  };
  return (
    // context use korte hole provider add kore dite hoy
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
