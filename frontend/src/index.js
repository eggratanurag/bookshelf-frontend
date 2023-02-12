import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import UserProvider from "./context/userProvider";
import {WishlistProvider,OrdersProvider} from "./context/productProvider";

const PORT = process.env.PORT || 5000;
axios.defaults.baseURL = `http://localhost:${PORT}/`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <OrdersProvider>
    <WishlistProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </WishlistProvider>
   </OrdersProvider>
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
