import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable
} from '@coreui/react';

import { RootState } from '../../store/store';
import { ECategoryStatus, ICategory } from '../../entities/news-category';
import { ODDataTypes } from '../../store/operational-data';
import { changeSection } from '../../actions/operational-data';


const CategoriesList : React.FC = (  ) => {
  const dispatch = useDispatch();
  const categoriesData = useSelector( (state: RootState ) => state.operation.dataStore);

  const tableFields = useSelector( (state: RootState ) => state.operation.tableFields );
  useEffect(() => {
    dispatch( changeSection( ODDataTypes.CATEGORY ) )
  }, [])

  const getBadgeColor = (status: ECategoryStatus): string => {
    switch (status) {
      case ECategoryStatus.publish : return 'success'
      case ECategoryStatus.draft   : return 'warning'
      case ECategoryStatus.inactive: return 'secondary'
      case ECategoryStatus.deleted : return 'danger'
      default: return 'primary'
    }
  }
  const getBadgeName = (status: ECategoryStatus): string => {
    switch (status) {
      case ECategoryStatus.publish : return 'Опубликовано'
      case ECategoryStatus.draft   : return 'Черновик'
      case ECategoryStatus.inactive: return 'Не активная'
      case ECategoryStatus.deleted : return 'Удалена'
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
            fields= { tableFields }
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

export default CategoriesList;