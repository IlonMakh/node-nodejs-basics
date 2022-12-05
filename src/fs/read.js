import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
	try {
		const text = await readFile(join(__dirname, 'files', 'fileToRead.txt'), 'utf-8');
		console.log(text);
	} catch {
		console.error('Error FS operation failed');
	}
};

await read();