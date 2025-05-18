import React, { useState } from "react";
import SignUp from "./components/registration/signUp/SignUp";
import SignIn from "./components/registration/signIn/SignIn";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/Layout";
import TaskPage from "./components/tasks/taskPage/TaskPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="tasks" element={<TaskPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
