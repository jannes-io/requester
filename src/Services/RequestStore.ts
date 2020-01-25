import { promisify } from 'util';
import Logger from './Logger';
import { IRequest } from '../Types/Request';

const fs = window.require('fs');

const defaultPath = './reqs';

const mkdirIfNotExist = async (path: string) => {
  if ((await promisify(fs.stat)(path)).isDirectory()) {
    return;
  }

  try {
    await promisify(fs.mkdir(path, { recursive: true }));
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
    await promisify(fs.writeFile)(`${path}/${request.name || 'unnamed'}.req.json`, JSON.stringify(request));
  } catch (err) {
    Logger.error(err);
    throw Error('Unable to save file');
  }
};

export default storeRequest;
