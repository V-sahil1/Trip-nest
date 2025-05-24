import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "../componet/StarRating";
import { Link } from "react-router-dom";
// import { GoArrowUpRight } from "react-icons/go";

function RoomDetails() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);
  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Room details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1
            className="text-3xl md:text-4xl font-payfair
        "
          >
            {room.hotel.name}
            <span className="font-inter text-sm">({room.roomType})</span>
          </h1>
          <p className="text-sm font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
            20%OFF
          </p>
        </div>
        {/* room rating */}
        <div className="flex items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>
        {/* Room address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>
        {/* room images */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="room-image"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  alt="Room Image"
                  onClick={() => setMainImage(image)}
                  className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                    mainImage === image && "outline-3 outline-orange-500"
                  }`}
                />
              ))}
          </div>
        </div>
        {/* Room  Highlights */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1>Experience luxury Like Never Before</h1>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-2 rounded-lg bg-gray-100"
                >
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="w-5 h-5"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* room price per night */}
          <p className="text-2xl font-medium">₹{room.pricePerNight}/Night</p>
        </div>
        <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
          <div className="flex flex-col flex-wrap md:flex-row items-start md:items-centergap-4 md:gap-10 text-gray-500">
            <div className="flex  flex-col">
              <label htmlFor="checkIndate">Check-In</label>
              <input
                type="date"
                name=""
                id="checkInDate"
                placeholder="Check-In"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
            <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
            <div className="flex  flex-col">
              <label htmlFor="CheckOutdate">Check-Out</label>
              <input
                type="date"
                name=""
                id="checkOutDate"
                placeholder="Check-Out"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
            <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
            <div className="flex  flex-col">
              <label htmlFor="Guests">Guests</label>
              <input
                type="number"
                name=""
                id="Guests"
                placeholder="Guests"
                className="max-w-30 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>

            {/* 3:18:07 */}
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 text-base cursor-pointer"
          >
            Check Availability
          </button>
        </form>

        {/* common Specification */}
        <div className="mt-25 space-y-4">
          {roomCommonData.map((spec, index) => (
            <div key={index} className="flex items-start gap-2">
              <img
                src={spec.icon}
                alt={`${spec.title}-icon`}
                className="w-6.5"
              />
              <div>
                <p className="text-base">{spec.title}</p>
                <p className="text-gray-500">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl  border-y border-gray-300 my-15 py-10 text-gray-500">
          <p>At Trip Nest, guests are allocated on the ground floor based on availability. You'll enjoy a cozy two-bedroom apartment that captures the true vibe of the city.The listed price is for two guests. To get accurate pricing for larger groups, please select the correct number of guests in the booking section.</p>
        </div>

        {/* Location */}
        <Link to={'https://www.google.com/maps/search/?api=1&query='+room.hotel.address} target='_blank'   > 
        <div className=" space-y-4 relative    ">
          <h2 className="text-3xl">Location On Map </h2>
          <img src={room.hotel.map} alt="" className="w-[90%] h-[75%] "/>
          <p className="text-[20px] font-bold w-[50%]">{room.hotel.address}</p>
       
        </div>
        </Link>

        {/* Hosted by */}
        <div className="flex flex-col items-start mt-[20px] gap-4">
          <div className="flex gap-4">
            <img src="https://www.logoai.com/uploads/output/2025/04/19/0c61fa6a79a7055a4dfd9b288e882c41.jpg" alt="host" className="h-14 w-14 md:h-18 md:w-18 rounded-full" />
            <div>
              <p className="text-lg md:text-xl">Hosted By VistaarX</p>
              <div className="flex  items-center mt-1">
                   <StarRating/>
              <p className="ml-2">200+ reviews</p>
              </div>
           
            </div>
          </div>
          <button className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">Contact Now</button>

        </div>

      </div>
    )
  );
} 

export default RoomDetails;
