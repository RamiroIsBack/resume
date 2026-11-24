import React, { lazy, Suspense } from "react";

// Only below-the-fold sections are lazy. Nombre, Summary, JobsLayout and SideBar are imported statically in
// App.js: they are above the fold, and lazy-loading them made a second request wave after main.js.
const wrap = (LazyComp) => (props) => (
  <Suspense fallback={null}>
    <LazyComp {...props} />
  </Suspense>
);

export const AsyncModalContainer = wrap(lazy(() => import("../components/containers/ModalContainer")));
export const AsyncServicesContainer = wrap(lazy(() => import("../components/containers/ServicesContainer")));
export const AsyncTimeLineContainer = wrap(lazy(() => import("../components/containers/TimeLineContainer")));
export const AsyncFooterContainer = wrap(lazy(() => import("../components/containers/FooterContainer")));
// Google Maps (react-google-maps + lodash, plus ~1.5 MB from maps.googleapis.com) is only loaded when the footer
// gets close to the viewport; see FooterContainer.
export const AsyncMapaContainer = wrap(lazy(() => import("../components/containers/MapaContainer")));
