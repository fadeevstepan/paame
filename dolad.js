function loaderFactory(fetch, fs) {
  return {
    load: (resource) => {
      return fetch(resource).then((data) => {
        return data;
      });
    },
    isCacheable: () => {
      return true;
    },
    getCacheKey: (resource) => {
      return resource;
    }
  };
}
