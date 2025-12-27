// Path
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/manipulating-files/nodejs-file-paths

// Path methods will not check if the path exists
// On Windows, path methods will change forward slashes into backslashes

import path from "node:path";

// ---------------------------------------------------------------------
// Getting information out of a path
// ---------------------------------------------------------------------

const notes = "/users/joe/notes.txt";

const notesPathInfo = {
  dirname: path.dirname(notes), // /users/joe
  basename: path.basename(notes), // notes.txt
  extname: path.extname(notes), // .txt

  basenameHead: path.basename(notes, path.extname(notes)), // notes
};

for (const key in notesPathInfo) {
  if (!Object.hasOwn(notesPathInfo, key)) continue; // next if the property is inherited, or does not exist

  console.log(`${key}: ${notesPathInfo[key]}`);
}

// ---------------------------------------------------------------------
// Working with paths
// ---------------------------------------------------------------------

console.log(path.resolve("joe.txt")); // path.join(__dirname, file)
console.log(path.resolve("tmp", "joe.txt")); // path.join(__dirname, directory, file)

// Absolute path if it starts with a slash
//
// POSIX: "/etc/joe.txt"
// Windows: `${<currentDriveLetter>}:\etc\joe.txt`

console.log(path.resolve("/etc", "joe.txt"));

// Resolves repeated path separators, '..' and '.' segments
//
// POSIX: "/users/test.txt"
// Windows: "\users\test.txt"

console.log(path.normalize("/users/joe///..//test.txt"));
