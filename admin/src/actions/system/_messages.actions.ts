import { SystemActionsDictionary } from "../../store/system"

export const errorMessage = (
  message: string,
) => ( {
  type: SystemActionsDictionary.PUSH_ERROR_MESSAGE,
  message,
} as const);