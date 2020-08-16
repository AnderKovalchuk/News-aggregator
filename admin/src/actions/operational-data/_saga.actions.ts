import { ODActionsDictionary } from "../../store/operational-data";
import { ISource } from '../../entities/news-source';

export const putODDataItems = (
  data: ISource[]
) => ({
  type: ODActionsDictionary.PUSH_ITEMS,
  data
} as const);

export const putODDataCurrentItem = (
  data: ISource[]
) => ({
  type: ODActionsDictionary.PUSH_CURRENT_ITEM,
  data
} as const);