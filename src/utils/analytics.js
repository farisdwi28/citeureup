// analytics.js
import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-8V36XRYJTP");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
