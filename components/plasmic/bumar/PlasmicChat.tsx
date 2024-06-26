// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: r5Q4Z1cxFkCcTJmiuBHM4s
// Component: dTi0r2lLSQ3-

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
import sty from "./PlasmicChat.module.css"; // plasmic-import: dTi0r2lLSQ3-/css

import Banner1SvgIcon from "./icons/PlasmicIcon__Banner1Svg"; // plasmic-import: -QJg3kyDQ7GD/icon
import RiceSvgrepoCom2SvgIcon from "./icons/PlasmicIcon__RiceSvgrepoCom2Svg"; // plasmic-import: LzGrREkdru70/icon
import PancakesSvgrepoComsvgIcon from "./icons/PlasmicIcon__PancakesSvgrepoComsvg"; // plasmic-import: eVEwu8Je0Nmo/icon
import SaltySnackSvgrepoComsvgIcon from "./icons/PlasmicIcon__SaltySnackSvgrepoComsvg"; // plasmic-import: a0gVmc8X-ip3/icon
import GiftSvgrepoCom2SvgIcon from "./icons/PlasmicIcon__GiftSvgrepoCom2Svg"; // plasmic-import: InRgjZjeTlVJ/icon
import Home1SvgIcon from "./icons/PlasmicIcon__Home1Svg"; // plasmic-import: Ho0b78sFNGYF/icon
import Riwayatsvg2Icon from "./icons/PlasmicIcon__Riwayatsvg2"; // plasmic-import: KZj1ZHPQ5Ekf/icon
import InboxsvgIcon from "./icons/PlasmicIcon__Inboxsvg"; // plasmic-import: 5v1xQgfabsmO/icon
import Listsvg4Icon from "./icons/PlasmicIcon__Listsvg4"; // plasmic-import: 8pp5pY4_QvML/icon

createPlasmicElementProxy;

export type PlasmicChat__VariantMembers = {};
export type PlasmicChat__VariantsArgs = {};
type VariantPropType = keyof PlasmicChat__VariantsArgs;
export const PlasmicChat__VariantProps = new Array<VariantPropType>();

export type PlasmicChat__ArgsType = {};
type ArgPropType = keyof PlasmicChat__ArgsType;
export const PlasmicChat__ArgProps = new Array<ArgPropType>();

export type PlasmicChat__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  freeBox?: Flex__<"div">;
  banner?: Flex__<"svg">;
};

export interface DefaultChatProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicChat__RenderFunc(props: {
  variants: PlasmicChat__VariantsArgs;
  args: PlasmicChat__ArgsType;
  overrides: PlasmicChat__OverridesType;
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
          <div className={classNames(projectcss.all, sty.columns__y0E3Q)}>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.column__bEPml
              )}
              component={Link}
              href={`/nasibox`}
              platform={"nextjs"}
            >
              <section
                className={classNames(projectcss.all, sty.section__x0UMx)}
              >
                <RiceSvgrepoCom2SvgIcon
                  className={classNames(projectcss.all, sty.svg__z7T5)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__biXjd
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
                sty.column__dA9Y6
              )}
              component={Link}
              href={`/kue-kering`}
              platform={"nextjs"}
            >
              <section
                className={classNames(projectcss.all, sty.section__oImqw)}
              >
                <PancakesSvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__z5Ty5)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fpLHx
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
                sty.column__bhscj
              )}
              component={Link}
              href={`/Snack-box`}
              platform={"nextjs"}
            >
              <section
                className={classNames(projectcss.all, sty.section__eiW1T)}
              >
                <SaltySnackSvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__rBnAo)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___3APm
                  )}
                >
                  {"Snack Box"}
                </div>
              </section>
            </PlasmicLink__>
            <div className={classNames(projectcss.all, sty.column___7PtYg)}>
              <section
                className={classNames(projectcss.all, sty.section__wAzZh)}
              >
                <GiftSvgrepoCom2SvgIcon
                  className={classNames(projectcss.all, sty.svg__zlNGt)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__aupTp
                  )}
                >
                  {"Hampers "}
                </div>
              </section>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.columns__q9Rhy)}>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.column___5Dqea
              )}
              component={Link}
              href={`/`}
              platform={"nextjs"}
            >
              <Home1SvgIcon
                className={classNames(projectcss.all, sty.svg___1MgKr)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vnZqu
                )}
              >
                {"Beranda"}
              </div>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.column__hZiJ4
              )}
              component={Link}
              href={`/menu`}
              platform={"nextjs"}
            >
              <Riwayatsvg2Icon
                className={classNames(projectcss.all, sty.svg__tgukW)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ngCji
                )}
              >
                {"Menu"}
              </div>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.column___9Nf4I
              )}
              component={Link}
              href={`/Chat`}
              platform={"nextjs"}
            >
              <InboxsvgIcon
                className={classNames(projectcss.all, sty.svg__qoIx9)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__syAIl
                )}
              >
                {"Chat"}
              </div>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.column__iLXaj
              )}
              component={Link}
              href={`/Booking`}
              platform={"nextjs"}
            >
              <Listsvg4Icon
                className={classNames(projectcss.all, sty.svg__owr8Y)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ysePs
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
  PlasmicChat__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChat__VariantsArgs;
    args?: PlasmicChat__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicChat__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicChat__ArgsType,
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
          internalArgPropNames: PlasmicChat__ArgProps,
          internalVariantPropNames: PlasmicChat__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicChat__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChat";
  } else {
    func.displayName = `PlasmicChat.${nodeName}`;
  }
  return func;
}

export const PlasmicChat = Object.assign(
  // Top-level PlasmicChat renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    freeBox: makeNodeComponent("freeBox"),
    banner: makeNodeComponent("banner"),

    // Metadata about props expected for PlasmicChat
    internalVariantProps: PlasmicChat__VariantProps,
    internalArgProps: PlasmicChat__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicChat;
/* prettier-ignore-end */
