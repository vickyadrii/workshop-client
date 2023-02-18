import { HomePage, HomePageId } from "./pages";

const homeRoutes = [
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/home/:id",
    element: <HomePageId />,
  },
];
export default homeRoutes;
