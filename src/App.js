import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from "./helpers/routeHelper";
import Home from "./pages/home";
import Login from "./pages/login";
import { routes } from "./routes/Routes";
import Posts from "./pages/posts";
import Register from "./pages/register";
import Chat from "./pages/chat";
import UserPosts from "./pages/userPosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path={routes.posts}
          element={
            <PublicRoute>
              <Posts />
            </PublicRoute>
          }
        />
        <Route
          path={routes.login}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path={routes.register}
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path={`${routes.userPosts}/:userId`}
          element={
            <PublicRoute>
              <UserPosts />
            </PublicRoute>
          }
        />
        <Route
          path={routes.home}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path={routes.chat}
          element={
            <PublicRoute>
              <Chat />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Navigate to={routes.posts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
