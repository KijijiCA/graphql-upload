export = graphqlUploadKoa;
/**
 * Creates [Koa](https://koajs.com) middleware that processes incoming
 * [GraphQL multipart requests](https://github.com/jaydenseric/graphql-multipart-request-spec)
 * using {@linkcode processRequest}, ignoring non multipart requests. It sets
 * the request `body` to be similar to a conventional GraphQL POST request for
 * following GraphQL middleware to consume.
 * @param {import("./processRequest.js").ProcessRequestOptions & {
 *   processRequest?: import("./processRequest.js").ProcessRequestFunction
 * }} options Options.
 * @returns Koa middleware.
 * @example
 * Basic [`graphql-api-koa`](https://npm.im/graphql-api-koa) setup:
 *
 * ```js
 * const Koa = require("koa");
 * const bodyParser = require("koa-bodyparser");
 * const { errorHandler, execute } = require("graphql-api-koa");
 * const graphqlUploadKoa = require("graphql-upload/graphqlUploadKoa.js");
 * const schema = require("./schema.js");
 *
 * new Koa()
 *   .use(errorHandler())
 *   .use(bodyParser())
 *   .use(graphqlUploadKoa({ maxFileSize: 10000000, maxFiles: 10 }))
 *   .use(execute({ schema }))
 *   .listen(3000);
 * ```
 */
declare function graphqlUploadKoa({ processRequest, ...processRequestOptions }?: import("./processRequest.js").ProcessRequestOptions & {
    processRequest?: import("./processRequest.js").ProcessRequestFunction;
}): (ctx: import("koa").ParameterizedContext, next: () => Promise<unknown>) => Promise<unknown>;
