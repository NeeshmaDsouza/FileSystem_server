const resolvePromise = async(promise) => {
    try{
        result = await promise;
        return [null, result];
    } catch (error) {
        return [error, null];
    }
}

module.exports = {
    resolvePromise,
}