import { useState } from "react";
import { Alert } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";

import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-red-500">Ur mother is my hoether</h1>
      <Alert>
        <Spinner />
      </Alert>
    </>
  );
}

export default App;
