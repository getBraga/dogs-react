import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { UserStorage } from "./UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import ProtectedRoute from "./Helper/ProtectedRoute";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <Login />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
