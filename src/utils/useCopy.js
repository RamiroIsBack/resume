import { copyList, servicesList, timeLineList, footerList, talksList, worksList, aiProjectsList, collaboratorsList } from "../data/content";
import { resolveCauceLink } from "./cauceUrl";

const withCauceLinks = item => ({ ...item, url: resolveCauceLink(item.url), ctaLink: resolveCauceLink(item.ctaLink) });

export function useCopy() {
  return {
    copyList,
    copyLoaded: true,
    isLoading: false,
    error: null,
    servicesList: servicesList.map(withCauceLinks),
    timeLineList,
    footerList,
    talksList,
    worksList: [...worksList].sort((a, b) => a.priority - b.priority).map(withCauceLinks),
    aiProjectsList: [...aiProjectsList].sort((a, b) => a.priority - b.priority).map(withCauceLinks),
    collaboratorsList,
  };
}
