import React from "react";
import Navbar from "../components/NavBar";
import { Container } from "@material-ui/core";
import Player from "../components/Player";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "90px" }}>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
