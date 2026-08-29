import "@fontsource-variable/quicksand/wght.css";

import { renderNavbar } from "./components/navbar.js";
import { renderSidebar } from "./components/sidebar.js";
import { renderFooter } from "./components/footer.js";
import { renderDashboard } from "./pages/dashboard.js";
import { renderMobileNavigation } from "./components/mobile-navigation.js";
import { renderToastContainer } from "./components/toast.js";

renderNavbar();
renderSidebar();
renderDashboard();
renderFooter();
renderMobileNavigation();
renderToastContainer();
