// import fs module
const fs = require ("fs")
const path = require('path');

// fp or file-property
const fp = {}

// getSize of file
fp.size = function (filename, megabytesOrBytes = true){
    if (!fs.existsSync(filename)){
        return "no file name in current directory"
    }else {

    //                 ^get the file  ^bytesOrMegaBytes? (default bytes)

    // instance object and get the filename
    let stats = fs.statSync(filename)

    //  |
    // \_/ bytesOrMegaBytes? (default bytes)
    //                           (bytes)      (megabytes)
    return (megabytesOrBytes) ? stats.size : stats.size / (1024*1024)}
    
}

// get file name with extension 
fp.name = function(filename, withExtensionOrNo = true){
    // if "no file in current directory"
   if (!fs.existsSync(filename)){
       return "no file name in current directory"
   }else {
    return (withExtensionOrNo) ? filename.replace("./","") : filename.replace("./","").replace(filename.substr(filename.lastIndexOf(".")), "")
   }
}

fp.extension = function(filename){
    if (!fs.existsSync(filename)){
        return "no file name in current directory"
    }else {
        return filename.substr(filename.lastIndexOf("."))
    }
}

fp.location = function (filename){
    if (!fs.existsSync(filename)){
        return "no file name in current directory"
    }else {
        return path.resolve(filename)
    }
}

fp.creationDate = function(filename){
    if (!fs.existsSync(filename)){
        return "no file name in current directory"
    }else {
        return fs.statSync(filename).birthtime
    }
}

module.exports = fp