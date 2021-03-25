# file-property
get property of file. <br><br>

## introduction
This package will help you get the properties of a file, this package has several functions such as *`name`,` size`, `extension`,` location`, `creationDate`*.

## installation

before you use this package it must first be installed with:
> npm install file-property.

<br>

## usage
```javascript
const fp = require("file-property")

// your code goes here...
```

## fast documentation
the following are some of the functions available:

1. `fp.name`:

    taking the name of a file, this function has 2 parameters, namely:

    1. `filename`: // file name.

    2. `withExtensionOrNo`: // filename with extension? (default true)

    3. example:
        `example.js`:
        ```javascript
        // get file name
        console.log(fp.name("./test.txt"))

        // get file name (without extension)
        console.log(fp.name("./test.txt",false))
        ```
    <br>

2. `fp.size`:

    taking the size of a file, this function has 2 parameters, namely:

   1. `filename`: // filename

   2. `megabytesOrBytes`: // megabytes or bytes? default bytes (true)

   3. example:
         example.js:
        ```javascript
        // get file size (in bytes)
        console.log(fp.size("./test.txt"))

        // get file size (in megabytes)
        console.log(fp.size("./test.txt",false))
        ```
    <br>

3. `fp.extension`:

    taking the extension of a file, this function has 1 parameters, namely:

   1. `filename`: // filename

   2. example:
         `example.js`:
        ```javascript
        // get file extension 
        console.log(fp.extension("./test.txt"))
        ```
    <br>

4. `fp.location`:

    taking the location of a file, this function has 1 parameters, namely:

   1. `filename`: // filename

   2. example:
         `example.js`:
        ```javascript
        // get file location 
        console.log(fp.location("./test.txt"))
        ```
    <br>

5. `fp.creationDate`:

    taking the creation date of a file, this function has 1 parameters, namely:

   1. `filename`: // filename

   2. example:
         `example.js`:
        ```javascript
        // get create date of file
        console.log(fp.creationDate("./test.txt"))
        ```
    <br>

## conclusion
that's the file-property documentation
thank you for reading