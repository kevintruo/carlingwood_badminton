import * as React from "react";
import Box from "@mui/material/Box";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";

export default function BackToTheTopFab({ scrollTrigger }: { scrollTrigger: boolean }) {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <Fade in={scrollTrigger}>
      <Tooltip title='Back to top'>
        <Box
          onClick={handleClick}
          role='presentation'
          sx={{ position: "fixed", bottom: 16, right: 16, borderRadius: "50%" }}>
          <Fab size='small' aria-label='scroll back to top'>
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Tooltip>
    </Fade>
  );
}
