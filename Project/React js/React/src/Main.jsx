import React from "react";
import ReactDom from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Layout from "./layout";
import Navbar from "./Navbar";
import Header from "./Hedar";
import About from "./About";
import Our from './OurPRESENCE'
import Tealogy from "./telaogy";
import Fren from './tea FRANCHISE'
import Tef from './TealogyFRANCHISE'
import Contect from './Contect'


import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
const root = ReactDom.createRoot(document.getElementById("Main"));

root.render(
  <>
    <CssBaseline />
    <Layout />
    <Navbar />
    <Header />
    <About />
    <Our />
    <Tealogy />
    <Fren />
    <Tef />
    <Contect />
  </>
);
