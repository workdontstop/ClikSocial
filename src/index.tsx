import React from "react";
import ReactDOM from "react-dom/client"; // Import from react-dom/client
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import AllReducer from "./All-Reducers";
import { createStore, compose } from "redux";
import { GoogleOAuthProvider } from '@react-oauth/google';


const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;

require("dotenv").config();


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  AllReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);


// Change starts here: using createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <GoogleOAuthProvider clientId="925807402173-6kj6mgja6dtd744sm41eakta5mrffl5u.apps.googleusercontent.com">
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
