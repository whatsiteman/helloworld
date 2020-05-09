/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import axios from "axios"
window.axios = axios;
window.axios.defaults.baseURL = process.env.BASE_API;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// Response interceptor
window.axios.interceptors.response.use(function (config) {
    return config;
}, function (error) {
    if (error.response && error.response.status === 401) {
        window.location.href = "/404";
    }
    return Promise.reject(error);
});

if ((process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development") === "development") {
    window.localStorage.setItem("cr", JSON.stringify({ name: "development" }))
}
