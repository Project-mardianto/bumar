// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ListsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ListsvgIcon(props: ListsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M36 16.281C36 13.921 34.067 12 31.688 12H16.312c-2.25 0-4.106 1.725-4.296 3.914L12 31.718C12 34.079 13.933 36 16.312 36h15.376c2.25 0 4.106-1.725 4.296-3.913L36 16.28z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M30 19H18m12 5H18m12 5H18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ListsvgIcon;
/* prettier-ignore-end */
