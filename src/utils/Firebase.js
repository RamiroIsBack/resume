import { copyList, servicesList, timeLineList, footerList, talksList, worksList } from "../data/content";

function buildLegacySnapshot() {
  return [
    { nombre: "copy",     ...Object.fromEntries(copyList.map(i => [i.nombre, i])) },
    { nombre: "services", ...Object.fromEntries(servicesList.map(i => [i.nombre, i])) },
    { nombre: "timeLine", ...Object.fromEntries(timeLineList.map(i => [i.className, i])) },
    { nombre: "footer",   ...Object.fromEntries(footerList.map(i => [i.nombre, i])) },
    { nombre: "talks",    ...Object.fromEntries(talksList.map(i => [i.nombre, i])) },
    { nombre: "works",    ...Object.fromEntries(worksList.map(i => [i.nombre, i])) },
  ];
}

export const getCopyForTesting = () => Promise.resolve(buildLegacySnapshot());

export default { getCopyForTesting };
