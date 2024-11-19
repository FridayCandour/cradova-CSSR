import { button, div, img, Page, Router } from "cradova";

export const homePage = new Page({
  snapshotIsolation: true,
  template() {
    return div(
      { className: "rocket-container" },
      img({
        className: "rocket",
        onanimationend(this: HTMLImageElement) {
          this.classList.add("orbit");
        },
      }),
      button("About", {
        className: "",
        onclick() {
          Router.navigate("/about");
        },
      })
    );
  },
});
