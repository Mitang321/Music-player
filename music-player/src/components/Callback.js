import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        if (item) {
          const parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});

    const { access_token } = hash;
    if (access_token) {
      localStorage.setItem("spotifyToken", access_token);
      navigate("/");
    }
  }, [navigate]);

  return <div>Processing authentication...</div>;
}

export default Callback;
