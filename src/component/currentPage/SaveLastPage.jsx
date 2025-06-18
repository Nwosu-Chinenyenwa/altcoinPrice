import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SaveLastPage() {
  const location = useLocation();
  return useEffect(() => {
    localStorage.setItem("lastpage", location.pathname);
  }, [location]);

  return null;
}
