import React from "react";
import { FaApple } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";

const Header = () => {
  const menu = [
    {
      name: "store"
    },
    {
      name: "mac"
    },
    {
      name: "ipad"
    },
    {
      name: "iphone"
    },
    {
      name: "watch"
    },
    {
      name: "airpods"
    },
    {
      name: "TV & home"
    },
    {
      name: "entertainment"
    },
    {
      name: "accessories"
    },
    {
      name: "support"
    }
  ];
  return (
    <>
      <div className="w-[991px] flex justify-between item-center mx-auto py-3">
        <div className="w-[40%] flex justify-center item-center">
          <FaApple className="text-[20px]" />
        </div>
        {/* <div className="w-[85%] flex justify-center item-center"> */}
         {menu.length > 0 ? menu.map((each , index)=>{
            return(<>
            <div key={index} className="w-[70%] flex justify-between item center">
                <ul className="w-[80%] mx-auto">
                    <li className="capitalize text-[12px] text-center ">{each.name}</li>
                </ul>
            </div>
            </>)
         }):""}
          <div className="w-[40%] flex justify-center item-center">
          <IoSearchOutline className="text-[20px]" />
        </div>
        <div className="w-[40%] flex justify-center item-center">
          <CiShop className="text-[20px]" />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Header;
