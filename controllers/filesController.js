const filesService = require('../services/filesService.js');
const {resolvePromise} = require('../utils/async.js');

const getFileById = async (req, res) => {
    try {
        let fileId = req.query.id;
        let [filesErr, files] = await resolvePromise(
            filesService.getFileById(fileId)
        );
        if(filesErr) {
            console.log('Error in fetching users', filesErr);
            res.status(500).json({
                error: true,
                response: filesErr.message,
            });
        }
        res.status(200).json({
            error: false,
            response: files,
        });
    } catch (error) {
        console.log('Error in getFileById', error);
        res.status(500).json({
            error: true,
            response: error.message,
        });
    }
};


module.exports = {
    getFileById,
};