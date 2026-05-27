import React, { lazy, Suspense } from "react";

const Loading = () => <div>Loading...</div>;

const wrap = (LazyComp) => (props) => (
  <Suspense fallback={<Loading />}>
    <LazyComp {...props} />
  </Suspense>
);

export const AsyncModalContainer = wrap(lazy(() => import("../components/containers/ModalContainer")));
export const AsyncSummaryContainer = wrap(lazy(() => import("../components/containers/SummaryContainer")));
export const AsyncJobsLayout = wrap(lazy(() => import("../components/layout/JobsLayout")));
export const AsyncServicesContainer = wrap(lazy(() => import("../components/containers/ServicesContainer")));
export const AsyncTimeLineContainer = wrap(lazy(() => import("../components/containers/TimeLineContainer")));
export const AsyncSideBarContainer = wrap(lazy(() => import("../components/containers/SideBarContainer")));
export const AsyncFooterContainer = wrap(lazy(() => import("../components/containers/FooterContainer")));
export const AsyncNombreContainer = wrap(lazy(() => import("../components/containers/NombreContainer")));
