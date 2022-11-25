const fs = require('fs')
const path = require('path')

/// ## Method 1 - Synchronous execution

const searchAndRead = (directory, i = 0, sign='├──') => {
    let j = 0;
    let indent = " "
    while (j < i) {
        indent += indent;
        j++;
    }
    let newSign = indent + sign

    const openedDir = fs.opendirSync(directory);
    let isFilesThere = true;
    while (isFilesThere) {
        let openedFile = openedDir.readSync();
        if (openedFile) {
            const contentPath2 = directory + "/" + openedFile.name;
            console.log(newSign, openedFile.name);

            if (fs.statSync(contentPath2).isDirectory()) {  // method 1 to check if it is a file or directory
                searchAndRead(contentPath2, i + 1, '  └───');
            }
            // if (!path.extname(openedFile.name)) { // method 2 to check if it is a file or directory
            //     searchAndRead(contentPath2, i+1, '  └───');
            // }
        }
        else {
            isFilesThere = false;
        }
    }
}


const direcTree = dir => {
    const dirPath1 = path.parse(dir).root === 'C:/' ?
        dir : path.join(__dirname, dir);
    // const dirPath1 = dir
    console.log(path.basename(dirPath1))
    searchAndRead(dirPath1);
}

direcTree('./dir_tree')



/// ## Method 2 - Assynchronous execution

// const searchAndRead = (directory, i = 0, sign = '├──') => {
//     let j = 0;
//     let indent = " "
//     while (j < i) {
//         indent += indent;
//         j++;
//     }
//     let newSign = indent + sign;

//     fs.opendir(directory, (err, dirData) => {       // assynchronously
//         if (err) {
//             console.log(err);
//             return;
//         }
//         // console.log(dirData.path)
//         let isFilesThere = true;
//         while (isFilesThere) {
//             let openedFile = dirData.readSync();
//             if (openedFile) {
//                 // const contentPath = path.join(path.dirname(dirPath1), openedFile.name)
//                 const contentPath2 = directory + "/" + openedFile.name;
//                 console.log(newSign, openedFile.name, i);
//                 console.log(path.extname(openedFile.name) ? "This is a file" : "This is a dir")
//                 // console.log(contentPath)
//                 // if (fs.statSync(contentPath2).isDirectory()) {  // method 1 to check if it is a file or directory
//                 //     searchAndRead(contentPath2, i+1, '  └───');
//                 // }
//                 if (!path.extname(openedFile.name)) { // method 2 to check if it is a file or directory
//                     searchAndRead(contentPath2, i + 1, '  └───');
//                 }
//                 // console.log(fs.statSync(contentPath).isDirectory() ? "This is a directory" : "This is a file")
//             }
//             else {
//                 isFilesThere = false;
//             }
//         }
//     })
// }
