// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Inboxsvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Inboxsvg2Icon(props: Inboxsvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"3"}
        y={"3"}
        width={"18"}
        height={"18"}
        rx={"4"}
        stroke={"currentColor"}
        strokeWidth={"1.2"}
      ></rect>

      <path
        d={
          "M18.5 7.235s-2.488 2.195-4.393 3.758c-1.315 1.08-2.847.994-4.219-.011L5.5 7.765"
        }
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Inboxsvg2Icon;
/* prettier-ignore-end */
