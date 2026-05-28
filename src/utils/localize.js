export function localize(obj, key, lang) {
  if (lang === "es") {
    const esVal = obj[key + "_es"];
    if (esVal) return esVal;
  }
  return obj[key] ?? "";
}
