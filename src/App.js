import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Posts = lazy(() => import("./pages/Posts"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} exact />
          <Route path={ROUTES.POSTS} element={<Posts />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
