import { join } from 'path';
import { mkdir, readdir, copyFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const homePath = join(__dirname, 'files');
const destPath = join(__dirname, 'files_copy');

const copy = async () => {
	try {
		const dir = await readdir(homePath, { withFileTypes: true });
		await mkdir(join(__dirname, 'files_copy'));
		dir.forEach(file => {
			copyFile(join(homePath, file.name), join(destPath, file.name));
		});
	} catch {
		console.error('Error FS operation failed');
	}
};

await copy();