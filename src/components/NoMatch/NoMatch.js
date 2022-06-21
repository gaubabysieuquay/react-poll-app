import React from "react";

const NoMatch = (props) => {
  console.log("🚀 ~ file: NoMatch.js ~ line 4 ~ NoMatch ~ props", props);
  const toHome = (e) => {
    e.preventDefault();

    props.history.push("/");
  };
  return (
    <div style={{ display: "flex" }}>
      <img
        src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-12188.jpg?t=st=1655815274~exp=1655815874~hmac=02d0194fe31124d07febdbc84f95b7ffbcc196f5da59ebcd87ae8a79940191cf&w=826"
        alt="Page not found"
      />
      <button
        className="btn-contained"
        style={{ alignSelf: "center" }}
        onClick={toHome}
      >
        Go back to Home
      </button>
    </div>
  );
};

export default NoMatch;
