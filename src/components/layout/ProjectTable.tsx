import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

interface Project {
  id: number;
  projectName: string;
  percentage: string;
  owner: string;
  tasksCompleted: number;
  totalTasks: number;
  status: string;
  startDate: string;
  endDate: string;
}

const projects: Project[] = [
  {
    id: 1,
    projectName: "Techyon Software",
    percentage: "50%",
    owner: "Techyon",
    tasksCompleted: 10,
    totalTasks: 20,
    status: "Not Started",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 2,
    projectName: "Techyon Software",
    percentage: "50%",
    owner: "Techyon",
    tasksCompleted: 10,
    totalTasks: 20,
    status: "In Progress",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 3,
    projectName: "Techyon Software",
    percentage: "50%",
    owner: "Techyon",
    tasksCompleted: 10,
    totalTasks: 20,
    status: "Completed",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 4,
    projectName: "Techyon Software",
    percentage: "50%",
    owner: "Techyon",
    tasksCompleted: 10,
    totalTasks: 20,
    status: "Archived",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 5,
    projectName: "Techyon Software",
    percentage: "50%",
    owner: "Techyon",
    tasksCompleted: 10,
    totalTasks: 20,
    status: "Not Started",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 6,
    projectName: "Techyon Software",
    percentage: "50%",
    owner: "Techyon",
    tasksCompleted: 10,
    totalTasks: 20,
    status: "In Progress",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 7,
    projectName: "Techyon Software",
    percentage: "50%",
    owner: "Techyon",
    tasksCompleted: 10,
    totalTasks: 20,
    status: "Completed",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 8,
    projectName: "Techyon Software",
    percentage: "50%",
    owner: "Techyon",
    tasksCompleted: 10,
    totalTasks: 20,
    status: "Archived",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 9,
    projectName: "Techyon Software",
    percentage: "50%",
    owner: "Techyon",
    tasksCompleted: 10,
    totalTasks: 20,
    status: "Not Started",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 10,
    projectName: "Techyon Software",
    percentage: "50%",
    owner: "Techyon",
    tasksCompleted: 10,
    totalTasks: 20,
    status: "In Progress",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
];

const ProjectTable: React.FC = () => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-500 text-white";
      case "Completed":
        return "bg-green-500 text-white";
      case "Archived":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-300 text-gray-700";
    }
  };

  return (
    <div className="overflow-auto rounded-md border bottom-2">
      <table className="min-w-full border-collapse border border-gray-200 ">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left flex gap-3 items-center">
              <span>Project Name</span>
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">%</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Owner
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Tasks
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Status
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center flex gap-2 items-end">
              Start Date
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              End Date
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{project.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                {project.projectName}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {project.percentage}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {project.owner}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <ProgressBar
                  completed={
                    (project.tasksCompleted / project.totalTasks) * 100
                  }
                  height="14px"
                  width="100%"
                  bgColor="#87D37C"
                  baseBgColor="#e0e0df"
                  labelAlignment="center"
                  labelSize="12px"
                  labelColor="#000"
                />
              </td>
              <td
                className={`border border-gray-300 px-4 py-2 text-center  ${getStatusStyle(
                  project.status
                )}`}
              >
                {project.status}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {project.startDate}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {project.endDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
