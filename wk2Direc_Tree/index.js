const fs = require('fs')
const path = require('path')

// ## Method 1

const searchAndRead =  (directory) => {
    fs.opendir(directory, (err, dirData) => {       // assynchronously
        if (err) {
            console.log(err);
            return;
        }
        // console.log(dirData.path)
        let isFilesThere = true;
        while (isFilesThere) {
            let openedFile = dirData.readSync();
            if (openedFile) {
                // const contentPath = path.join(path.dirname(dirPath1), openedFile.name)
                const contentPath2 = directory + "/" + openedFile.name;
                console.log(openedFile.name);
                console.log(path.extname(openedFile.name) ? "This is a file" : "This is a dir")
                // console.log(contentPath)
                // if (fs.statSync(contentPath2).isDirectory()) {  // method 1 to check if it is a file or directory
                //     searchAndRead(contentPath2);
                // }
                if (!path.extname(openedFile.name)) { // method 2 to check if it is a file or directory
                    searchAndRead(contentPath2);
                }
                // console.log(fs.statSync(contentPath).isDirectory() ? "This is a directory" : "This is a file")
            }
            else {
                isFilesThere = false;
            }
        }
    })
}
const direcTree = dir => {
    const dirPath1 = path.join(__dirname, dir);
    console.log(dirPath1)
    // const openedDir = fs.opendirSync(dirPath1); // synchronously
    searchAndRead(dirPath1);
}




// const searchAndRead = (directory) => {
//     fs.opendir(directory, (err, dirData) => {       // assynchronously
//         if (err) {
//             console.log(err);
//             return;
//         }
//         // console.log(dirData.path)
//         let isFilesThere = true;
//         while (isFilesThere) {
//             dirData.read((err, openedFile) => {
//                 if (err) {
//                     console.log(err);
//                     dirData.close()
//                     return;
//                 }
//                 if (openedFile) {
//                     // const contentPath = path.join(path.dirname(dirPath1), openedFile.name)
//                     const contentPath2 = directory + "/" + openedFile.name;
//                     console.log(openedFile.name);
//                     console.log(path.extname(openedFile.name) ? "This is a file" : "This is a dir")
//                     dirData.close()
//                     // console.log(contentPath)
//                     // if (fs.statSync(contentPath2).isDirectory()) {  // method 1 to check if it is a file or directory
//                     //     searchAndRead(contentPath2);
//                     // }
//                     if (!path.extname(openedFile.name)) { // method 2 to check if it is a file or directory
//                         searchAndRead(contentPath2);
//                         dirData.close()
//                     }
//                     // console.log(fs.statSync(contentPath).isDirectory() ? "This is a directory" : "This is a file")
//                 }
//                 else {
//                     isFilesThere = false;
//                 }
//             });
//         }
//     })
// }
// const direcTree = dir => {
//     const dirPath1 = path.join(__dirname, dir);
//     console.log(dirPath1)
//     // const openedDir = fs.opendirSync(dirPath1); // synchronously
//     searchAndRead(dirPath1);
// }


direcTree('./dir_tree')