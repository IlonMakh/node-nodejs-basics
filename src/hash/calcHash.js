import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
	const text = await readFile(join(__dirname, 'files', 'fileToCalculateHashFor.txt'), 'utf-8');
	console.log(createHash('sha256').update(text).digest('hex'));
};

await calculateHash();