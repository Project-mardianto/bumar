// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HomesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HomesvgIcon(props: HomesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.981 0a.583.583 0 01.38.126l5.527 4.354M6.981 0a.583.583 0 00-.342.126L1.112 4.48M6.981 0l.009.25s0 0 0 0M6.98 0l.008.25s0 0 0 0M1.112 4.48A2.918 2.918 0 000 6.77v7.425c0 .53.442.972.972.972h3.89a.98.98 0 00.971-.972v-3.89c0-.114.08-.194.195-.194h1.944c.115 0 .195.08.195.195v3.889c0 .53.442.972.972.972h3.889a.98.98 0 00.972-.972V6.77c0-.893-.41-1.738-1.112-2.29m-11.776 0l.155.195L6.794.322h0A.333.333 0 016.99.25M1.112 4.48l.155.196A2.668 2.668 0 00.25 6.771v7.424c0 .392.33.722.722.722h3.89a.73.73 0 00.721-.722v-3.89c0-.116.042-.23.128-.316a.444.444 0 01.317-.128h1.944c.117 0 .231.042.317.128s.128.2.128.317v3.889c0 .392.33.722.722.722h3.889a.73.73 0 00.722-.722V6.77c0-.817-.375-1.589-1.017-2.095l.155-.196m0 0l-.155.196L7.206.322h0A.333.333 0 006.989.25"
        }
        stroke={"currentColor"}
        strokeWidth={".5"}
      ></path>
    </svg>
  );
}

export default HomesvgIcon;
/* prettier-ignore-end */
