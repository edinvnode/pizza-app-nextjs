<<<<<<< HEAD
"use client";

import { Provider } from "react-redux";
import { store } from "./store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
=======
"use client";

import { Provider } from "react-redux";
import { store } from "./store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
>>>>>>> 3a987414eb50bb2cdd972783c748cb7773135173
