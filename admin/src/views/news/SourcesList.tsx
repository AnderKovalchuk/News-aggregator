import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { CBadge, CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CDataTable, CTooltip } from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { RootState } from '../../store/store';
import { ISource } from '../../entities/news-source';
import {
  parseParsingFilter,
  parseParsingType,
  parseSourceStatus 
} from '../../helpers/news-source';
import { ODDataTypes } from '../../store/operational-data';
import { changeSection, editODItem, loadODItems } from '../../actions/operational-data';
import { TypeOfConnect } from '../../store/store-helper/TypeOfConnect';

const storeEnhancer = connect(
  (state: RootState) => ({
    newsSources: state.operation.dataStore,
    isLoading: state.operation.isLoadData,
    adminURL: state.operation.adminURL, 
    tableFields: state.operation.tableFields,
  }), 
  (dispatch: any) => ({
    editSource: (
      id: number,
      adminURL: string,
    ) => dispatch( editODItem(id, adminURL) ),
    changeSection: () => dispatch( changeSection( ODDataTypes.NEWS_SOURCE ) ),
    loadODItems: () => dispatch( loadODItems() ),
  })
)
type AppProps = {} & TypeOfConnect<typeof storeEnhancer>;

const SourcesList: React.FC<AppProps> = ( {
  newsSources, isLoading, adminURL, tableFields,
  changeSection, editSource, loadODItems
} ) => {
  useEffect(() => {
    changeSection();
    loadODItems();
  }, [])

  return(
    <>
      <CCard>
        <CCardHeader>
          <span className="h3"> Список источников новостей </span>
          
          <div className="card-header-actions">
            <CButtonGroup>
              <CButton 
                color="info"
                size="sm"
                variant= "outline"
                href="/news/sources/form"
                // onClick = { loadCategoriesList }
              > Добавить источник </CButton>
            </CButtonGroup>
          </div>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            fields= { tableFields }
            items= { newsSources }
            border = { false }
            loading = { isLoading }
            size = "md"
            hover
            striped
            scopedSlots = {{
              'sourceStatus':
                (item: ISource) => {
                  const {color, text } = parseSourceStatus( item.sourceStatus );
                  return(
                    <td>
                    <CBadge color={ color }>
                      { text }
                    </CBadge>
                  </td>
                  )
                },
              'parsingType':
                (item: ISource) => {
                  const {color, text } = parseParsingType( item.parsingType );
                  return(
                    <td>
                    <CBadge color={ color }>
                      { text }
                    </CBadge>
                  </td>
                  )
                },
              'parsingFilter':
                (item: ISource) => {
                  const {color, text } = parseParsingFilter( item.parsingFilter );
                  return(
                    <td>
                    <CBadge color={ color }>
                      { text }
                    </CBadge>
                  </td>
                  )
                },
              'action': 
                (item: ISource, index: number)=>{
                  return (
                    <td className="py-2">
                      <CButtonGroup>
                        
                        <CButton
                          color="primary"
                          variant="ghost"
                          size="sm"
                          onClick={ () => editSource(item.id, adminURL ) }
                        >
                          <CTooltip content="Редактировать" placement="top">
                            <CIcon name={'cilSettings'} />
                          </CTooltip>
                        </CButton>
                        <CButton
                          color="danger"
                          variant="ghost"
                          size="sm"
                          onClick={ ()=>{ } }
                        >
                          <CTooltip content="Удалить" placement="top">
                            <CIcon name={'cilX'} />
                          </CTooltip>
                        </CButton>
                      </CButtonGroup>
                    </td>
                    )
                },
            }}
          />
        </CCardBody>
      </CCard>
    </>
  )
};

export default storeEnhancer(SourcesList);
