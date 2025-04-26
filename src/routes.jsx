// src/router.tsx
import {
    createRootRoute,
    createRoute,
    createRouter,
    createBrowserHistory,
  } from "@tanstack/react-router";
  
  import RootLayout from "./Components/RootLayout";
  import HomePage from "./Pages/HomePage";
  import AboutPage from "./Pages/AboutPage";
  import LoginPage from "./Pages/LoginPage";
import UsersPage from "./Pages/UsersPage";
  
  // 1) Sólo layout en el root, sin path
  const rootRoute = createRootRoute({
    component: RootLayout,
  });
  
  // 2) Definir las rutas hijas con su getParentRoute
  const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: HomePage,
  });
  
  const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/about",
    component: AboutPage,
  });

  const usersRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/users",
    component: UsersPage, 
  });
  
  
  const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/login",
    component: LoginPage,
  });
  
  // 3) Anidar las rutas
  rootRoute.addChildren([homeRoute, aboutRoute, loginRoute, usersRoute]);
  
  // 4) Crear y exportar el router correctamente
  export const router = createRouter({
    routeTree: rootRoute,
    history: createBrowserHistory(),
  });
  
  export default router;
  