import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pagelength = 5;
  const apiKey = "d21f6f1cc2c5401ab9069071b08b5e90";
  const country = "in";

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />

        <Routes>
          <Route
            caseSensitive={false}
            path="/"
            element={
              <News
                setProgress={setProgress}
                key={"general"}
                country={country}
                pageSize={pagelength}
                category={"general"}
                apiKey={apiKey}
              />
            }
          />
          <Route
            caseSensitive={false}
            path="business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                country={country}
                pageSize={pagelength}
                category={"business"}
                apiKey={apiKey}
              />
            }
          />
          <Route
            caseSensitive={false}
            path="entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                country={country}
                pageSize={pagelength}
                category={"entertainment"}
                apiKey={apiKey}
              />
            }
          />
          <Route
            caseSensitive={false}
            path="general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                country={country}
                pageSize={pagelength}
                category={"general"}
                apiKey={apiKey}
              />
            }
          />
          <Route
            path="health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                country={country}
                pageSize={pagelength}
                category={"health"}
                apiKey={apiKey}
              />
            }
          />
          <Route
            caseSensitive={false}
            path="science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                country={country}
                pageSize={pagelength}
                category={"science"}
                apiKey={apiKey}
              />
            }
          />
          <Route
            caseSensitive={false}
            path="sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                country={country}
                pageSize={pagelength}
                category={"sports"}
                apiKey={apiKey}
              />
            }
          />
          <Route
            caseSensitive={false}
            path="technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                country={country}
                pageSize={pagelength}
                category={"technology"}
                apiKey={apiKey}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
