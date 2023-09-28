// import React from 'react'
import {
  Button,
  Stack,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";

import AssessmentIcon from "@mui/icons-material/Assessment";
// import TableViewIcon from "@mui/icons-material/TableView";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
// import ShowChartIcon from "@mui/icons-material/ShowChart";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import { useState } from "react";

export default function Layout() {
  const [open, toggleOpen] = useState(true);

  const ng = useNavigate();

  return (
    <Stack width="100vw" height="100vh" flexDirection="row" overflow="hidden">
      <Stack
        sx={{
          width: open ? 240 : "56px",
          height: "100vh",
          flexShrink: 0,
          borderRight: "1px solid #ccc",
          justifyContent: "space-between",
          transition: "width 0.2s ease",
        }}
      >
        <Link
          to="/"
          style={{
            width: "100%",
            height: "38px",
            textAlign: "center",
            lineHeight: "38px",
            flexShrink: 0,
            textDecoration: "none",
            ontWeight: 500,
            color: "#000",
            fontSize: open ? 18 : 15,
            textTransform: "uppercase",
            borderBottom: "1px solid #E5E5E5",
          }}
        >
          {open ? "  STOCK TOOLs" : "T"}
        </Link>
        <Stack flex={1}>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton sx={{ pl: 2 }} onClick={() => ng("/chart")}>
              <ListItemIcon>
                <CandlestickChartIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Price Tend" />}
            </ListItemButton>
            <Divider />
            <ListItemButton sx={{ pl: 2 }} onClick={() => ng("/FR")}>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Fiancial Reports" />}
            </ListItemButton>
            <Divider />
          </List>
        </Stack>
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            borderTop: "1px solid #E5E5E5",
            height: "50px",
            pt: 2,
            pb: 4,
          }}
        >
          {open ? (
            <Button
              endIcon={<WestIcon />}
              onClick={() => toggleOpen((old) => !old)}
              sx={{
                width: "100%",
                height: "100%",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              收起
            </Button>
          ) : (
            <IconButton color="primary" onClick={() => toggleOpen(true)}>
              <EastIcon />
            </IconButton>
          )}
        </Stack>
      </Stack>

      <Stack
        sx={{
          flex: 1,
          height: "100vh",
          flexShrink: 0,
          overflow: "hidden auto",
          scrollBehavior: "smooth",
        }}
      >
        <Outlet />
      </Stack>
    </Stack>
  );
}
