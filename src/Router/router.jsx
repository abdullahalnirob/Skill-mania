import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import App from "../App";
import CourseDetail from "../pages/courseDetails";
import Register from "../pages/Resgister";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/course-details/:id",
        loader: () => fetch("/course.json"),
        element: <CourseDetail />,
      },
      {
        path:"/register",
        element:<Register/>
      }
    ],
  },
]);

export default router;
