export enum CategoryStatus {
  publish   = "PUBLISH",
  inactive  = "INACTIVE",
  deleted   = "DELETED",
  draft     = "DRAFT",
}

export interface ICategory {
  id: number;
  title: string;
  sign: string;
  comment?: string;
  parent?: number;
  status: CategoryStatus;
  children?: ICategory[];
}