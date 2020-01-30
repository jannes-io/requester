import { IRequest } from '../Types/Request';
import { writeFile, readFile } from './FS';
import { IProject } from '../Types/Project';

const defaultPath = './reqs';
const fileType = 'req.json';

const storeRequest = async (request: IRequest, path: string = defaultPath) => {
  const fileName = `${request.name || 'unnamed'}.req.json`;
  await writeFile(`${path}/${fileName}`, JSON.stringify(request));
};

export const createProject = async (project: IProject) => {
  await writeFile(`${project.location}\\requester\\project.${fileType}`, project);
};

export const openProject = async (path: string): Promise<IProject> => {
  const json = await readFile(`${path}\\requester\\project.req.json`);

  return { ...JSON.parse(json), location: path };
};

export default storeRequest;
