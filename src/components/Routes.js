export const Routes = ({ path, children }) =>
  window.location.pathname === path ? children : null;
