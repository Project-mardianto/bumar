// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: r5Q4Z1cxFkCcTJmiuBHM4s
// Component: dw_LyFeoAAxt

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Navbar from "../../Navbar"; // plasmic-import: vUqIgiqOfSKO/component

import { useScreenVariants as useScreenVariants_4KrsLKoCkec } from "../blank_website_mobile_first/PlasmicGlobalVariant__Screen"; // plasmic-import: 4krsLKo_Ckec/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../blank_website_mobile_first/plasmic.module.css"; // plasmic-import: r5Q4Z1cxFkCcTJmiuBHM4s/projectcss
import sty from "./PlasmicMenu.module.css"; // plasmic-import: dw_LyFeoAAxt/css

import Banner1SvgIcon from "./icons/PlasmicIcon__Banner1Svg"; // plasmic-import: -QJg3kyDQ7GD/icon
import RiceSvgrepoCom2SvgIcon from "./icons/PlasmicIcon__RiceSvgrepoCom2Svg"; // plasmic-import: LzGrREkdru70/icon
import PancakesSvgrepoComsvgIcon from "./icons/PlasmicIcon__PancakesSvgrepoComsvg"; // plasmic-import: eVEwu8Je0Nmo/icon
import SaltySnackSvgrepoComsvgIcon from "./icons/PlasmicIcon__SaltySnackSvgrepoComsvg"; // plasmic-import: a0gVmc8X-ip3/icon
import GiftSvgrepoCom2SvgIcon from "./icons/PlasmicIcon__GiftSvgrepoCom2Svg"; // plasmic-import: InRgjZjeTlVJ/icon
import Home1SvgIcon from "./icons/PlasmicIcon__Home1Svg"; // plasmic-import: Ho0b78sFNGYF/icon
import Riwayat01SvgIcon from "./icons/PlasmicIcon__Riwayat01Svg"; // plasmic-import: ORPaUTKWLEEB/icon
import Inboxsvg2Icon from "./icons/PlasmicIcon__Inboxsvg2"; // plasmic-import: CUcHhZbW7M8B/icon
import Listsvg4Icon from "./icons/PlasmicIcon__Listsvg4"; // plasmic-import: 8pp5pY4_QvML/icon

createPlasmicElementProxy;

export type PlasmicMenu__VariantMembers = {};
export type PlasmicMenu__VariantsArgs = {};
type VariantPropType = keyof PlasmicMenu__VariantsArgs;
export const PlasmicMenu__VariantProps = new Array<VariantPropType>();

export type PlasmicMenu__ArgsType = {};
type ArgPropType = keyof PlasmicMenu__ArgsType;
export const PlasmicMenu__ArgProps = new Array<ArgPropType>();

export type PlasmicMenu__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  freeBox?: Flex__<"div">;
  banner?: Flex__<"svg">;
};

export interface DefaultMenuProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMenu__RenderFunc(props: {
  variants: PlasmicMenu__VariantsArgs;
  args: PlasmicMenu__ArgsType;
  overrides: PlasmicMenu__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_4KrsLKoCkec()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <Stack__
            as={"div"}
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <Banner1SvgIcon
              data-plasmic-name={"banner"}
              data-plasmic-override={overrides.banner}
              className={classNames(projectcss.all, sty.banner)}
              role={"img"}
            />
          </Stack__>
          <div className={classNames(projectcss.all, sty.columns__g6TBp)}>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.column__uSaUv
              )}
              component={Link}
              href={`/nasibox`}
              platform={"nextjs"}
            >
              <section
                className={classNames(projectcss.all, sty.section__m0PuH)}
              >
                <RiceSvgrepoCom2SvgIcon
                  className={classNames(projectcss.all, sty.svg__deAUm)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bklZd
                  )}
                >
                  {"Nasi Box"}
                </div>
              </section>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.column__g693
              )}
              component={Link}
              href={`/kue-kering`}
              platform={"nextjs"}
            >
              <section
                className={classNames(projectcss.all, sty.section__mzMfF)}
              >
                <PancakesSvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__xsIZr)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___5R8Nw
                  )}
                >
                  {"Kue Kering"}
                </div>
              </section>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.column___4FAaT
              )}
              component={Link}
              href={`/Snack-box`}
              platform={"nextjs"}
            >
              <section
                className={classNames(projectcss.all, sty.section__nLttc)}
              >
                <SaltySnackSvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__odyiF)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pbrqn
                  )}
                >
                  {"Snack Box"}
                </div>
              </section>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.column___7G994
              )}
              component={Link}
              href={`/Hampers `}
              platform={"nextjs"}
            >
              <section
                className={classNames(projectcss.all, sty.section__fDsQe)}
              >
                <GiftSvgrepoCom2SvgIcon
                  className={classNames(projectcss.all, sty.svg__hbsWw)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__uKxE4
                  )}
                >
                  {"Hampers "}
                </div>
              </section>
            </PlasmicLink__>
          </div>
          <div className={classNames(projectcss.all, sty.columns__hg9Rl)}>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.column__sJk27
              )}
              component={Link}
              href={`/`}
              platform={"nextjs"}
            >
              <Home1SvgIcon
                className={classNames(projectcss.all, sty.svg__qtzyp)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tn9Gb
                )}
              >
                {"Beranda"}
              </div>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.column__fyaCz
              )}
              component={Link}
              href={`/menu`}
              platform={"nextjs"}
            >
              <Riwayat01SvgIcon
                className={classNames(projectcss.all, sty.svg__lebJ)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0FbvS
                )}
              >
                {"Menu"}
              </div>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.column__yfIYk
              )}
              component={Link}
              href={`/Chat`}
              platform={"nextjs"}
            >
              <Inboxsvg2Icon
                className={classNames(projectcss.all, sty.svg___6N2LG)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__t1Roc
                )}
              >
                {"Chat"}
              </div>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.column__fneMy
              )}
              component={Link}
              href={`/Booking`}
              platform={"nextjs"}
            >
              <Listsvg4Icon
                className={classNames(projectcss.all, sty.svg__dpx4S)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__sv16D
                )}
              >
                {"Booking"}
              </div>
            </PlasmicLink__>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "freeBox", "banner"],
  navbar: ["navbar"],
  freeBox: ["freeBox", "banner"],
  banner: ["banner"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  freeBox: "div";
  banner: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenu__VariantsArgs;
    args?: PlasmicMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMenu__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMenu__ArgProps,
          internalVariantPropNames: PlasmicMenu__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenu";
  } else {
    func.displayName = `PlasmicMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicMenu = Object.assign(
  // Top-level PlasmicMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    freeBox: makeNodeComponent("freeBox"),
    banner: makeNodeComponent("banner"),

    // Metadata about props expected for PlasmicMenu
    internalVariantProps: PlasmicMenu__VariantProps,
    internalArgProps: PlasmicMenu__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMenu;
/* prettier-ignore-end */
