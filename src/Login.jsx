import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../src/css/login.css";
import { loginuser } from "./features/userSlice";
import { auth } from "./firebase";
function Login() {
  const [signup, setSignup] = useState(false);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();

    if (!name) {
      return alert("Name is Required.");
    }

    if (!photoURL) {
      return alert("PhotoURL is Required.");
    }

    if (!email) {
      return alert("Email is Required. ");
    }

    if (!password) {
      return alert("Password is Required. ");
    }
    console.log(email);
    console.log(password);
    auth
      .createUserWithEmailAndPassword(email.trim(), password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoURL,
          })
          .then(() => {
            dispatch(
              loginuser({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                photoURL: photoURL,
                displayName: name,
              })
            );
          });
      })
      .catch(error => alert(error));
    setName("");
    setPhotoURL("");
    setEmail("");
    setPassword("");
  };

  const signIn = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    if (!email) {
      return alert("Email is Required. ");
    }

    if (!password) {
      return alert("Password is Required. ");
    }
    auth
    .signInWithEmailAndPassword(email.trim(), password)
    .then(({ user }) => {
      dispatch(
        loginuser({
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL,
          displayName: user.displayName,
        })
      );
    })
    .catch(error => alert(error));
  };

  return (
    <>
      <div className="loginScreen">
        <img
          src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-9.png"
          alt=""
          srcSet=""
        />
        {signup === true ? (
          <form onSubmit={register}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              name="name" 
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Profile Picture URL"
              value={photoURL}
              name="photoURL" 
              onChange={(e) => setPhotoURL(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input type="submit" value="Sign Up" />
            <h4>
              Already a member ?{" "}
              <span onClick={(e) => setSignup(false)}>Login Here</span>
            </h4>
          </form>
        ) : (
          <form onSubmit={signIn}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input type="submit" value="Sign In" />
            <h4>
              Not a member ?{" "}
              <span onClick={(e) => setSignup(true)}>Register Here</span>
            </h4>
          </form>
        )}
      </div>
    </>
  );
}

export default Login;
