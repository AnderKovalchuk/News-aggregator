import { SystemActionsDictionary } from "../../store/system"

export const changeSidebar = () => ({
  type: SystemActionsDictionary.CHANGE_SIDEBAR,
} as const);