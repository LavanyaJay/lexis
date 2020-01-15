import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Provider store={store}>
        <Route>
          <App />
        </Route>
      </Provider>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
