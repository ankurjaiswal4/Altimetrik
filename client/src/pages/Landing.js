import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../redux/actions/actions";
import { fetchUserDetails } from "../services/userService";
import { setAuthHeader } from "../services/network";
import GridData from "../components/GridData";

function Landing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const fetchedDetails = async () => {
    const data = await fetchUserDetails();
    if (data?.length > 0) setData(data);
  };

  const { authenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (authenticated) {
      setAuthHeader();
      fetchedDetails();
    }
  }, [authenticated]);

  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <div className="col-sm-8 mx-auto">
          <h1 className="text-center">
            WELCOME: <span>Authenticated: {JSON.stringify(authenticated)}</span>
          </h1>
        </div>
        <br />
        {!authenticated ? (
          <div className="col-md-6 mx-auto">
            <button
              className="btn btn-lg btn-primary btn-block"
              onClick={() => navigate("/login")}
            >
              Go to Login!
            </button>
            <br />
            <br />
            <button
              className="btn btn-lg btn-primary btn-block"
              onClick={() => navigate("/register")}
            >
              Go to Sign Up!
            </button>
          </div>
        ) : (
          <>
            <div>User details: </div>
            <GridData data={data} />
            <button
              className="btn btn-lg btn-primary btn-block"
              onClick={() => dispatch(removeUser())}
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Landing;
