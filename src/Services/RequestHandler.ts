import * as R from 'ramda';
import { IHeader, IRequest } from '../Types/Request';
import { IResponse } from '../Types/Response';

async function sendRequest(request: IRequest): Promise<IResponse> {
  const reqHeaders = new Headers();
  request.headers.forEach(({ key, value }) => reqHeaders.append(key, value));

  const res = await fetch(request.url, {
    headers: reqHeaders,
    method: request.method,
    credentials: 'include',
    cache: 'no-cache',
  });

  const responseHeaders: IHeader[] = [];
  res.headers.forEach((value, key) => responseHeaders.push({ key, value }));

  return {
    ...R.pick(['ok', 'status', 'statusText'], res),
    headers: responseHeaders,
    body: await res.text(),
  };
}

export default { sendRequest };
