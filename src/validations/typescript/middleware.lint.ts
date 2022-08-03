const testMiddleware = (req, res, next): Promise<unknown> => {
    return Promise.resolve(req)
        .then((result) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            res.send(result);
            // Avoid calling back inside of a promise.eslint(promise/no-callback-in-promise)
            // and except "next" funcion

            return next();
        })
        .catch(next());
};
module.exports = testMiddleware;
