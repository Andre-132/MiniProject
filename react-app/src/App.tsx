import "./App.css";
import Home from "./HomePage";
import { ThemeProvider } from "./components/ui/Themes";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
