function deepCopy(obj, seen = new Map()) {
  if (typeof obj !== "object" || obj === null) return obj;
  if (seen.has(obj)) return seen.get(obj);

  const copy = Array.isArray(obj) ? [] : {};
  seen.set(obj, copy);

  for (let key in obj) {
    copy[key] = deepCopy(obj[key], seen);
  }
  return copy;
}
