import { ODActionsDictionary } from "../../store/operational-data";

export const loadODItems = () => ({
  type: ODActionsDictionary.LOAD_ITEMS,
} as const);

export const loadODItem = (id: number) => ({
  type: ODActionsDictionary.LOAD_ITEM,
  id,
} as const);
