import "@fontsource-variable/quicksand/wght.css";

import "./input.css";

import { renderNavbar } from "./components/navbar.js";
import { renderSidebar } from "./components/sidebar.js";
import { renderFooter } from "./components/footer.js";
import { renderMobileNavigation } from "./components/mobile-navigation.js";
import { renderToastContainer } from "./components/toast.js";
import { router } from "./router.js";
import { setupNavigation } from "./navigation.js";
import { getAppearance, applyTheme } from "./theme.js";
const appearance = getAppearance();

applyTheme(appearance.theme);
renderNavbar();

renderSidebar();

renderFooter();

renderMobileNavigation();

renderToastContainer();
setupNavigation();

router();
