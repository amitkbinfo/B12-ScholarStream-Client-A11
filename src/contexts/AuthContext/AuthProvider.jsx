import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   Registration
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Update Profile
  const updateUserProfile = (userProfile) => {
    return updateProfile(auth.currentUser, userProfile);
  };

//   Update User Password
  const updateUserPassword = (newPassword) => {
  return updatePassword(auth.currentUser, newPassword);
};

//   Sign In
const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

// Google Sign In
const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}
//   Sign Out
const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
}

  // Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    updateUserPassword,
    signInUser,
    googleSignIn,
    signOutUser
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
