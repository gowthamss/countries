import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./redux/store";
import "./fontawesome";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
