import React, { useState } from "react";
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import 'bootstrap/dist/css/bootstrap.min.css';
import googleIcon from '../../icons/Group 573.png';
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let {from} = location.state || {
    from: { pathname: "/"}
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
