const parseArgs = () => {
    const argsString = process.argv.map(arg => `propName is ${arg}`).join(', ');
	console.log(argsString);
};

parseArgs();