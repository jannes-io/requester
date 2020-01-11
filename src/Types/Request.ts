export interface IHeader {
  id: number;
  key: string;
  value: string;
  enabled: boolean;
}

// RFC 7231 & 5789
export type Method =
  'GET' |
  'HEAD' |
  'POST' |
  'PUT' |
  'PATCH' |
  'DELETE' |
  'CONNECT' |
  'OPTIONS' |
  'TRACE';

export interface IRequest {
  name: string;
  description: string;
  method: Method;
  url: string;
  headers: IHeader[];
  body?: string;
}
