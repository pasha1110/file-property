const fp = require("./index")

// fp object
console.log(fp)
// get file size
console.log(fp.size("./test.txt"))

// get file size (in megabytes)
console.log(fp.size("./test.txt",false))

// get file name
console.log(fp.name("./test.txt"))

// get file name (without extension)
console.log(fp.name("./test.txt",false))

// get file extension
console.log(fp.extension("./test.txt"))

// get file location 
console.log(fp.location("./test.txt"))

// get create date of file
console.log(fp.creationDate("./test.txt"))