export = processRequest;
declare function processRequest(request: import("http").IncomingMessage, response: import("http").ServerResponse, options?: ProcessRequestOptions | undefined): Promise<{
    [key: string]: unknown;
} | {
    [key: string]: unknown;
}[]>;
declare namespace processRequest {
    export { GraphQLUpload, FileUpload, FileUploadCreateReadStream, FileUploadCreateReadStreamOptions, ProcessRequestFunction, ProcessRequestOptions };
}
/**
 * {@linkcode ProcessRequestFunction } options.
 */
type ProcessRequestOptions = {
    /**
     * Maximum allowed non file multipart form field
     * size in bytes; enough for your queries. Defaults to `1000000` (1 MB).
     */
    maxFieldSize?: number | undefined;
    /**
     * Maximum allowed file size in bytes. Defaults to
     * `Infinity`.
     */
    maxFileSize?: number | undefined;
    /**
     * Maximum allowed number of files. Defaults to
     * `Infinity`.
     */
    maxFiles?: number | undefined;
};
type GraphQLUpload = import("graphql").GraphQLScalarType<Promise<FileUpload>, never>;
/**
 * File upload details that are only available after the file’s field in the
 * [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec)
 * has begun streaming in.
 */
type FileUpload = {
    /**
     * File name.
     */
    filename: string;
    /**
     * File MIME type. Provided by the client and can’t be
     * trusted.
     */
    mimetype: string;
    /**
     * File stream transfer encoding.
     */
    encoding: string;
    /**
     * A private implementation
     * detail that shouldn’t be used outside
     * [`graphql-upload`](https://npm.im/graphql-upload).
     */
    capacitor: import("fs-capacitor").WriteStream;
    /**
     * Creates a
     * [Node.js readable stream](https://nodejs.org/api/stream.html#readable-streams)
     * of the file’s contents, for processing and storage.
     */
    createReadStream: FileUploadCreateReadStream;
};
/**
 * Creates a
 * [Node.js readable stream](https://nodejs.org/api/stream.html#readable-streams)
 * of an {@link FileUpload uploading file’s} contents, for processing and
 * storage. Multiple calls create independent streams. Throws if called after
 * all resolvers have resolved, or after an error has interrupted the request.
 */
type FileUploadCreateReadStream = (options?: FileUploadCreateReadStreamOptions | undefined) => import("stream").Readable;
/**
 * {@linkcode FileUploadCreateReadStream } options.
 */
type FileUploadCreateReadStreamOptions = {
    /**
     * Specify an encoding for the
     * [`data`](https://nodejs.org/api/stream.html#event-data) chunks to be
     * strings (without splitting multi-byte characters across chunks) instead of
     * Node.js [`Buffer`](https://nodejs.org/api/buffer.html#buffer) instances.
     * Supported values depend on the
     * [`Buffer` implementation](https://github.com/nodejs/node/blob/v18.1.0/lib/buffer.js#L590-L680)
     * and include `utf8`, `ucs2`, `utf16le`, `latin1`, `ascii`, `base64`,
     * `base64url`, or `hex`. Defaults to `utf8`.
     */
    encoding?: string | undefined;
    /**
     * Maximum number of bytes to store in
     * the internal buffer before ceasing to read from the underlying resource.
     * Defaults to `16384`.
     */
    highWaterMark?: number | undefined;
};
/**
 * Processes an incoming
 * [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec).
 */
type ProcessRequestFunction = (request: import("http").IncomingMessage, response: import("http").ServerResponse, options?: ProcessRequestOptions | undefined) => Promise<{
    [key: string]: unknown;
} | {
    [key: string]: unknown;
}[]>;
