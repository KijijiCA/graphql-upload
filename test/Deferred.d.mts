/**
 * A deferred promise that can be externally resolved or rejected.
 * @template [Resolves=void] What the promise resolves.
 */
export default class Deferred<Resolves = void> {
    /** The promise. */
    promise: Promise<Resolves>;
    /** Resolves the promise. */
    resolve: (value: Resolves | PromiseLike<Resolves>) => void;
    /** Rejects the promise. */
    reject: (reason?: any) => void;
}
