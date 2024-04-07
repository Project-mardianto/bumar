// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RiwayatsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RiwayatsvgIcon(props: RiwayatsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.457 6.642l-1.85 1.482c-1.175.943-1.763 1.414-2.134 2.036a3.999 3.999 0 00-.31.644c-.253.678-.253 1.432-.253 2.939v2.056c0 3 0 4.5.764 5.551a4 4 0 00.885.885C6.61 23 8.11 23 11.11 23h1.51c2.999 0 4.499 0 5.55-.764.34-.246.639-.545.885-.885.764-1.051.764-2.551.764-5.55v-3.703c0-2.8 0-4.2-.67-5.207a4 4 0 00-1.114-1.114c-1.006-.67-2.406-.67-5.206-.67-1.04 0-1.559 0-2.05.127-.22.057-.435.133-.643.226-.463.209-.868.533-1.679 1.183z"
        }
        stroke={"#474D5F"}
        strokeWidth={"1.2"}
      ></path>

      <path
        d={
          "M11.396 5v0c0 2.212 0 3.317-.425 4.164a4 4 0 01-1.78 1.78c-.847.426-1.953.426-4.164.426H3.9"
        }
        stroke={"#474D5F"}
        strokeWidth={"1.2"}
      ></path>

      <path
        d={"M14.837 19.314H8.346m3.764-3.579H8.345"}
        stroke={"#474D5F"}
        strokeWidth={"1.2"}
        strokeLinecap={"round"}
      ></path>

      <path
        d={"M20 1.4a4.6 4.6 0 100 9.2 4.6 4.6 0 000-9.2z"}
        fill={"#E3292B"}
        stroke={"#fff"}
        strokeWidth={"1.2"}
      ></path>
    </svg>
  );
}

export default RiwayatsvgIcon;
/* prettier-ignore-end */
