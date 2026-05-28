import { copyList, servicesList, timeLineList, footerList, talksList, worksList } from "../data/content";

export function useCopy() {
  return {
    copyList,
    copyLoaded: true,
    isLoading: false,
    error: null,
    servicesList,
    timeLineList,
    footerList,
    talksList,
    worksList: [...worksList].sort((a, b) => a.priority - b.priority),
  };
}
