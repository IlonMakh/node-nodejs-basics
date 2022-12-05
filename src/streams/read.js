import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
	const path = join(__dirname, 'files', 'fileToRead.txt');
	let readStream = createReadStream(path);
	let data = '';
	readStream.on('data', chunk => (data += chunk));
	readStream.on('end', () => process.stdout._write(data));
};

await read();