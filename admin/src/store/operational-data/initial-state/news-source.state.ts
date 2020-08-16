import { IOPState } from "..";
import { EndPoint, SERVER_ADDRESS } from "../../../api/api-dictionary";
import { sourceTableFields } from "../../../helpers/news-source";
import { ODDataTypes } from "../_data-types.enum";

export const newsSourceInitialState: IOPState = {
  apiURL: `${SERVER_ADDRESS}${EndPoint.NEWS_SOURCE}`,
  adminURL: "/news/sources",

  dataType: ODDataTypes.NEWS_SOURCE,
  dataStore: null,
  currentItem: null,

  tableFields: sourceTableFields,
  isLoadData: false,
}