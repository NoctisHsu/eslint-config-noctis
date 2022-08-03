interface Func {
    A: string;
    B: string;
    D: boolean;
}

const asyncAction = (): Promise<unknown> => {
    const promise = new Promise<void>((resolve) => {
        setTimeout(() => {
            console.log('Async is done!');
            resolve();
        }, 1500);
    });
    return promise;
};

asyncAction()
    .then(() => console.log('Resolved!'))
    // Expected catch() or returneslint(promise/catch-or-return)
    .catch((e: Error) => console.log(`error!${e.message}`));
