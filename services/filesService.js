const path = require('path');
const fs = require('fs');
const { readdir, stat } = require('fs/promises');
const {resolvePromise} = require('../utils/async.js');

const getFileById = async (fileId) => {
    try {
        let dirName = fileId ? JSON.parse(fileId) : ['root'];
        const directoryPath = path.join(...dirName);
        console.log('directoryPath', directoryPath)
        let [filesErr, files] = await resolvePromise(
            readdir(directoryPath, {
                withFileTypes: true,
            })
        );
        if(filesErr) {
            console.log('Error in fetching files', filesErr);
            throw filesErr;
        }
        const fileDetails = await Promise.all(files.map(async (file) => {
            let detailObj = {
                name: file.name,
            };
            const [fileStatErr, fileStat] = await resolvePromise(
                stat(path.join(directoryPath, file.name))
            );
         
            detailObj.fileType = 'file';
            if(fileStat) {
                detailObj.fileType = fileStat.isFile() ? 'file' : 'directory';
            }
            return detailObj;
        }))
        return fileDetails;
     
    } catch (error) {
        console.log('Error in getFileById', error);
        throw error;
    }
};


module.exports = {
    getFileById,
};