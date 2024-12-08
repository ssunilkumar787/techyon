import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import fileIcon from "./../../assets/images/file-icon.svg";
import calIcon from "./../../assets/images/calender.svg";
import fileCal from "./../../assets/images/file-cal.svg";

type Project = {
  id: string;
  name: string;
  progress: number;
  startDate: string;
  endDate: string;
  files: number;
  members: number;
};

type CardOverviewProps = {
  project: Project;
};

const CardOverview: React.FC<CardOverviewProps> = ({ project }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={{ borderRadius: "8px" }}>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <img src={fileIcon} alt="file-icon" />
              </div>
              <div className="font-bold text-lg">{project.name}</div>
            </div>
            <div className="font-bold text-lg">ID: {project.id}</div>
          </div>

          <div className="flex items-center justify-between mt-7">
            <div className="text-sm font-medium text-gray-600">07</div>
            <div className="flex-1 mx-2">
              <ProgressBar
                completed={project.progress}
                bgColor="green"
                height="14px"
              />
            </div>
            <div className="text-sm font-medium text-gray-600">14</div>
          </div>

          <div className="flex items-center mt-7">
            <div>
              <img src={calIcon} alt="calendar" />
            </div>
            <div className="font-bold ml-2">
              {project.startDate} - {project.endDate}
            </div>
          </div>
          <div className="flex items-center justify-between mt-7">
            <div className="flex items-center">
              <AvatarGroup>
                {[...Array(project.members)].map((_, index) => (
                  <Avatar key={index} sx={{ width: 30, height: 30 }} />
                ))}
              </AvatarGroup>
              <div className="font-bold text-lg">+{project.members}</div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <img src={fileCal} alt="file-cal" className="w-5 h-5" />
              </div>
              <div className="font-bold">{project.files} Files</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardOverview;
