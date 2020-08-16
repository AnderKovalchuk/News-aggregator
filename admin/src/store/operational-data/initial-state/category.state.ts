import { IOPState } from "..";
import { EndPoint, SERVER_ADDRESS } from "../../../api/api-dictionary";
import { categoryTableFields } from "../../../helpers/news-category";
import { ODDataTypes } from "../_data-types.enum";

export const categoryInitialState: IOPState = {
  apiURL: `${SERVER_ADDRESS}${EndPoint.NEWS_CATEGORY}`,
  adminURL: "/news/category",

  dataType: ODDataTypes.CATEGORY,
  dataStore: null,
  currentItem: null,

  tableFields: categoryTableFields,
  isLoadData: false,
}