import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
	try {
		await fs.access(pathToFile, fs.constants.F_OK);
		console.error('Error FS operation failed');
	} catch {
		fs.writeFile(pathToFile, 'I am fresh and young');
	}
};

await create();