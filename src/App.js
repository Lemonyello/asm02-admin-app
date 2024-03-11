import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import DashboardPage, {
  loader as loaderDashboard,
} from "./pages/dashboard/Dashboard";
import HotelDashboardPage from "./pages/hotel/hotel dashboard/HotelDashboard";
import AddHotelPage from "./pages/hotel/add hotel/AddHotel";
import RoomDashboardPage from "./pages/room/room dashboard/RoomDashboard";
import AddRoomPage from "./pages/room/add room/AddRoom";
import TransactionDashboardPage from "./pages/transaction/TransactionDashboard";
import Login, { action as actionLogin } from "./pages/login/Login";
import {
  action as actionAddHotel,
  loader as loaderHotel,
} from "./components/hotel/EditHotelForm/EditHotelForm";
import { loader as loaderRooms } from "./components/room/RoomList/RoomList";
import {
  action as actionAddRoom,
  loader as loaderRoom,
} from "./components/room/EditRoomForm/EditRoomForm";
import { loader as loaderHotels } from "./components/hotel/HotelList/HotelList";
import { loader as loaderTransactions } from "./components/transaction/TransactionList/TransactionList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    action: actionLogin,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <DashboardPage />,
        loader: loaderDashboard,
      },
      {
        path: "hotels",
        children: [
          {
            index: true,
            element: <HotelDashboardPage />,
            loader: loaderHotels,
          },
          {
            path: "add-new",
            element: <AddHotelPage />,
            action: actionAddHotel,
          },
          {
            path: "edit/:hotelId",
            element: <AddHotelPage />,
            action: actionAddHotel,
            loader: loaderHotel,
          },
        ],
      },
      {
        path: "rooms",
        children: [
          {
            index: true,
            element: <RoomDashboardPage />,
            loader: loaderRooms,
          },
          {
            path: "add-new",
            element: <AddRoomPage />,
            action: actionAddRoom,
            loader: loaderRoom,
          },
          {
            path: "edit/:roomId",
            element: <AddRoomPage />,
            action: actionAddRoom,
            loader: loaderRoom,
          },
        ],
      },
      {
        path: "transactions",
        element: <TransactionDashboardPage />,
        loader: loaderTransactions,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
