export const isBrowser = () => typeof window !== "undefined";
export const getCurrentRepo = () =>
  isBrowser() && window.localStorage.getItem("cr")
    ? JSON.parse(window.localStorage.getItem("cr"))
    : {};

export const setCurrentRepo = (repo) =>
  window.localStorage.setItem("cr", JSON.stringify(repo));

export const isLocalPreview = () => {
  const repo = getCurrentRepo();
  return !!repo.name;
};

export const getSettings = (callback) => {
  if (isLocalPreview())
    window.axios
      .get(`user/repos/${getCurrentRepo().name}/settings/general`)
      .then((r) => {
        callback(r.data.reduce((a, x) => ({ ...a, [x.key]: x.value }), {}));
      });
};

export const getPosts = (callback) => {
  if (isLocalPreview())
    window.axios.get(`user/repos/${getCurrentRepo().name}/posts`).then((r) => {
      callback(r.data.filter((x) => x.status === "published"));
    });
};

export const getPost = (slug, callback) => {
  if (isLocalPreview())
    window.axios
      .get(`user/repos/${getCurrentRepo().name}/posts/${slug}`)
      .then((r) => {
        callback(r.data);
      });
};
