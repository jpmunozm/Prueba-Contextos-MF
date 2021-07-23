declare module "app2/App" {
  /// <reference types="react" />
  export const App: (props: { greeting?: string }) => JSX.Element;
}
declare module "app2/bootstrap" {
  export {};
}
declare module "app2/index" {
  export {};
}
declare module "app2/utils/multiply" {
  export const multiply: (num1: number, num2: number) => number;
}
declare module "app2/utils" {
  export { multiply } from "app2/utils/multiply";
}
declare module "app2" {
  import main = require("app2/index");
  export = main;
}

declare module "app2/UserContext";
