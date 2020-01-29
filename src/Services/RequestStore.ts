import Logger from './Logger';
import { IRequest } from '../Types/Request';

const fs = window.require !== undefined ? window.require('fs').promises : {};

const defaultPath = './reqs';

const mkdirIfNotExist = async (path: string) => {
  if ((await fs.stat(path)).isDirectory()) {
    return;
  }

  try {
    await fs.mkdir(path, { recursive: true });
  } catch (err) {
    if (err) {
      Logger.error(err);
      throw Error('Unable to create directory');
    }
  }
};

const storeRequest = async (request: IRequest, path: string = defaultPath) => {
  await mkdirIfNotExist(path);
  try {
    const fileName = `${request.name || 'unnamed'}.req.json`;
    await fs.writeFile(`${path}/${fileName}`, JSON.stringify(request));
  } catch (err) {
    Logger.error(err);
    throw Error('Unable to save file');
  }
};

export default storeRequest;
