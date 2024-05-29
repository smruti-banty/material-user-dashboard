import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Box, Stack, styled } from "@mui/material";
import { useState } from "react";

const FlexBox = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  backgroundColor: "#eee",
});

function App() {
  const [sidebarState, setSidebarState] = useState(true);

  return (
    <FlexBox>
      <Box sx={{ width: "250px", transition: "0.5", display: sidebarState ? "block" : "none" }}>
        <Sidebar />
      </Box>
      <Stack flex={1}>
        <Header setSidebarState={setSidebarState}></Header>
        <Box flex={1} padding={2}>
          <Outlet />
        </Box>
      </Stack>
    </FlexBox>
  );
}

export default App;
