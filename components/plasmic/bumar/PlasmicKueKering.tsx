// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: r5Q4Z1cxFkCcTJmiuBHM4s
// Component: yn3h3UAxym5Z

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
import Button2 from "../../Button2"; // plasmic-import: L9J39x6OJe4i/component

import { useScreenVariants as useScreenVariants_4KrsLKoCkec } from "../blank_website_mobile_first/PlasmicGlobalVariant__Screen"; // plasmic-import: 4krsLKo_Ckec/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../blank_website_mobile_first/plasmic.module.css"; // plasmic-import: r5Q4Z1cxFkCcTJmiuBHM4s/projectcss
import sty from "./PlasmicKueKering.module.css"; // plasmic-import: yn3h3UAxym5Z/css

import ArrowLeftSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__ArrowLeftSvgrepoCom1Svg"; // plasmic-import: UroXee_yw1o3/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 9OcZEOS6XKco/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: f30sqqHn8JbB/icon

createPlasmicElementProxy;

export type PlasmicKueKering__VariantMembers = {};
export type PlasmicKueKering__VariantsArgs = {};
type VariantPropType = keyof PlasmicKueKering__VariantsArgs;
export const PlasmicKueKering__VariantProps = new Array<VariantPropType>();

export type PlasmicKueKering__ArgsType = {};
type ArgPropType = keyof PlasmicKueKering__ArgsType;
export const PlasmicKueKering__ArgProps = new Array<ArgPropType>();

export type PlasmicKueKering__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  link?: Flex__<"a"> & Partial<LinkProps>;
  svg?: Flex__<"svg">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultKueKeringProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicKueKering__RenderFunc(props: {
  variants: PlasmicKueKering__VariantsArgs;
  args: PlasmicKueKering__ArgsType;
  overrides: PlasmicKueKering__OverridesType;
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

          <section className={classNames(projectcss.all, sty.section___2Bynz)}>
            <PlasmicLink__
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(projectcss.all, projectcss.a, sty.link)}
              component={Link}
              href={`/menu`}
              platform={"nextjs"}
            >
              <ArrowLeftSvgrepoCom1SvgIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            </PlasmicLink__>
          </section>
          <section className={classNames(projectcss.all, sty.section__l4O2G)}>
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={
                hasVariant(globalVariants, "screen", "desktopOnly")
                  ? "100%"
                  : "auto"
              }
              loading={"lazy"}
              src={{
                src: "/plasmic/bumar/images/_0475316001650443155Shutterstock1718969488Jpg.jpg",
                fullWidth: 1200,
                fullHeight: 675,
                aspectRatio: undefined
              }}
            />
          </section>
          <section className={classNames(projectcss.all, sty.section___0RuUf)}>
            <div className={classNames(projectcss.all, sty.freeBox__ujZvy)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__vIjxm)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zyVl7)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__oVwLe)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__vx4WH)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__s5Gsx
                        )}
                      >
                        {"Harga paket kue kering"}
                      </div>
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__rc3Us
                      )}
                    >
                      {"Minimal pemesanan produk 5, 10 sampai dengan 12 produk"}
                    </div>
                  </Stack__>
                </Stack__>
              </Stack__>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__zmDt6)}>
            <div className={classNames(projectcss.all, sty.columns__qbt7G)}>
              <div className={classNames(projectcss.all, sty.column__sni23)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rncBh
                  )}
                >
                  {"Kue Nastar"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__wePnv)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ghYJz
                  )}
                >
                  {"Rp.90.000"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__cdhCz)}>
                <Button2
                  className={classNames("__wab_instance", sty.button2___9C7Z)}
                  size={"compact"}
                >
                  {"Booking"}
                </Button2>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.columns__okC4J)}>
              <div className={classNames(projectcss.all, sty.column___8Rutr)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__l4Nvw
                  )}
                >
                  {"Kue Sagu keju"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__xh5G)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__uvJki
                  )}
                >
                  {"Rp.90.000"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__mButx)}>
                <Button2
                  className={classNames("__wab_instance", sty.button2___6O2Bk)}
                  size={"compact"}
                >
                  {"Booking"}
                </Button2>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.columns__rMguV)}>
              <div className={classNames(projectcss.all, sty.column__nwOoQ)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zOZyc
                  )}
                >
                  {"kue Lidah kucing"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column___0MuPs)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__djVEi
                  )}
                >
                  {"Rp.90.000"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__m82As)}>
                <Button2
                  className={classNames("__wab_instance", sty.button2___0KRec)}
                  size={"compact"}
                >
                  {"Booking"}
                </Button2>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.columns__qzJXi)}>
              <div className={classNames(projectcss.all, sty.column___9AmVs)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pM5Y
                  )}
                >
                  {"Kue putri salju"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__jgWz0)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__x1Xg
                  )}
                >
                  {"Rp.90.000"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__eEtuy)}>
                <Button2
                  className={classNames("__wab_instance", sty.button2__ywmbW)}
                  size={"compact"}
                >
                  {"Booking"}
                </Button2>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.columns___7RUcJ)}>
              <div className={classNames(projectcss.all, sty.column__rie6L)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__d0NN
                  )}
                >
                  {"kue kastengel keju"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__uLkVn)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__iZtM6
                  )}
                >
                  {"Rp.120.000"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__pXjGg)}>
                <Button2
                  className={classNames("__wab_instance", sty.button2__p9WKv)}
                  size={"compact"}
                >
                  {"Booking"}
                </Button2>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.columns__wOeBp)}>
              <div className={classNames(projectcss.all, sty.column__rKfz)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__t40N4
                  )}
                >
                  {"Kue kacang"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__cyAf)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zhrpl
                  )}
                >
                  {"Rp. 85.000"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__mVGsk)}>
                <Button2
                  className={classNames("__wab_instance", sty.button2__kwFpQ)}
                  size={"compact"}
                >
                  {"Booking"}
                </Button2>
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "link", "svg", "img"],
  navbar: ["navbar"],
  link: ["link", "svg"],
  svg: ["svg"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  link: "a";
  svg: "svg";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicKueKering__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicKueKering__VariantsArgs;
    args?: PlasmicKueKering__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicKueKering__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicKueKering__ArgsType,
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
          internalArgPropNames: PlasmicKueKering__ArgProps,
          internalVariantPropNames: PlasmicKueKering__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicKueKering__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicKueKering";
  } else {
    func.displayName = `PlasmicKueKering.${nodeName}`;
  }
  return func;
}

export const PlasmicKueKering = Object.assign(
  // Top-level PlasmicKueKering renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    link: makeNodeComponent("link"),
    svg: makeNodeComponent("svg"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicKueKering
    internalVariantProps: PlasmicKueKering__VariantProps,
    internalArgProps: PlasmicKueKering__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicKueKering;
/* prettier-ignore-end */
