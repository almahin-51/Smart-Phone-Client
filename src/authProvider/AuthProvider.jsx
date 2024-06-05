/* eslint-disable react/prop-types */
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // console.log(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const logout = () => {
    return signOut(auth).then(() => setUser(null));
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider).then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
          photoURL: data?.user?.photoURL,
        };
        fetch("https://smart-phone-server.onrender.com/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data?.token);
          });
      }
    });
  };
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [user, setUser]);

  const authInfo = {
    user,
    googleLogin,
    facebookLogin,
    createUser,
    logout,
    loading,
    error,
    signIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
