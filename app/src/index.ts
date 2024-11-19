import { Router } from "cradova";
import { homePage } from "./home";
// css
import "./styles.css";

Router.BrowserRoutes({
  "/": homePage,
  "/about": async () => {
    const def = await import("./about");
    return def.aboutPage;
  },
});
