import type { ParsedUrlQuery } from "querystring";

export * from "./env";

export function pad(num: number, size: number) {
  let index = num.toString();
  while (index.length <= size) index = "0" + index;
  return index;
}

export const isRoute = (path: string, route: string) => {
  const isHome = route === "/" && path === "/home";
  return isHome ? true : route.includes(path);
};

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function isEmpty(obj: object) {
  return obj && Object.keys(obj).length === 0;
}

export function getParam(params: ParsedUrlQuery | undefined, target: string) {
  if (!params) return "";

  const param = params[target] || "";

  return Array.isArray(param) ? param[0] : param;
}
