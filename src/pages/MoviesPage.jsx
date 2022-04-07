import React from "react";
import Movies from "../components/Movies";

function MoviesPage() {
  return (
    <div>
      <h1 style={{ margin: "30px 0", textAlign: "center" }}> Movies </h1>
      <Movies />
    </div>
  );
}

export default MoviesPage;
