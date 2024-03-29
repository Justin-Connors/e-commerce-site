import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const NoMatch = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <div className="container">
      <h1>This page does not exist</h1>
    </div>
  );
};

export default NoMatch;
