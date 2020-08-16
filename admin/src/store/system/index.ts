import { ISystemState as  InterfaceSystemState} from './_state.types';
export { SystemActionsDictionary } from './_actions.dictionary';
export type ISystemState = InterfaceSystemState;
export { systemReducer } from './_reducer';