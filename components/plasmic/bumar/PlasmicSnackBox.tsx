// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: r5Q4Z1cxFkCcTJmiuBHM4s
// Component: mbDm9ujM0qQ4

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
import sty from "./PlasmicSnackBox.module.css"; // plasmic-import: mbDm9ujM0qQ4/css

import ArrowLeftSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__ArrowLeftSvgrepoCom1Svg"; // plasmic-import: UroXee_yw1o3/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 9OcZEOS6XKco/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: f30sqqHn8JbB/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: rx8PB0YDgyof/icon

createPlasmicElementProxy;

export type PlasmicSnackBox__VariantMembers = {};
export type PlasmicSnackBox__VariantsArgs = {};
type VariantPropType = keyof PlasmicSnackBox__VariantsArgs;
export const PlasmicSnackBox__VariantProps = new Array<VariantPropType>();

export type PlasmicSnackBox__ArgsType = {};
type ArgPropType = keyof PlasmicSnackBox__ArgsType;
export const PlasmicSnackBox__ArgProps = new Array<ArgPropType>();

export type PlasmicSnackBox__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  link?: Flex__<"a"> & Partial<LinkProps>;
  img?: Flex__<typeof PlasmicImg__>;
  columns?: Flex__<"div">;
  column?: Flex__<"div">;
  button2?: Flex__<typeof Button2>;
};

export interface DefaultSnackBoxProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSnackBox__RenderFunc(props: {
  variants: PlasmicSnackBox__VariantsArgs;
  args: PlasmicSnackBox__ArgsType;
  overrides: PlasmicSnackBox__OverridesType;
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

          <section className={classNames(projectcss.all, sty.section__lh2Rc)}>
            <PlasmicLink__
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(projectcss.all, projectcss.a, sty.link)}
              component={Link}
              href={`/menu`}
              platform={"nextjs"}
            >
              <ArrowLeftSvgrepoCom1SvgIcon
                className={classNames(projectcss.all, sty.svg__k9Sdd)}
                role={"img"}
              />
            </PlasmicLink__>
          </section>
          <section className={classNames(projectcss.all, sty.section__kaGR)}>
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
                src: "/plasmic/bumar/images/mixSweetCookiesCakeRollMiniCupcakesjpg.jpg",
                fullWidth: 5978,
                fullHeight: 3986,
                aspectRatio: undefined
              }}
            />
          </section>
          <section className={classNames(projectcss.all, sty.section__r163)}>
            <div className={classNames(projectcss.all, sty.freeBox__vxiAa)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__wjnBu)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__olEbF)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__bmlvW)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__wfvK)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__iAxoG
                        )}
                      >
                        {"Harga paket snack box"}
                      </div>
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lmIjw
                      )}
                    >
                      {"Minimal pemesanan produk 5, 10 sampai dengan 12 produk"}
                    </div>
                  </Stack__>
                </Stack__>
              </Stack__>
            </div>
          </section>
          <Stack__
            as={"div"}
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            hasGap={true}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div
              data-plasmic-name={"column"}
              data-plasmic-override={overrides.column}
              className={classNames(projectcss.all, sty.column)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__pS4T)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__pg2F3)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__gAvEa)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__vCz0
                      )}
                    >
                      {"Snack box"}
                    </div>
                  </Stack__>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__c1KkR
                    )}
                  >
                    {"Rp. 18.000"}
                  </div>
                  <Button2
                    data-plasmic-name={"button2"}
                    data-plasmic-override={overrides.button2}
                    className={classNames("__wab_instance", sty.button2)}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__kjvkX)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__y8A0)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ghBuh
                      )}
                    >
                      {"Booking"}
                    </div>
                  </Button2>
                </Stack__>
                <div
                  className={classNames(projectcss.all, sty.freeBox__bzHe)}
                />

                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__y40Z4)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__iNwu5)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__enA9O)}
                    >
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg__c8Cvd)}
                        role={"img"}
                      />
                    </div>
                    {false ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__ws3DF
                        )}
                      >
                        <IconIcon
                          className={classNames(projectcss.all, sty.svg__jT1U2)}
                          role={"img"}
                        />
                      </div>
                    ) : null}
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__iiUho)}
                    >
                      {false ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__zoXyE
                          )}
                        >
                          {"Label"}
                        </div>
                      ) : null}
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__h5ViJ
                        )}
                      >
                        {"kue lapis"}
                      </div>
                    </Stack__>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__nrzns)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___9Ba53
                      )}
                    >
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg__ws79A)}
                        role={"img"}
                      />
                    </div>
                    {false ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__gbxKa
                        )}
                      >
                        <IconIcon
                          className={classNames(
                            projectcss.all,
                            sty.svg___5D74L
                          )}
                          role={"img"}
                        />
                      </div>
                    ) : null}
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___6Kt8Y
                      )}
                    >
                      {false ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__sWxnE
                          )}
                        >
                          {"Label"}
                        </div>
                      ) : null}
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__cqOez
                        )}
                      >
                        {"Kue bolu "}
                      </div>
                    </Stack__>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__fxZes)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__htMis)}
                    >
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg__db6Km)}
                        role={"img"}
                      />
                    </div>
                    {false ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__aysLe
                        )}
                      >
                        <IconIcon
                          className={classNames(projectcss.all, sty.svg__s0HfQ)}
                          role={"img"}
                        />
                      </div>
                    ) : null}
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__xLdb5)}
                    >
                      {false ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__xCqyo
                          )}
                        >
                          {"Label"}
                        </div>
                      ) : null}
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ezg6G
                        )}
                      >
                        {"Makaroni panggang"}
                      </div>
                    </Stack__>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__aLZgg)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__ewBus)}
                    >
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg__dQszL)}
                        role={"img"}
                      />
                    </div>
                    {false ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__opInO
                        )}
                      >
                        <IconIcon
                          className={classNames(projectcss.all, sty.svg__qoGHa)}
                          role={"img"}
                        />
                      </div>
                    ) : null}
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___5Skie
                      )}
                    >
                      {false ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___7SOf
                          )}
                        >
                          {"Label"}
                        </div>
                      ) : null}
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___82Jp
                        )}
                      >
                        {"Buah"}
                      </div>
                    </Stack__>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__mutFo)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__v4WMy)}
                    >
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg___6I7Hz)}
                        role={"img"}
                      />
                    </div>
                    {false ? (
                      <div
                        className={classNames(projectcss.all, sty.freeBox__aY4)}
                      >
                        <IconIcon
                          className={classNames(projectcss.all, sty.svg__fguAo)}
                          role={"img"}
                        />
                      </div>
                    ) : null}
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__dCqsG)}
                    >
                      {false ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__rb1I4
                          )}
                        >
                          {"Label"}
                        </div>
                      ) : null}
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__jMreE
                        )}
                      >
                        {"Air mineral"}
                      </div>
                    </Stack__>
                  </Stack__>
                </Stack__>
              </div>
            </div>
          </Stack__>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "link", "img", "columns", "column", "button2"],
  navbar: ["navbar"],
  link: ["link"],
  img: ["img"],
  columns: ["columns", "column", "button2"],
  column: ["column", "button2"],
  button2: ["button2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  link: "a";
  img: typeof PlasmicImg__;
  columns: "div";
  column: "div";
  button2: typeof Button2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSnackBox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSnackBox__VariantsArgs;
    args?: PlasmicSnackBox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSnackBox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSnackBox__ArgsType,
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
          internalArgPropNames: PlasmicSnackBox__ArgProps,
          internalVariantPropNames: PlasmicSnackBox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSnackBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSnackBox";
  } else {
    func.displayName = `PlasmicSnackBox.${nodeName}`;
  }
  return func;
}

export const PlasmicSnackBox = Object.assign(
  // Top-level PlasmicSnackBox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    link: makeNodeComponent("link"),
    img: makeNodeComponent("img"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    button2: makeNodeComponent("button2"),

    // Metadata about props expected for PlasmicSnackBox
    internalVariantProps: PlasmicSnackBox__VariantProps,
    internalArgProps: PlasmicSnackBox__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSnackBox;
/* prettier-ignore-end */