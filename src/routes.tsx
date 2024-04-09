import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import MasterLayout from "./layouts/MasterLayout";

export default function RouteList() {

    const routesList = createBrowserRouter([
        {
            path: "/",
            element: <MasterLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    path: "/",
                    element: <App />,
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={routesList} />
    )
}
