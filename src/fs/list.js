import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
	try {
		const files = await readdir(__dirname);
		console.log(files);
	} catch {
		console.log('Error FS operation failed');
	}
};

await list();