import { takeEvery } from "redux-saga/effects";
import { ODActionsDictionary } from "../../store/operational-data";
import { workerLoadItem, workerLoadItems } from "./_worker.saga";

export const watchOperationalData = function* () {
  yield takeEvery( ODActionsDictionary.LOAD_ITEMS, workerLoadItems );

  yield takeEvery( ODActionsDictionary.LOAD_ITEM, workerLoadItem );
}