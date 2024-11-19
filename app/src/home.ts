import { button, div, img, Page, Router } from "cradova";

export const homePage = new Page({
  snapshotIsolation: true,
  name: "Cradova - CSSR",
  template() {
    return div(
      { className: "rocket-container" },
      button("About", {
        className:
          "m-auto w-fit bg-[rebeccapurple] py-4 px-8 rounded-[999px] text-[#fff] text-[1.6rem]",
        onclick() {
          Router.navigate("/about");
        },
      }),
      img({
        className: "rocket",
        src: "/icon.webp",
        onanimationend(this: HTMLImageElement) {
          this.classList.add("orbit");
        },
      }),
    );
  },
});
