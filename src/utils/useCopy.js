import useSWR from "swr";
import { fetchCopyList } from "./Firebase";

function getSubList(copyList, nombre) {
  const obj = copyList.find(item => item.nombre === nombre);
  if (!obj) return [];
  return Object.entries(obj)
    .filter(([key]) => key !== "nombre" && key !== "id")
    .map(([, val]) => val);
}

export function useCopy() {
  const { data: copyList = [], error, isLoading } = useSWR("copy", fetchCopyList);
  return {
    copyList,
    copyLoaded: !isLoading && !error && copyList.length > 0,
    isLoading,
    error,
    servicesList: getSubList(copyList, "services"),
    timeLineList: getSubList(copyList, "timeLine"),
    footerList:   getSubList(copyList, "footer"),
    talksList:    getSubList(copyList, "talks"),
    worksList:    getSubList(copyList, "works").sort((a, b) => a.priority - b.priority),
  };
}
