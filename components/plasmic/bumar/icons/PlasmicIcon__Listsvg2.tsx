// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Listsvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Listsvg2Icon(props: Listsvg2IconProps) {
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

      <path
        d={
          "M21 6.211C21 4.441 19.55 3 17.766 3H6.234a3.231 3.231 0 00-3.222 2.935L3 17.79C3 19.56 4.45 21 6.234 21h11.532a3.231 3.231 0 003.222-2.935L21 6.21z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M16.5 8.25h-9m9 3.75h-9m9 3.75h-9"}
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Listsvg2Icon;
/* prettier-ignore-end */
