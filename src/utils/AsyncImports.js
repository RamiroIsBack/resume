import React from "react";
import Loadable from "react-loadable";

export const AsyncModalWorkContainer = Loadable({
  loader: () => import("../components/containers/ModalWorkContainer")
});
export const AsyncSummaryContainer = Loadable({
  loader: () => import("../components/containers/SummaryContainer"),
  loading() {
    return <div>Loading...</div>;
  }
});
export const AsyncJobsLayout = Loadable({
  loader: () => import("../components/layout/JobsLayout"),
  loading() {
    return <div>Loading...</div>;
  }
});
export const AsyncServicesContainer = Loadable({
  loader: () => import("../components/containers/ServicesContainer"),
  loading() {
    return <div>Loading...</div>;
  }
});
export const AsyncTimeLineContainer = Loadable({
  loader: () => import("../components/containers/TimeLineContainer"),
  loading() {
    return <div>Loading...</div>;
  }
});
export const AsyncSideBarContainer = Loadable({
  loader: () => import("../components/containers/SideBarContainer"),
  loading() {
    return <div>Loading...</div>;
  }
});
export const AsyncFooterContainer = Loadable({
  loader: () => import("../components/containers/FooterContainer"),
  loading() {
    return <div>Loading...</div>;
  }
});
export const AsyncNombreContainer = Loadable({
  loader: () => import("../components/containers/NombreContainer"),
  loading() {
    return <div>Loading...</div>;
  }
});
