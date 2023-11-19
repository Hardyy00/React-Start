import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useRef } from "react";

const Auth = () => {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const loginHandler = (event) => {
    event.preventDefault();
    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      return;
    }

    dispatch(authActions.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
