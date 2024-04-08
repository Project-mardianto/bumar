// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GiftSvgrepoCom2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GiftSvgrepoCom2SvgIcon(props: GiftSvgrepoCom2SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M9.49.55A1.476 1.476 0 007.313.416L5.529 2.162a1.403 1.403 0 00.136 2.129l7.956 6.052 1.829-1.789 1.829 1.79 7.956-6.053c.69-.526.754-1.524.135-2.13L23.586.418a1.476 1.476 0 00-2.177.132l-5.96 7.495L9.49.55z"
        }
        fill={"url(#6HSE-iSpVWPoa)"}
      ></path>

      <path
        d={
          "M30.546 7.814H1.454C.65 7.814 0 8.45 0 9.236v4.268c0 .786.651 1.423 1.455 1.423h29.09c.804 0 1.455-.637 1.455-1.422V9.236c0-.785-.651-1.422-1.454-1.422z"
        }
        fill={"url(#6HSE-iSpVWPob)"}
      ></path>

      <path
        d={
          "M2.909 14.927H29.09v14.227c0 1.572-1.302 2.846-2.909 2.846H5.818c-1.607 0-2.91-1.274-2.91-2.846V14.927z"
        }
        fill={"url(#6HSE-iSpVWPoc)"}
      ></path>

      <path d={"M18.91 7.814h-5.82V32h5.819V7.814z"} fill={"#fff"}></path>

      <defs>
        <linearGradient
          id={"6HSE-iSpVWPoa"}
          x1={"15.45"}
          y1={"0"}
          x2={"15.45"}
          y2={"10.343"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#FE9B13"}></stop>

          <stop offset={"1"} stopColor={"#FE9B13"}></stop>
        </linearGradient>

        <linearGradient
          id={"6HSE-iSpVWPob"}
          x1={"16"}
          y1={"7.814"}
          x2={"16"}
          y2={"14.927"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#FA9644"}></stop>

          <stop offset={"1"} stopColor={"#FE6E2C"}></stop>
        </linearGradient>

        <linearGradient
          id={"6HSE-iSpVWPoc"}
          x1={"26.915"}
          y1={"16.351"}
          x2={"14.404"}
          y2={"37.488"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#F75D00"}></stop>

          <stop offset={"1"} stopColor={"#F86710"}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GiftSvgrepoCom2SvgIcon;
/* prettier-ignore-end */
