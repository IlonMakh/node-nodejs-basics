import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
	try {
		fs.rename(path.join(__dirname, 'files', 'wrongFilename.txt'), path.join(__dirname, 'files', 'properFilename.md'));
	} catch {
		console.error('Error FS operation failed');
	}
};

await rename();