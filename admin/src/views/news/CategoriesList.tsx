import React, { Component, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import { CBadge, CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CDataTable, CLink } from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { categoriesListFields, testDate } from './tables-fields/categories-list-fields';
import { loadCategories } from '../../store/news/load-categories';
import { RootState } from '../../store/store';
import { CategoryStatus, ICategory } from '../../api/interfaces/news/categories';



const CategoriesList : React.FC = (  ) => {
  const dispatch = useDispatch();
  const categoriesData = useSelector( (state: RootState ) => state.news.categoriesList );
  useEffect(() => {
    dispatch( loadCategories() )
    console.log(categoriesData);
    // loadCategoriesList();
  }, [])
  // const dispatch = useDispatch();
  // dispatch( loadCategories() );
  // const categoriesData = useSelector( (state: RootState ) => state.news.categoriesList );

  const getBadgeColor = (status: CategoryStatus): string => {
    switch (status) {
      case CategoryStatus.publish : return 'success'
      case CategoryStatus.draft   : return 'warning'
      case CategoryStatus.inactive: return 'secondary'
      case CategoryStatus.deleted : return 'danger'
      default: return 'primary'
    }
  }
  const getBadgeName = (status: CategoryStatus): string => {
    switch (status) {
      case CategoryStatus.publish : return 'Опубликовано'
      case CategoryStatus.draft   : return 'Черновик'
      case CategoryStatus.inactive: return 'Не активная'
      case CategoryStatus.deleted : return 'Удалена'
      default: return 'primary'
    }
  }
  const getSubCategory = (parent: ICategory): any => {
    if( parent.children === undefined || parent.children.length <= 0)
      return null;
    
    const subCategory: any = [];

    parent.children.map( (child) => {
      subCategory.push(
        <CBadge 
          color="info"
          href= { `/#/news/categories?parent=${ parent.id }&id=${ child.id }` }
        >
          { child.title }
        </CBadge>
      )
    })

    return subCategory;
  }

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
            scopedSlots = {{
              'status':
                (item: ICategory) => (
                  <td>
                    <CBadge color={ getBadgeColor( item.status ) }>
                      { getBadgeName( item.status ) }
                    </CBadge>
                  </td>
                ),
              'children':
                (item: ICategory) => (
                  <td>
                    { getSubCategory( item ) }
                  </td>
                )
            }}
          />
        </CCardBody>
      </CCard>
    </>
  )
};

const mapStateToProps = (state: RootState): any => {
  // useDispatch loadCategories();
  return {
    categoriesData: state.news.categoriesList
  }
}
const mapDispatchToProps = (dispatch: any): any => {
  return {
    loadCategoriesList: () => dispatch( loadCategories() )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);