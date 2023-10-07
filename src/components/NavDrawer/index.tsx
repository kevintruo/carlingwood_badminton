import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import CampaignIcon from "@mui/icons-material/Campaign";
import Groups2Icon from "@mui/icons-material/Groups2";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import RuleIcon from "@mui/icons-material/Rule";
import FactoryIcon from "@mui/icons-material/Factory";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ListItemButton from "./ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const itemData = [
  { title: "Home", icon: <HomeIcon /> },
  { title: "Announcements", icon: <CampaignIcon /> },
  { title: "About Us", icon: <Groups2Icon /> },
  { title: "Membership", icon: <CardMembershipIcon /> },
  { title: "Regulations", icon: <RuleIcon />, path: "/regulations" },
  { title: "Facilities", icon: <FactoryIcon /> },
  { title: "Fees", icon: <AttachMoneyIcon /> },
  { title: "Contact Us", icon: <AlternateEmailIcon /> },
  { title: "Registration", icon: <HowToRegIcon /> },
];

export default function NavDrawer({
  isOpened,
  toggleDrawer,
}: {
  isOpened: boolean;
  toggleDrawer: (val: boolean) => void;
}) {
  return (
    <Drawer anchor='left' open={isOpened} onClose={() => toggleDrawer(false)}>
      <List sx={{ width: 250 }}>
        <ListItem sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <ListItemText
            primary='Carlingwood Badminton'
            primaryTypographyProps={{ variant: "h6" }}
          />
          <img
            src={require(`../../static/img/CW1 - Full.png`)}
            alt='Carlingwood_Badminton_Logo'
            width={100}
          />
        </ListItem>
        {itemData.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton path={item.path ?? ""} icon={item.icon} text={item.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
