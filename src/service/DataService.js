export const isBrowser = () => typeof window !== "undefined"
export const getCurrentRepo = () =>
    isBrowser() && window.localStorage.getItem("cr")
        ? JSON.parse(window.localStorage.getItem("cr"))
        : {}

export const setCurrentRepo = repo =>
    window.localStorage.setItem("cr", JSON.stringify(repo))

export const isLocalPreview = () => {
    const repo = getCurrentRepo()
    return !!repo.name
}

export const getSettings = (allSetting) => {
    if (isLocalPreview()) {
        return window.axios.get(`user/repos/${getCurrentRepo().name}/settings/general`)
            .then((r) => {
                return r.data.reduce((a, x) => ({ ...a, [x.key]: x.value }), {})
            });
    }
    else {
        return new Promise((resolve, reject) => {
            resolve(
                allSetting.edges.reduce((a, x) => ({ ...a, [x.node.key]: x.node.value }), {})
            )
        });
    }
}

export const getPosts = (allPost) => {
    if (isLocalPreview()) {
        return window.axios.get(`user/repos/${getCurrentRepo().name}/posts`)
            .then((r) => {
                return r.data
            });
    }
    else {
        return new Promise((resolve, reject) => {
            resolve(
                allPost.edges
            )
        });
    }
}

export const getPost = (data, slug) => {
    if (isLocalPreview()) {
        return window.axios.get(`user/repos/${getCurrentRepo().name}/posts/${slug}`)
            .then((r) => {
                return r.data
            });
    }
    else {
        return new Promise((resolve, reject) => {
            resolve(
                data.post
            )
        });
    }
}
