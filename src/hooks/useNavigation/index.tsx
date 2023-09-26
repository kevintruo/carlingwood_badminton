import * as React from "react";
import { NavigationContext } from "./Provider";

export default function useNavigation() {
  const context = React.useContext(NavigationContext);
  if (!context) throw new Error("NavigationContext.Provider not found");

  const { open, toggleOpen } = context;

  return { open, toggleOpen };
}
