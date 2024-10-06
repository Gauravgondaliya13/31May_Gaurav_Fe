import React, { useState } from "react";
import Container from "@mui/material/Container";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Typography, 

} from "@mui/material";
import { ShoppingCartCheckout } from "@mui/icons-material";
import Logo from "./assets/Image/tealogy-logo.webp";
import Dra from "./drwer";

const Page = [
  "HOME",
  "About Us",
  "Our Presence",
  "Our Menu",
  "Benefits",
  "Outlets",
  "Apply Now",
];

function Navbar() {
  const [value, SetValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMaTCH = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMaTCH);
  return (
    <>
      <Container>
        <AppBar  sx={{ background: "#32373c" ,display:" xs: 'none', md: 'flex'"}}>
          <Toolbar>
            <ShoppingCartCheckout />
            {isMaTCH ? (
              <>
                <Typography>
                  <img src={Logo} alt="" width="50%" />
                </Typography>
                <Dra />
              </>
            ) : (
              <>
                <img src={Logo} alt="" width="10%" />
                <Tabs
                  textColor="inherit"
                  value={0}
                  onChange={(e, value) => SetValue(value)}
                  value={value}
                  indicatorColor="secondary"
                >
                  {Page.map((pag, index) => (
                    <Tab key={index} label={pag} />
                  ))}
                </Tabs>
                <Button variant="contained">Apply Now</Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Container>

    
    </>
  );
}

export default Navbar;
