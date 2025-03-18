import { useState } from "react";
import Layout from "./components/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PropertiesForSalePage from "./pages/PropertiesForSalePage";
import ConsumerProtectionPage from "./pages/ConsumerProtectionPage";
import DepositsPage from "./pages/DepositsPage";
import LoansPage from "./pages/LoansPage";
import OneVBAdvisoryPage from "./pages/1VBAdvisoryPage";
import NewsletterPage from "./pages/NewsletterPage";

function App() {
  const [authenticated, setAuthenticated] = useState(true);

  const pathLocation = window.location.pathname;

  const navigationItems = [
    { navItem: "HOME", link: "/" },
    { navItem: "ABOUT US", link: "/about-us" },
    { navItem: "PROPERTIES FOR SALE", link: "/properties-for-sale" },
    { navItem: "CONSUMER PROTECTION", link: "/consumer-protection" },
    { navItem: "DEPOSITS", link: "/deposits" },
    { navItem: "LOANS", link: "/loans" },
    { navItem: "1VB ADVISORY", link: "/1vb-advisory" },
    { navItem: "NEWSLETTER", link: "/newsletter" },
  ];

  const routes = [
    { component: <HomePage />, route: "/" },
    { component: <AboutUsPage />, route: "/about-us" },
    { component: <PropertiesForSalePage />, route: "/properties-for-sale" },
    { component: <ConsumerProtectionPage />, route: "/consumer-protection" },
    { component: <DepositsPage />, route: "/deposits" },
    { component: <LoansPage />, route: "/loans" },
    { component: <OneVBAdvisoryPage />, route: "/1vb-advisory" },
    { component: <NewsletterPage />, route: "/newsletter" },
  ];

  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.route}
              element={
                authenticated ? (
                  <Layout>{route.component}</Layout>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
