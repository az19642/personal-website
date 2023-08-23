import '../styles/modern-normalize.css';
import '../styles/main.css';
import '../styles/components/header.css';
import '../styles/components/home.css';
import '../styles/components/skills.css';
import '../styles/components/projects.css';
import '../styles/components/contact.css';
import '../styles/components/mobile-nav.css';
import '../styles/utils.css';

import getScrollPadding from './utils/get-scroll-padding';
import themeToggle from './utils/theme-toggle';
import mobileNav from './utils/mobile-nav';

getScrollPadding();
themeToggle();
mobileNav();