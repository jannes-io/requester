// fs wrapper that doesn't crash web for debugging styles
import * as R from 'ramda';
import Logger from './Logger';

const fs = window.require !== undefined ? window.require('fs').promises : {};

export const mkdirIfNotExist = async (path: string) => {
  try {
    await fs.mkdir(path, { recursive: true });
  } catch (err) {
    if (err.code === 'EEXIST') {
      return;
    }
    Logger.error(err);
    throw Error('Unable to create directory');
  }
};

export const writeFile = async (path: string, data: string | object) => {
  try {
    await mkdirIfNotExist(R.init(path.split('\\')).join('\\'));
    const content = typeof data === 'object' ? JSON.stringify(data) : data;
    await fs.writeFile(path, content);
  } catch (err) {
    Logger.error(err);
    throw Error('Unable to write file');
  }
};

export const readFile = async (path: string) => {
  try {
    return await fs.readFile(path);
  } catch (err) {
    Logger.error(err);
    throw Error('Unable to read file');
  }
};

export default {
  mkdirIfNotExist,
  writeFile,
  readFile,
};
