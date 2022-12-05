const parseEnv = () => {
    const variables = Object.entries(process.env).filter(([key]) => key.match(/RSS_/));
	const string = variables.map(el => el.join('=')).join('; ');
	console.log(string);
};

parseEnv();