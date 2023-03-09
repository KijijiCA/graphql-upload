export = Upload;
/** @typedef {import("./GraphQLUpload.js")} GraphQLUpload */
/** @typedef {import("./processRequest.js")} processRequest */
/**
 * A file expected to be uploaded as it was declared in the `map` field of a
 * [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec).
 * The {@linkcode processRequest} function places references to an instance of
 * this class wherever the file is expected in the GraphQL operation. The scalar
 * {@linkcode GraphQLUpload} derives it’s value from {@linkcode Upload.promise}.
 */
declare class Upload {
    /**
     * Promise that resolves file upload details. This should only be utilized
     * by {@linkcode GraphQLUpload}.
     * @type {Promise<import("./processRequest.js").FileUpload>}
     */
    promise: Promise<import("./processRequest.js").FileUpload>;
    /**
     * Resolves the upload promise with the file upload details. This should
     * only be utilized by {@linkcode processRequest}.
     * @param {import("./processRequest.js").FileUpload} file File upload
     *   details.
     */
    resolve: (file: import("./processRequest.js").FileUpload) => void;
    /**
     * The file upload details, available when the
     * {@linkcode Upload.promise} resolves. This should only be utilized by
     * {@linkcode processRequest}.
     * @type {import("./processRequest.js").FileUpload | undefined}
     */
    file: import("./processRequest.js").FileUpload | undefined;
    /**
     * Rejects the upload promise with an error. This should only be
     * utilized by {@linkcode processRequest}.
     * @param {Error} error Error instance.
     */
    reject: (reason?: any) => void;
}
declare namespace Upload {
    export { GraphQLUpload, processRequest };
}
type GraphQLUpload = import("graphql").GraphQLScalarType<Promise<import("./processRequest.js").FileUpload>, never>;
type processRequest = typeof import("./processRequest.js");
