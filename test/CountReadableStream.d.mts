/**
 * A count readable stream, for testing purposes.
 * @see [Example counting stream in the Node.js docs](https://nodejs.org/api/stream.html#an-example-counting-stream).
 */
export default class CountReadableStream extends Readable {
    _max: number;
    _index: number;
    _read(): void;
}
import { Readable } from "stream";
