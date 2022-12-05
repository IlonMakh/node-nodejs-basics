import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { stdout, stdin, exit } from "process";

const write = async () => {
  const path = join(__dirname, "files", "fileToWrite.txt");
  const writableStream = createWriteStream(path);

  const bye = (text) => {
    writableStream.write(text);
    stdout.write("\nGoodbye!\n");
    exit();
  };

  stdout.write("Type something: ");

  let text = "";

  stdin.on("data", (data) => {
    text += data.toString();
    if (text.length > 5) {
      bye(text);
    }
  });
};

await write();
