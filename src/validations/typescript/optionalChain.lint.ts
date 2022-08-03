/* eslint-disable @typescript-eslint/no-unused-vars */
type T = {
    a?: {
        b?: {
            c: string;
            method?: () => void;
        };
    };
};
/**
 * myFunc
 *
 * @param foo
 * @returns string | un
 */
function myFunc(foo: T | null): string | undefined {
    return foo?.a?.b?.c;
}
// is roughly equivalent to
/**
 * @param foo
 */
function myFunc2(foo: T | null): string | null | undefined {
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    return foo && foo.a && foo.a.b && foo.a.b.c;
}
