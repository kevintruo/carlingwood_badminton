import ThemeProvider from "./hooks/useTheme/Provider";

export default function Providers({ children }: { children?: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
