import React from "react";
import { svgTitleComponentsMappings } from "../../../constants/svgTitleComponentsMappings";

function SvgWrapper({ svgSrc, children, ...props }) {
  console.log(svgSrc)
  const SvgComponent = svgTitleComponentsMappings[svgSrc];
  console.log("SvgComponent",SvgComponent)
  return SvgComponent ? (
    <SvgComponent {...props}> {children} </SvgComponent>
  ) : (
    <></>
  );
}

export default SvgWrapper;
