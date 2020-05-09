import React from "react"
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

const defaultState = {
  getSettings: () => { },
  getPosts: () => { },
}

const DataContext = React.createContext(defaultState)

class DataProvider extends React.Component {
  getSettings = (allSetting) => {
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

  getPosts = (allPost) => {
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

  render() {
    const { children } = this.props
    return (
      <DataContext.Provider
        value={{
          getSettings: this.getSettings,
          getPosts: this.getPosts
        }}
      >
        {children}
      </DataContext.Provider>
    )
  }
}
export default DataContext
export { DataProvider }