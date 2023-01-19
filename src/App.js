import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";
import "react-photo-view/dist/react-photo-view.css";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <div>
      <SkeletonTheme baseColor="#101010" highlightColor="#ffffff">
        <RouterProvider router={router} />
      </SkeletonTheme>
    </div>
  );
}

export default App;
