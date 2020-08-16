import { EParsingFilter, EParsingType, ESourceStatus } from "../../entities/news-source"

export const parseSourceStatus = (
  status: ESourceStatus
) => {
  switch (status) {
    case ESourceStatus.publish : 
      return {
        color: 'success',
        text: 'Активный',
      }
    case ESourceStatus.inactive:
      return {
        color: 'warning',
        text: 'Не активный',
      }
    case ESourceStatus.deleted:
      return {
        color: 'danger',
        text: 'Удален',
      }
    default: 
      return {
        color: 'danger',
        text: 'Ошибка',
      }
  }
}

export const parseParsingType = (
  status: EParsingType
) => {
  switch (status) {
    case EParsingType.rss : 
      return {
        color: 'inactive',
        text: 'RSS',
      }
    case EParsingType.html:
      return {
        color: 'inactive',
        text: 'HTML',
      }
    default: 
      return {
        color: 'danger',
        text: 'Ошибка',
      }
  }
}

export const parseParsingFilter = (
  status: EParsingFilter
) => {
  switch (status) {
    case EParsingFilter.full : 
      return {
        color: 'primary',
        text: 'Полный',
      }
    case EParsingFilter.onlyAnnotation:
      return {
        color: 'info',
        text: 'Только аннотация',
      }
      case EParsingFilter.onlyText:
        return {
          color: 'info',
          text: 'Только текст',
        }
    default: 
      return {
        color: 'inactive',
        text: 'Другой',
      }
  }
}

export const getInfoSourceStatus: Array< { value: string, text: string } > = [
  {
    value: ESourceStatus.publish,
    text: 'Активный',
  }, {
    value: ESourceStatus.inactive,
    text: 'Не активный',
  }, {
    value: ESourceStatus.deleted,
    text: 'Удален',
  }
]

export const getInfoParsingFilter: Array< { value: string, text: string } > = [
  {
    value: EParsingFilter.full,
    text: 'Полный',
  }, {
    value: EParsingFilter.onlyAnnotation,
    text: 'Только аннотация',
  }, {
    value: EParsingFilter.onlyText,
    text: 'Только текст',
  }
]