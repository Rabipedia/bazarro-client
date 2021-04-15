import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import 'bootstrap/dist/css/bootstrap.min.css';
import googleIcon from '../../icons/Group 573.png';

const Login = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  const [user, setUser] = useState({
    isSignedIn: "false",
    name: "",
    email: "",
  });


  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
        const {displayName, email} = result.user;
        const signedInUser = {
            isSignedIn: 'true',
            name: displayName,
            email: email
        }
        setUser(signedInUser)
    })
    .catch((error) => {
        console.log(error);
    });
  
  }
  return (
    <div  className="mt-5" style={{ textAlign: 'center' }}>
        <button className="signIn-btn btn btn-secondary" onClick={handleGoogleSignIn}><img src={googleIcon} alt=""/><span className="ml-2">Sign in with Google</span></button>
    </div>
  );
  
};

export default Login;
