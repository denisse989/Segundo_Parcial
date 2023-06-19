import { useEffect, useState } from "react";
import { Navigate, Route, Routes, Switch } from "react-router-dom";
import { MoviesPage} from "../pages/MoviesPage";
import { GuardedRoute } from "../../guards/GuaardedRoute";
import { useStore } from "../../context/ContextProvider";
import {SearchPage } from "../pages/SearchPage";
import { SettingsPage } from "../pages/SettingsPage";

export const AppRoutes = () => {
  const { auth } = useStore();
   useEffect(() => {
    localStorage.setItem("auth", auth);
  }, [auth]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <GuardedRoute auth={auth}>
            <MoviesPage />
          </GuardedRoute>
        }
      />
      <Route
        path="/search"
        element={
          <GuardedRoute auth={auth}>
            <SearchPage />
          </GuardedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <GuardedRoute auth={auth}>
            <SettingsPage />
          </GuardedRoute>
        }
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
