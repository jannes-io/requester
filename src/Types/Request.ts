export interface IHeader {
  key: string;
  value: string;
}

export interface IRequestHeader extends IHeader{
  id: number;
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
  'OPTIONS';

export interface IRequest {
  name: string;
  description: string;
  method: Method;
  url: string;
  headers: IRequestHeader[];
  body?: string;
}

const createNewRequest = (): IRequest => ({
  name: '',
  description: '',
  method: 'GET',
  url: 'http://localhost/echo-api/',
  headers: [],
});

export default createNewRequest;
