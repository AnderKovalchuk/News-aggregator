import { takeEvery } from 'redux-saga/effects'

import { NewsAction } from '../../store/news/action-dictionary'
import { workerLoadCategories } from './categories.saga'

export const watchNews = function* () {
  yield takeEvery( NewsAction.LOAD_CATEGORIES, workerLoadCategories )
}