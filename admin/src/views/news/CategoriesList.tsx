import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CDataTable, CLink } from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { categoriesListFields, testDate } from './tables-fields/categories-list-fields';
import { loadCategories } from '../../store/news/load-categories';
import { RootState } from '../../store/store';


const CategoriesList: React.FC = () => {
  const dispatch = useDispatch();
  dispatch( loadCategories() );
  const categoriesData = useSelector( (state: RootState ) => state.news.categoriesList );

  return(
    <>
      <CCard>
        <CCardHeader>
          <span className="h3"> Список категорий </span>
          
          <div className="card-header-actions">
            <CButtonGroup>
              <CButton 
                color="info"
                size="sm"
                variant= "outline"
                // onClick = { loadCategoriesList }
              > Создать категорию </CButton>
              <CButton 
                color="info"
                size="sm"
                variant= "outline"
              > Соответствие категорий доноров </CButton>
            </CButtonGroup>
          </div>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            fields= { categoriesListFields }
            items= { categoriesData }
            border = { false }
            size = "md"
            hover
            striped
          />
        </CCardBody>
      </CCard>
    </>
  )
};

export default CategoriesList;