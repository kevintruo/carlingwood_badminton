import NavigationProvider from "./hooks/useNavigation/Provider";
import useTheme from "./hooks/useTheme";
import ThemeProvider from "./hooks/useTheme/Provider";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";

interface Props {
  children?: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider>
      <AppliedThemeProviders>{children}</AppliedThemeProviders>
    </ThemeProvider>
  );
}

const AppliedThemeProviders = ({ children }: Props) => {
  const theme = useTheme();
  const { mode } = theme;

  const customTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <MuiThemeProvider theme={customTheme}>
      <NavigationProvider>{children}</NavigationProvider>
    </MuiThemeProvider>
  );
};
