import Card from "@mui/material/Card";
import { FaPlus } from "react-icons/fa";
import MainLayout from "./components/layout/MainLayout";
import { IoMdArrowDropdown } from "react-icons/io";
import tableFilter from "./assets/images/table-filter.svg";
import cardFilter from "./assets/images/card-filter.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import CardOverview from "./components/layout/CardOverview";

function App() {
  const [selectedVal, setSelectedVal] = useState<string>("card-filter");

  const pageLaout = () => {
    if (selectedVal === "table-filter") {
      return "Table layout";
    } else if (selectedVal === "card-filter") {
      return (
        <>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <CardOverview />
            <CardOverview />
            <CardOverview />
            <CardOverview />
            <CardOverview />
            <CardOverview />
            <CardOverview />
            <CardOverview />
          </div>
        </>
      );
    }
  };

  return (
    <MainLayout>
      <div className="max-w-1xl mx-auto">
        <div className="flex flex-row">
          <div className="flex">
            <div className="font-medium text-[#404040] w-[120px] h-[39px] text-2xl flex items-center justify-start">
              Projects
            </div>
            <button className="bg-[#2D446E] text-white w-[100px] h-[40px] rounded-lg border border-gray-300 font-medium flex items-center justify-center gap-2">
              <span>
                <FaPlus />
              </span>
              Project
            </button>
          </div>

          <div className="ml-auto">
            <span className="text-gray-500">Dashboard /</span>{" "}
            <span className="text-[#4a90e2]">Project Overview</span>
          </div>
        </div>
        {/* all projects */}
        <div className="flex flex-row items-center justify-between mt-4">
          <div className="flex items-center text-[#2D446E] font-semibold text-[20px] gap-3 cursor-pointer">
            All Projects <IoMdArrowDropdown />
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <div
              className={`cursor-pointer border ${
                selectedVal === "table-filter"
                  ? "border-grey-500"
                  : "border-transparent"
              } rounded`}
              onClick={() => setSelectedVal("table-filter")}
            >
              <img src={tableFilter} alt="table-filter" />
            </div>
            <div
              className={`cursor-pointer  border ${
                selectedVal === "card-filter"
                  ? "border-grey-500"
                  : "border-transparent"
              } rounded`}
              onClick={() => setSelectedVal("card-filter")}
            >
              <img src={cardFilter} alt="card-filter" />
            </div>
            <div className="cursor-pointer">
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>

        {/* page layout */}
        <Card
          variant="outlined"
          className="p-4 mt-3 shadow-lg"
          style={{ borderRadius: "8px" }}
        >
          <div className="grid grid-cols-4 gap-4">
            <div
              className="bg-[#B0B0B0] text-white rounded text-center cursor-pointer flex items-center justify-center"
              style={{ width: "110px", height: "30px", borderRadius: "8px" }}
            >
              Not Started 2
            </div>
            <div
              className="bg-[#4A90E2] text-white rounded text-center cursor-pointer flex items-center justify-center"
              style={{ width: "110px", height: "30px", borderRadius: "8px" }}
            >
              In Progress 2
            </div>
            <div
              className="bg-[#607D8B] text-white rounded text-center cursor-pointer flex items-center justify-center"
              style={{ width: "110px", height: "30px", borderRadius: "8px" }}
            >
              Archived 2
            </div>
            <div
              className="bg-[#4CAF50] text-white rounded text-center cursor-pointer flex items-center justify-center"
              style={{ width: "110px", height: "30px", borderRadius: "8px" }}
            >
              Completed 2
            </div>
          </div>
          {pageLaout()}
        </Card>
      </div>
    </MainLayout>
  );
}

export default App;
