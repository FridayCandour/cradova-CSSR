import { div, img, h1, a, p, Page, button } from "cradova";

export const aboutPage = new Page({
  snapshotIsolation: true,
  template() {
    return div(
      { className: "w-full h-full" },
      h1("Cradova"),
      a(
        { href: "https://github.com/Uiedbook/cradova" },
        button("find learn cradova", {
          className: "w-[4rem] h-[2.3rem] bg-[rebeccapurple]",
        })
      )
    );
  },
});
