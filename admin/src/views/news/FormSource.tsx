import React, {  useEffect } from 'react';

import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import { TypeOfConnect } from '../../store/store-helper/TypeOfConnect';
import { loadODItem } from '../../actions/operational-data';
import { SourceEdit } from './edit-forms/SourceEdit';

const storeEnhancer = connect(
  (state: RootState) => ({
    currentItem: state.operation.currentItem,
    isLoading: state.operation.isLoadData,
  }), 
  (dispatch: any) => ({
    loadItem: () => {
      dispatch( loadODItem(1) );
    }
  })
)
export type SourceEditProps = {} & TypeOfConnect<typeof storeEnhancer>;

const FormSource: React.FC<SourceEditProps> = ({
  currentItem, isLoading,
  loadItem,
}) => {

  useEffect( () => {
    loadItem();
  }, [] );

  return(
    <>
      {
        currentItem ?
        <SourceEdit item = {currentItem} /> : <h1>Загрузка</h1>
      }
    </>
  )

}

export default storeEnhancer(FormSource);