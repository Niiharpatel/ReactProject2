import React from "react";
import HeaderCom from "../HeaderCom/HeaderCom";
import { Outlet } from "react-router";
import FooterCom from "../FooterCom/FooterCom";

export default function LayoutCom() {
  return (
    <>
      <HeaderCom />
      <Outlet />
      <FooterCom />
    </>
  );
}
