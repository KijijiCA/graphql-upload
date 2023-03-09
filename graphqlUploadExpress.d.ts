export = graphqlUploadExpress;
/**
 * Creates [Express](https://expressjs.com) middleware that processes incoming
 * [GraphQL multipart requests](https://github.com/jaydenseric/graphql-multipart-request-spec)
 * using {@linkcode processRequest}, ignoring non multipart requests. It sets
 * the request `body` to be similar to a conventional GraphQL POST request for
 * following GraphQL middleware to consume.
 * @param {import("./processRequest.js").ProcessRequestOptions & {
 *   processRequest?: import("./processRequest.js").ProcessRequestFunction
 * }} options Options.
 * @returns Express middleware.
 * @example
 * Basic [`express-graphql`](https://npm.im/express-graphql) setup:
 *
 * ```js
 * const express = require("express");
 * const graphqlHTTP = require("express-graphql");
 * const graphqlUploadExpress = require("graphql-upload/graphqlUploadExpress.js");
 * const schema = require("./schema.js");
 *
 * express()
 *   .use(
 *     "/graphql",
 *     graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
 *     graphqlHTTP({ schema })
 *   )
 *   .listen(3000);
 * ```
 */
declare function graphqlUploadExpress({ processRequest, ...processRequestOptions }?: import("./processRequest.js").ProcessRequestOptions & {
    processRequest?: import("./processRequest.js").ProcessRequestFunction;
}): (request: import("express").Request, response: import("express").Response, next: import("express").NextFunction) => void;
