// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DatesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DatesvgIcon(props: DatesvgIconProps) {
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
        fill={"#474D5F"}
        stroke={"#474D5F"}
        strokeWidth={"1.2"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={
          "M6.82 12.029c0 .476-.408.862-.91.862-.503 0-.91-.386-.91-.862 0-.477.407-.863.91-.863.502 0 .91.386.91.863zm4.06 0c0 .476-.408.862-.91.862-.503 0-.91-.386-.91-.862 0-.477.407-.863.91-.863.502 0 .91.386.91.863zm4.06 0c0 .476-.407.862-.91.862-.502 0-.91-.386-.91-.862 0-.477.408-.863.91-.863.503 0 .91.386.91.863zm4.06 0c0 .476-.407.862-.91.862-.502 0-.91-.386-.91-.862 0-.477.408-.863.91-.863.503 0 .91.386.91.863zM6.82 15.01c0 .476-.408.863-.91.863-.503 0-.91-.387-.91-.863s.407-.862.91-.862c.502 0 .91.386.91.862zm4.06 0c0 .476-.408.863-.91.863-.503 0-.91-.387-.91-.863s.407-.862.91-.862c.502 0 .91.386.91.862zm4.06 0c0 .476-.407.863-.91.863-.502 0-.91-.387-.91-.863s.408-.862.91-.862c.503 0 .91.386.91.862zm4.06 0c0 .476-.407.863-.91.863-.502 0-.91-.387-.91-.863s.408-.862.91-.862c.503 0 .91.386.91.862zM6.82 17.994c0 .476-.408.862-.91.862-.503 0-.91-.386-.91-.863 0-.476.407-.862.91-.862.502 0 .91.386.91.863zm4.06 0c0 .476-.408.862-.91.862-.503 0-.91-.386-.91-.863 0-.476.407-.862.91-.862.502 0 .91.386.91.863zm4.06 0c0 .476-.407.862-.91.862-.502 0-.91-.386-.91-.863 0-.476.408-.862.91-.862.503 0 .91.386.91.863zm4.06 0c0 .476-.407.862-.91.862-.502 0-.91-.386-.91-.863 0-.476.408-.862.91-.862.503 0 .91.386.91.863zM5.962 2.43v3.235c0 .238.203.43.454.43a.444.444 0 00.455-.43V2.43A.444.444 0 006.416 2a.444.444 0 00-.454.431zm11.73 0v3.235c0 .238.204.43.455.43a.444.444 0 00.455-.43V2.43a.444.444 0 00-.455-.43.444.444 0 00-.454.431zM6.82 8.87c0 .48-.408.87-.91.87-.503 0-.91-.39-.91-.87S5.407 8 5.91 8c.502 0 .91.39.91.87zm4.06 0c0 .48-.408.87-.91.87-.503 0-.91-.39-.91-.87S9.467 8 9.97 8c.502 0 .91.39.91.87zm4.06 0c0 .48-.407.87-.91.87-.502 0-.91-.39-.91-.87s.408-.87.91-.87c.503 0 .91.39.91.87zm4.06 0c0 .48-.407.87-.91.87-.502 0-.91-.39-.91-.87s.408-.87.91-.87c.503 0 .91.39.91.87z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default DatesvgIcon;
/* prettier-ignore-end */
