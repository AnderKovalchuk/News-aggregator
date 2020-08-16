export enum EMessageType {
  ERR_HTTP = "ERR_HTTP"
}
export interface IMessage {
  type: string,
  message: string,
  time: any,
}