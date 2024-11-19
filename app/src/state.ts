import { Signal } from "cradova";

export const store = new Signal(
  {
    time: Date.now(),
  },
  { persistName: "cssr-cache" },
);
