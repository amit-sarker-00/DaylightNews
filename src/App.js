import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";
import 'react-photo-view/dist/react-photo-view.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
