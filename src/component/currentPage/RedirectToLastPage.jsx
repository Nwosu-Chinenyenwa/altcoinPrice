import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  return useEffect(() => {
    const lastpage = localStorage.getItem("lastvisitedpage");

    if(lastpage && lastpage !== window.location.pathname){
        navigate(lastpage, {replace:true})
    }
  }, []);

  return null;
}
