import React from "react";
import Navbar from "./componet/Navbar";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./componet/Footer";
import Allroom from "./pages/Allroom";
import RoomDetails from "./pages/RoomDetails";
import Mybooking from "./pages/Mybooking";
import HotelReg from "./componet/HotelReg";
import Layout from "./pages/HotelOwner/Layout";
import Addroom from "./pages/HotelOwner/Addroom";
import ListRoom from "./pages/HotelOwner/ListRoom";

import Dashb from "./pages/HotelOwner/Dashb";

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
    {false &&  <HotelReg/>}
      <div className="min-h-[70px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Allroom/>} />
          <Route path="/rooms/:id" element={<RoomDetails/>} />
          <Route path="/my-bookings" element={<Mybooking/>} />
          <Route path="/owner" element={<Layout/>}>
          <Route index  element={<Dashb/>}/>
           <Route path="add-room" element={<Addroom/>} />
           <Route path="list-room" element={<ListRoom/>} />

          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
