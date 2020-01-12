import { IHeader } from './Request';

export interface IResponse {
  ok: boolean;
  status: number;
  statusText: string;
  headers: IHeader[];
  body?: string;
}
