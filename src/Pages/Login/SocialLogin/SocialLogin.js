import React from "react";
import google from "../../../images/Social/google.svg";
import facebook from "../../../images/Social/Facebook.svg";
import github from "../../../images/Social/github.svg";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../Hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [token] = useToken(user || user1);
  const navigate = useNavigate();
  let errorElement;
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message}
          {error1?.message}
        </p>
      </div>
    );
  }

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary  w-50"></div>
        <p className="mt-3 mx-2">or</p>
        <div style={{ height: "1px" }} className="bg-secondary  w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img style={{ height: "30px" }} src={google} alt="" />
          <span className="px-3">Google SignIn</span>
        </button>
        <button className="btn btn-info w-50 d-block mx-auto my-2">
          <img style={{ height: "30px" }} src={facebook} alt="" />
          <span className="px-3">Facebook SignIn</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 d-block mx-auto"
        >
          <img style={{ height: "30px" }} src={github} alt="" />
          <span className="px-3">Github SignIn</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
