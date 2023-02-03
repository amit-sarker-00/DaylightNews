import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";
import "react-photo-view/dist/react-photo-view.css";
import 'react-photo-view/dist/react-photo-view.css';
import 'react-loading-skeleton/dist/skeleton.css'

import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

const queryClient = new QueryClient()
function App() {
  return (
    <div>

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
