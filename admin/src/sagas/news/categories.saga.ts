import { call, put } from 'redux-saga/effects'
import { fetchCategories, fetchCategory } from '../../api/news/categories.api';
import { putCategories } from '../../store/news/load-categories';

export const workerLoadCategories = function* () {
  try {
    console.log('Saga Start');
    const data = yield call( fetchCategories );
    console.log(data);
    yield put( putCategories(data) )
    // console.log(data);
  } catch(e) {
    console.log(e);
  }
}

export const workerLoadCategory = function* (id: number) {
  try {
    const data = yield call( fetchCategory, id);
  } catch(e) {
    console.log(e);
  }
}