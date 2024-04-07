// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InboxsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InboxsvgIcon(props: InboxsvgIconProps) {
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

      <rect
        x={"3"}
        y={"5"}
        width={"18"}
        height={"18"}
        rx={"4"}
        stroke={"#474D5F"}
        strokeWidth={"1.2"}
      ></rect>

      <path
        d={
          "M18.5 9.235s-2.488 2.195-4.393 3.758c-1.315 1.08-2.847.994-4.219-.011L5.5 9.765"
        }
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

export default InboxsvgIcon;
/* prettier-ignore-end */
