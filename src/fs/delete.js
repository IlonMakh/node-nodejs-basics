import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
	try {
		await fs.unlink(path.join(__dirname, 'files', 'fileToRemove.txt'));
	} catch {
		console.log('Error FS operation failed');
	}
};

await remove();