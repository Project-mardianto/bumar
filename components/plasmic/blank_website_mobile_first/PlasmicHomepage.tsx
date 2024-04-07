// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: r5Q4Z1cxFkCcTJmiuBHM4s
// Component: cTtvcxMxKXL7

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
import Footer from "../../Footer"; // plasmic-import: ioaSz0ukZyBm/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariants_4KrsLKoCkec } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 4krsLKo_Ckec/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: r5Q4Z1cxFkCcTJmiuBHM4s/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: cTtvcxMxKXL7/css

import Banner1SvgIcon from "../bumar/icons/PlasmicIcon__Banner1Svg"; // plasmic-import: -QJg3kyDQ7GD/icon
import RiceSvgrepoCom2SvgIcon from "../bumar/icons/PlasmicIcon__RiceSvgrepoCom2Svg"; // plasmic-import: LzGrREkdru70/icon
import PancakesSvgrepoComsvgIcon from "../bumar/icons/PlasmicIcon__PancakesSvgrepoComsvg"; // plasmic-import: eVEwu8Je0Nmo/icon
import SnacksvgIcon from "../bumar/icons/PlasmicIcon__Snacksvg"; // plasmic-import: t4JoKZu8A6xe/icon
import GiftSvgrepoComsvgIcon from "../bumar/icons/PlasmicIcon__GiftSvgrepoComsvg"; // plasmic-import: RI8S1pXwZdq5/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  banner?: Flex__<"svg">;
  button2?: Flex__<typeof Button2>;
  columns?: Flex__<"div">;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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
          <Navbar className={classNames("__wab_instance", sty.navbar__qNpv4)} />

          <section className={classNames(projectcss.all, sty.section__u9A)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__lf0JI)}
            >
              <Banner1SvgIcon
                data-plasmic-name={"banner"}
                data-plasmic-override={overrides.banner}
                className={classNames(projectcss.all, sty.banner)}
                role={"img"}
              />

              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___6Ssyj)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__a3U5Y
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#000000" }}
                    >
                      {"Catering Bumar"}
                    </span>
                  </React.Fragment>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___9VlXl
                  )}
                >
                  {
                    "Salah satu perusahaan jasa katering dan Kami menerima order Nasi box / Kue kering / Snack box hampers, untuk segala keperluan acara anda. disini anda bisa memesan beragam nasi box dengan menu utama kami."
                  }
                </div>
                <Button2
                  data-plasmic-name={"button2"}
                  data-plasmic-override={overrides.button2}
                  className={classNames("__wab_instance", sty.button2)}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__tMfom)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__qs41H)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__btAud
                    )}
                  >
                    {"Booking now ->"}
                  </div>
                </Button2>
              </Stack__>
            </Stack__>
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.column__hXuCo
                )}
                component={Link}
                href={`/nasibox`}
                platform={"nextjs"}
              >
                <section
                  className={classNames(projectcss.all, sty.section__hB4FH)}
                >
                  <RiceSvgrepoCom2SvgIcon
                    className={classNames(projectcss.all, sty.svg__kqw0O)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__gHoQ
                    )}
                  >
                    {"Nasi Box"}
                  </div>
                </section>
              </PlasmicLink__>
              <div className={classNames(projectcss.all, sty.column__u0HgA)}>
                <section
                  className={classNames(projectcss.all, sty.section__g8Rz)}
                >
                  <PancakesSvgrepoComsvgIcon
                    className={classNames(projectcss.all, sty.svg__lgbbv)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vlhPp
                    )}
                  >
                    {"Kue kering"}
                  </div>
                </section>
              </div>
              <div className={classNames(projectcss.all, sty.column__p48Kq)}>
                <section
                  className={classNames(projectcss.all, sty.section__yEh3E)}
                >
                  <SnacksvgIcon
                    className={classNames(projectcss.all, sty.svg__f457L)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dKuvW
                    )}
                  >
                    {"Snack Box"}
                  </div>
                </section>
              </div>
              <div className={classNames(projectcss.all, sty.column__y7Fhy)}>
                <section
                  className={classNames(projectcss.all, sty.section__shGov)}
                >
                  <GiftSvgrepoComsvgIcon
                    className={classNames(projectcss.all, sty.svg__nlAp1)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tomw9
                    )}
                  >
                    {"Hampers "}
                  </div>
                </section>
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__r9KyT)}>
            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </section>
          {(
            hasVariant(globalVariants, "screen", "desktopOnly") ? true : false
          ) ? (
            <Navbar
              className={classNames("__wab_instance", sty.navbar___09PVy)}
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "banner", "button2", "columns", "footer"],
  banner: ["banner"],
  button2: ["button2"],
  columns: ["columns"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  banner: "svg";
  button2: typeof Button2;
  columns: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    banner: makeNodeComponent("banner"),
    button2: makeNodeComponent("button2"),
    columns: makeNodeComponent("columns"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
