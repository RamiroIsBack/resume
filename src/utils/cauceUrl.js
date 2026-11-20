// Links from /equipo to the Cauce IA site. On the legacy domain (ramirosantamaria.com) "/" is still
// the CV itself until its 301 to cauce-ia.es is switched on, so point at cauce-ia.es explicitly there.
const LEGACY_HOST = /(^|\.)ramirosantamaria\.com$/i;

export function cauceUrl(path = "/") {
  const onLegacyHost = typeof window !== "undefined" && LEGACY_HOST.test(window.location.hostname);
  return onLegacyHost ? `https://cauce-ia.es${path}` : path;
}

// Data links that point to the Cauce IA landing ("/" or "/#section") go through cauceUrl.
export function resolveCauceLink(url) {
  return typeof url === "string" && (url === "/" || url.startsWith("/#")) ? cauceUrl(url) : url;
}
