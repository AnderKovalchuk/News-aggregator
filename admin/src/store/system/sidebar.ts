import { SidebarAction } from "./action-dictionary"
import { ChangeSidebar } from "./action-type"

export const changeSidebar = (): ChangeSidebar => {
  return {
    type: SidebarAction.CHANGE_SIDEBAR
  }
}