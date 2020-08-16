
import React, { useState } from 'react';

import {
  CCard,
  CCardHeader,
  CCardBody,
  CContainer,
  CFormGroup,
  CLabel,
  CInput,
  CFormText,
  CCol,
  CRow,
  CSelect,
} from '@coreui/react';

import { getInfoParsingFilter, getInfoSourceStatus } from '../../../helpers/news-source';
import { ISource } from '../../../entities/news-source';

type SourceEditType = {
  item: ISource
}

export const SourceEdit: React.FC<SourceEditType> = ( props ) => {
  const { item } = props;
  const [state, setState] = useState( Object.assign( {}, item) );

  const changeInput = ( e:any ) => {
    setState({ ...state, [e.currentTarget.id]: e.currentTarget.value })
  }

  return (
    <>
      <CRow>
        <CCol sm="12">
          <CCard>
            <CCardBody>
              { item.id === 0 ?
                <span className="h4"> Создание сточника </span> :
                <span className="h4"> { item.title } </span>
              }
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CContainer fluid>
        <CRow>
          <CCol sm="8">
            <CCard>
              <CCardHeader>
                Информация
              </CCardHeader>
              <CCardBody>
                <CContainer>
                  <CFormGroup>
                    <CLabel htmlFor="title">Название</CLabel>
                    <CInput 
                      id="title"
                      name="title"
                      placeholder="Название"
                      value= { state.title }
                      onChange = { e => setState({ ...state, title: e.currentTarget.value }) }
                    />
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel htmlFor="link">Ссылка</CLabel>
                    <CInput
                      id="link"
                      name="link"
                      placeholder="http:..."
                      value= { state.link }
                      onChange= { changeInput }
                    />
                    <CFormText className="help-block">Ссылка на главную страницу источника</CFormText>
                  </CFormGroup>
                </CContainer>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm="4">
            <CCard>
              <CCardHeader>
                Настройки
              </CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CLabel htmlFor="sourceStatus"> Статус </CLabel>
                  <CSelect
                    name="sourceStatus"
                    id="sourceStatus"
                    value= { state.sourceStatus }
                    onChange= { changeInput }
                  >
                    { getInfoSourceStatus.map( el => 
                      <option 
                        key= { el.value }
                        value= { el.value }
                      > { el.text } </option>
                    )}
                  </CSelect>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="parsingFilter"> Метод сбора информации </CLabel>
                  <CSelect
                    name="parsingFilter"
                    id="parsingFilter"
                    value= { state.parsingFilter }
                    onChange= { changeInput }
                  >
                    { getInfoParsingFilter.map( el => 
                      <option
                        key= { el.value }
                        value= { el.value }
                      > { el.text } </option>
                    )}
                  </CSelect>
                  <CFormText className="help-block">Определяет, какая информация будет собрана из источника</CFormText>
                </CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CCard>
              <CCardHeader>
                Настройка сбора информации
              </CCardHeader>
              <CCardBody>
                <CFormGroup>
                    <CLabel htmlFor="rss-link">RSS Ссылка</CLabel>
                    <CInput id="rss-link" name="rss-link" placeholder="http:..." />
                    <CFormText className="help-block"></CFormText>
                  </CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>

      <CRow>
        <CCol sm="12">
          <CCard>
            {/* <CCardBody>
              <CButton 
                color="primary"
                size="md"
                variant= "outline"
                onClick = { () => props.saveSource(state.id, state) }
              > { props.source.id === 0 ? 'Добавить источник' : 'Сохранить' } </CButton>
              <CButton 
                color="info"
                size="md"
                variant= "ghost"
                href="/news/sources/"
                // onClick = { loadCategoriesList }
              > Назад </CButton>
            </CCardBody> */}
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}