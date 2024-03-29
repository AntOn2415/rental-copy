import { Outlet } from "react-router-dom";

import { AppBar } from "../AppBar/AppBar";
import { Suspense } from "react";

import { ContainerDiv } from "./Layout.styled";
import Spinner from "../Spinner";

const Layout = () => {
  return (
    <ContainerDiv>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </ContainerDiv>
  );
};

export default Layout;
