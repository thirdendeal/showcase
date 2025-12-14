// Environment Variables
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs

// ---------------------------------------------------------------------
// Reading environment variables
// ---------------------------------------------------------------------

// The process' env property hosts all environment variables set at the process start
//
// Bash: USER_ID=239482 USER_KEY=foobar node ...
// PowerShell: $env:USER_ID = 239482; $env:USER_KEY = "foobar"; node ...

// Note that process does not need to be imported, it is a global object in Node.js

console.log(process.env.USER_ID); // "239482"
console.log(process.env.USER_KEY); // "foobar"

// ---------------------------------------------------------------------
// Loading .env files through the command-line wit --env-file
// ---------------------------------------------------------------------

// The --env-file flag loads all the environment variables from a .env file
// Making them available to the application on process.env
//
// Also, you can pass multiple --env-file arguments
// Subsequent files override pre-existing variables defined in previous files
//
// The --env-file-if-exists flag avoids throwing an error if the file is missing
//
// Variables from the environment take precedence over those from any file

console.log(process.env.PORT); // 3000, if --env-file .env, otherwise undefined

// ---------------------------------------------------------------------
// Loading .env files programmatically with process.loadEnvFile(path)
// ---------------------------------------------------------------------

// loadEnvFile won't override --env-file set variables

process.loadEnvFile(`${__dirname}/.development.env`);

console.log(process.env.PORT); // 5500, if --env-file .env 3000
console.log(process.env.DEVELOPMENT_SECRET); // 42
