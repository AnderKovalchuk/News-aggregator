import { call, put, select } from "redux-saga/effects";

import { RootState } from "../../store/store";
import { 
  putODDataCurrentItem,
  putODDataItems,
  resetActionFlag,
  setActionFlag
} from "../../actions/operational-data";
import { errorMessage } from "../../actions/system";
import { 
  ODActionsDictionary,
  OperationalDataActionType
} from "../../store/operational-data";


export const workerLoadItems = function* () {
  const apiURL = yield select( (state: RootState) => state.operation.apiURL )
  try {
    yield put( setActionFlag() );
    const data = yield call( fetchOperationData, apiURL);
    console.log(data);
    yield put( putODDataItems(data) )
  } catch(e) {
    yield put( errorMessage( e.message ) )
  } finally {
    yield put( resetActionFlag() );
  }
}

export const workerLoadItem = function* (
  action: OperationalDataActionType
) {
  if(action.type !== ODActionsDictionary.LOAD_ITEM)
    return;
  const apiURL = yield select( (state: RootState) => state.operation.apiURL )
  try {
    yield put( setActionFlag() );
    const data = yield call( fetchOperationData, `${apiURL}/${action.id}`);
    yield put( putODDataCurrentItem(data) )
  } catch(e) {
    yield put( errorMessage( e.message ) )
  } finally {
    yield put( resetActionFlag() );
  }
}

export const fetchOperationData = async (
  apiURL: string
) => {
  const res = await fetch( apiURL );
  const data = await res.json();
  if( !res.ok ) {
    throw new Error( data.message );
  }
  return data;
}