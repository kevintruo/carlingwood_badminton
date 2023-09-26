import NavigationProvider from "./hooks/useNavigation/Provider";
import ThemeProvider from "./hooks/useTheme/Provider";

export default function Providers({ children }: { children?: React.ReactNode }) {
  return (
    <ThemeProvider>
      <NavigationProvider>{children}</NavigationProvider>
    </ThemeProvider>
  );
}
