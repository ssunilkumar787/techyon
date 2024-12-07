import * as React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import fileIcon from "./../../assets/images/file-icon.svg";
import calIcon from "./../../assets/images/calender.svg";
import fileCal from "./../../assets/images/file-cal.svg";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const card = (
  <React.Fragment>
    <CardContent>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <img src={fileIcon} alt="file-icon" />
          </div>
          <div className="font-bold text-lg">Project Name</div>
        </div>

        <div className="font-bold text-lg">ID: P-11</div>
      </div>

      <div className="flex items-center justify-between mt-7">
        <div className="text-sm font-medium text-gray-600">07</div>

        <div className="flex-1 mx-2">
          <ProgressBar completed={50} bgColor="green" />
        </div>

        <div className="text-sm font-medium text-gray-600">14</div>
      </div>

      <div className="flex items-center mt-7">
        <div>
          <img src={calIcon} alt="cal" />
        </div>
        <div className="font-bold ml-2">01/01/2024 - 31/01/2024</div>
      </div>
      <div className="flex items-center justify-between mt-7">
        <div className="flex items-center">
          <AvatarGroup>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Avatar
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Avatar
              alt="Cindy Baker"
              src="/static/images/avatar/3.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Avatar
              alt="Agnes Walker"
              src="/static/images/avatar/4.jpg"
              sx={{ width: 30, height: 30 }}
            />
          </AvatarGroup>
          <div className="font-bold text-lg">+2</div>{" "}
        </div>

        <div className="flex items-center gap-2">
          <div>
            <img src={fileCal} alt="file-cal" className="w-5 h-5" />{" "}
          </div>
          <div className="font-bold">12 Files</div>
        </div>
      </div>
    </CardContent>
  </React.Fragment>
);
const CardOverview = () => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={{ borderRadius: "8px" }}>
        {card}
      </Card>
    </Box>
  );
};

export default CardOverview;
