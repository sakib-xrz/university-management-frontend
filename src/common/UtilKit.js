export function deferred() {
  let _deferred = {};
  _deferred.promise = new Promise(function (resolve, reject) {
    _deferred.resolve = resolve;
    _deferred.reject = reject;
  });
  return _deferred;
}

export function generateBreadcrumbArray(inputURL) {
  const parts = inputURL.split("/").filter(Boolean);
  const result = [];
  let link = "";

  for (let i = 0; i < parts.length; i++) {
    const label = parts[i];
    link += `/${label}`;
    result.push({ label, link });
  }

  return result;
}

export const setToLocalStorage = (key, token) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};
