const {
    getUsersService,
} = require('../services/usersService.js');

const getUsersController = async (req, res) => {
    try {
        let [usersErr, users] = resolvePromise(
            await getUsersService()
        );
        if(usersErr) {
            console.log('Error in fetching users', usersErr);
            res.status(500).json({
                error: true,
                response: usersErr.message,
            });
        }
        res.status(200).json({
            error: false,
            response: users,
        });
    } catch (error) {
        console.log('Error in getUsersController', error);
        res.status(500).json({
            error: true,
            response: error.message,
        });
    }
};


module.exports = {
    getUsersController,
};