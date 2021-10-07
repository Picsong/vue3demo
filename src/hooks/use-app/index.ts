import { App, AppContext, getCurrentInstance } from "vue"
interface IApp {
  app: App
  appContext: AppContext
}
export default function useApp(): IApp {
  const Instance = getCurrentInstance()
  return {
    app: Instance?.appContext?.app as App,
    appContext: Instance?.appContext as AppContext,
  }
}
