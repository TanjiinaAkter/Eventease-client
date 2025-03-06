import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
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
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //============ AUTH STATE WATCH ===============//

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //console.log('auth provider user check',currentUser);
      // ====== post request for token and if get token we will store the token in localstorage ======//
      if (currentUser) {
        const userInfo = {
          email: currentUser.email,
        };
        //console.log('auth provider send jwt user email check',userInfo);
        axiosPublic
          .post("/jwt", userInfo)
          .then((res) => {
            console.log(
              res.data.token,
              "auth provider post jwt then token get or not for  user email check"
            );
            if (res.data.token) {
              localStorage.setItem("access-token", res.data.token);
            }
          })
          .catch((err) => {
            console.error("JWT Error:", err);
          })
          .finally(() => setLoading(false));
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    //clean up function
    return () => {
      return unSubscribe();
    };
  }, [axiosPublic]);
  //============ CREATE USER  ===============//
  const createUser = (email, password) => {
    setLoading(true); //Authentication complete
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
  const updateUserProfile = async (name, photo) => {
    setLoading(true); // Start loading

    try {
      // Update the Firebase auth profile
      // just authprovider ei same firebase er moto photoURL ar displayName dite hobe
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      // Optionally, handle any additional logic here (e.g., notifications, etc.)
      console.log("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      // Optionally, handle errors (show a message to the user, etc.)
    } finally {
      setLoading(false); // Stop loading after the update process
    }
  };

  // const updateUserProfile = (name, photo) => {
  //   setLoading(true);
  //   // just authprovider ei same firebase er moto photoURL ar displayName dite hobe
  //   return updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: photo,
  //   });
  // };

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
