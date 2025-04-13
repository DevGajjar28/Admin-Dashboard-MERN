import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import Admin from "scenes/admin";
import Breakdown from "scenes/breakdown";
import Customers from "scenes/customers";
import Daily from "scenes/daily";
import Dashboard from "scenes/dashboard";
import Geography from "scenes/geography";
import Layout from "scenes/layout";
import Monthly from "scenes/monthly";
import Overview from "scenes/overview";
// import Performance from "scenes/performance";
import Loader from "components/Loader";
import { useEffect, useState } from "react";
import Products from "scenes/products";
import Transactions from "scenes/transactions";
import { themeSettings } from "theme";


function App() {

  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate backend API call
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // wait 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader message="Please wait... API loading from backend" />;


  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/breakdown" element={<Breakdown />} />
            <Route path="/admin" element={<Admin />} />
            {/* <Route path="/performance" element={<Performance />} /> */}


          </Route>
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
