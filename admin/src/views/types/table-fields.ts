export interface ITableFields {
  titles: {
    key: string,
    label: string,
    sorter?: boolean,
    filter?: boolean
  }[]
}