// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Home1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Home1SvgIcon(props: Home1SvgIconProps) {
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
          "M3.182 15.073H5v3.787a3 3 0 003 3h8.583a3 3 0 003-3v-3.787h1.235a1.682 1.682 0 001.17-2.888L13.393 3.85a2 2 0 00-2.784 0L2.01 12.185a1.682 1.682 0 001.17 2.888z"
        }
        stroke={"#9CA4AC"}
        strokeWidth={"1.2"}
      ></path>

      <path
        d={
          "M10.93 17.725h2.608a1.4 1.4 0 011.368 1.103l.667 3.072H8.895l.666-3.072a1.4 1.4 0 011.369-1.103z"
        }
        fill={"#fff"}
        stroke={"#9CA4AC"}
        strokeWidth={"1.2"}
      ></path>

      <circle cx={"11.966"} cy={"9.175"} r={"2.3"} fill={"#9CA4AC"}></circle>
    </svg>
  );
}

export default Home1SvgIcon;
/* prettier-ignore-end */
