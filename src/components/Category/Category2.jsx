import React from "react";
import { useNavigate } from "react-router-dom";
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";

const Category = () => {
  const navigate = useNavigate();

  const handleBrowse = () => {
    navigate("/shop");
  };

  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                  handler={handleBrowse}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[250px] max-w-none absolute top-1/2 -translate-y-1/2 right-0 object-contain"
            />
          </div>
          {/* Second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start overflow-hidden">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                  handler={handleBrowse}
                />
              </div>
            </div>
            <img src={Image2} alt="" className="w-[320px] max-w-none absolute bottom-0 right-0 object-contain" />
          </div>
          {/* Third col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start overflow-hidden">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Gadget
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                  handler={handleBrowse}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[200px] max-w-none absolute bottom-0 right-0 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
