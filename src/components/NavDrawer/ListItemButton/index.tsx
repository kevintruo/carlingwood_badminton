import * as React from "react";
import MuiListItemButton, { ListItemButtonBaseProps } from "@mui/material/ListItemButton";
import MuiLink from "@mui/material/Link";
import MuiListItemIcon from "@mui/material/ListItemIcon";
import MuiListItemText from "@mui/material/ListItemText";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

interface Props extends ListItemButtonBaseProps {
  path: string;
  icon: React.ReactNode;
  text: string;
  isLink?: boolean;
}

export default function ListItemButton(props: Props) {
  const { path, icon, text, isLink } = props;
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, "to">>(function Link(
        itemProps,
        ref
      ) {
        return <RouterLink to={path} ref={ref} {...itemProps} role={undefined} />;
      }),
    [path]
  );

  return isLink ? (
    <MuiListItemButton component={renderLink}>
      <MuiListItemIcon>{icon}</MuiListItemIcon>
      <MuiListItemText primary={text} primaryTypographyProps={{ fontSize: 12 }} />
    </MuiListItemButton>
  ) : (
    <MuiListItemButton
      component={MuiLink}
      href={path}
      onClick={(e) => {
        let section = document.getElementById(path.replace("#", ""));
        e.preventDefault();
        section && section.scrollIntoView({ behavior: "smooth", block: "center" });
      }}>
      <MuiListItemIcon>{icon}</MuiListItemIcon>
      <MuiListItemText primary={text} primaryTypographyProps={{ fontSize: 12 }} />
    </MuiListItemButton>
  );
}
