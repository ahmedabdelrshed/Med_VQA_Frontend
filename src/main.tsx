import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";
import  { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
    <Toaster />
  </Provider>
);
