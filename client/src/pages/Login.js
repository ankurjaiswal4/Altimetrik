import React, { useState } from "react";
import { login } from "../services/userService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/actions";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginFailed, setLoginFailed] = useState();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginFailed(null);
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const checkFormValid = () => {
    if (formData.email === "" || formData.password === "") {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: formData.email,
      password: formData.password,
    };

    login(user)
      .then((res) => {
        if (res) {
          console.log("🚀 ~ login ~ res:", res);
          dispatch(setUser({ authenticated: true, ...res }));
          navigate(`/`, { replace: true });
        } else {
          setLoginFailed(true);
        }
      })
      .catch((err) => {});
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={onSubmit}>
            <div className="form-row">
              {loginFailed && (
                <div className="alert alert-danger" role="alert">
                  Login Failed
                </div>
              )}
            </div>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>{formData.error}</div>
            <button
              type="submit"
              className="btn btn-lg btn-primary btn-block"
              disabled={checkFormValid()}
            >
              Sign in
            </button>
          </form>

          <br />
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={() => navigate("/register")}
          >
            Sign Up!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
