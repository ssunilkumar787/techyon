import Card from "@mui/material/Card";
import { FaPlus } from "react-icons/fa";
import MainLayout from "./components/layout/MainLayout";
import { IoMdArrowDropdown } from "react-icons/io";
import tableFilter from "./assets/images/table-filter.svg";
import cardFilter from "./assets/images/card-filter.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import CardOverview from "./components/layout/CardOverview";
import ProjectTable from "./components/layout/ProjectTable";

type Project = {
  id: string;
  name: string;
  progress: number;
  startDate: string;
  endDate: string;
  files: number;
  members: number;
};

function App() {
  const [selectedVal, setSelectedVal] = useState<string>("card-filter");

  const projectsData: Project[] = [
    {
      id: "P-01",
      name: "Project Alpha",
      progress: 20,
      startDate: "01/01/2024",
      endDate: "31/01/2024",
      files: 10,
      members: 4,
    },
    {
      id: "P-02",
      name: "Project Beta",
      progress: 40,
      startDate: "01/02/2024",
      endDate: "28/02/2024",
      files: 15,
      members: 3,
    },
    {
      id: "P-03",
      name: "Project Gamma",
      progress: 60,
      startDate: "01/03/2024",
      endDate: "31/03/2024",
      files: 8,
      members: 5,
    },
    {
      id: "P-04",
      name: "Project Delta",
      progress: 80,
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      files: 12,
      members: 6,
    },
    {
      id: "P-05",
      name: "Project Epsilon",
      progress: 50,
      startDate: "01/05/2024",
      endDate: "31/05/2024",
      files: 9,
      members: 3,
    },
    {
      id: "P-06",
      name: "Project Zeta",
      progress: 30,
      startDate: "01/06/2024",
      endDate: "30/06/2024",
      files: 7,
      members: 2,
    },
    {
      id: "P-07",
      name: "Project Eta",
      progress: 90,
      startDate: "01/07/2024",
      endDate: "31/07/2024",
      files: 14,
      members: 4,
    },
    {
      id: "P-08",
      name: "Project Theta",
      progress: 70,
      startDate: "01/08/2024",
      endDate: "31/08/2024",
      files: 10,
      members: 5,
    },
  ];

  const pageLayout = () => {
    if (selectedVal === "table-filter") {
      return (
        <>
          <ProjectTable />
        </>
      );
    } else if (selectedVal === "card-filter") {
      return (
        <div className="grid grid-cols-4 gap-4 mt-4">
          {projectsData.map((project) => (
            <CardOverview key={project.id} project={project} />
          ))}
        </div>
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
              className={`cursor-pointer border ${
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

        <Card
          variant="outlined"
          className="p-4 mt-3 shadow-lg"
          style={{ borderRadius: "8px" }}
        >
          <div
            className={`grid grid-cols-4 gap-4 ${
              selectedVal === "table-filter" ? "hidden" : ""
            }`}
          >
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
          {pageLayout()}
        </Card>
      </div>
    </MainLayout>
  );
}

export default App;
