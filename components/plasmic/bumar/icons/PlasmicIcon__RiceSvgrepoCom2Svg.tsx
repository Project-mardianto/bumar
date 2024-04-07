// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RiceSvgrepoCom2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RiceSvgrepoCom2SvgIcon(props: RiceSvgrepoCom2SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 320 320"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"#ffe98f"}>
        <circle cx={"160"} cy={"200"} r={"100"}></circle>

        <circle cx={"65"} cy={"195"} r={"25"}></circle>

        <circle cx={"75"} cy={"155"} r={"25"}></circle>

        <circle cx={"105"} cy={"125"} r={"25"}></circle>

        <circle cx={"255"} cy={"195"} r={"25"}></circle>

        <circle cx={"245"} cy={"155"} r={"25"}></circle>

        <circle cx={"215"} cy={"125"} r={"25"}></circle>

        <circle cx={"140"} cy={"105"} r={"25"}></circle>

        <circle cx={"180"} cy={"105"} r={"25"}></circle>
      </g>

      <path
        d={
          "M160 89.999C155.439 83.928 148.179 80 140 80c-12.847 0-23.425 9.691-24.835 22.161A24.894 24.894 0 00105 100c-13.807 0-25 11.193-25 25 0 1.943.229 3.833.649 5.649A25.04 25.04 0 0075 130c-13.807 0-25 11.193-25 25a24.9 24.9 0 006.283 16.565C46.774 175.104 40 184.259 40 195c0 12.779 9.591 23.311 21.966 24.81C71.158 265.549 111.554 300 160 300V89.999z"
        }
        fill={"#ffda44"}
      ></path>

      <path
        d={
          "M290 200H30c-8.284 0-15 6.716-15 15s6.716 15 15 15h10c0 35.264 26.079 64.423 60 69.277V320h120v-20.723c33.921-4.854 60-34.014 60-69.277h10c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
        }
        fill={"#91dc5a"}
      ></path>

      <path
        d={
          "M30 200c-8.284 0-15 6.716-15 15s6.716 15 15 15h10c0 35.264 26.079 64.423 60 69.277V320h60V200H30z"
        }
        fill={"#64c37d"}
      ></path>

      <path fill={"#bd3c1a"} d={"M190 170l-30-30V0h30z"}></path>

      <path
        fill={"#ff5023"}
        d={"M207.047 170.423l-28.118-10.451L234.67 10.01l28.119 10.452z"}
      ></path>

      <path
        d={
          "M226.141 195.333A44.795 44.795 0 00231 175c0-24.852-20.148-45-45-45a44.777 44.777 0 00-26 8.283v57.05h66.141z"
        }
        fill={"#ffe98f"}
      ></path>
    </svg>
  );
}

export default RiceSvgrepoCom2SvgIcon;
/* prettier-ignore-end */
