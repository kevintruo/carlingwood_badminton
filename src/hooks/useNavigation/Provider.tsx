import * as React from "react";

interface Props {
  open: boolean;
  toggleOpen: (val: boolean) => void;
}

export const NavigationContext = React.createContext<Props | undefined>(undefined);

export default function NavigationProvider({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = React.useState<boolean>(false);
  const toggleOpen = (val: boolean) => setOpen(val);

  return (
    <NavigationContext.Provider value={{ open: open, toggleOpen: toggleOpen }}>
      {children}
    </NavigationContext.Provider>
  );
}
