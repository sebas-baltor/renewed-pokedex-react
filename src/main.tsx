import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./lib/store.ts";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/home.tsx";
import PokemonByName from "./pages/pokemon/by-name.tsx";
import { pokemonByNameLoader } from "./lib/loader/pokemon-by-name.loader.ts";
import ErrorPage from "./pages/error-page.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home />,errorElement: <ErrorPage /> },
  {
    path: "/pokemon/:name",
    element: <PokemonByName />,
    loader: pokemonByNameLoader,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
