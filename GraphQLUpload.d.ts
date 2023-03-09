export = GraphQLUpload;
/** @typedef {import("./processRequest").FileUpload} FileUpload */
/**
 * A GraphQL `Upload` scalar that can be used in a
 * [`GraphQLSchema`](https://graphql.org/graphql-js/type/#graphqlschema). It’s
 * value in resolvers is a promise that resolves
 * {@link FileUpload file upload details} for processing and storage.
 * @example
 * A schema built using
 * [`makeExecutableSchema`](https://www.graphql-tools.com/docs/api/modules/schema_src#makeexecutableschema)
 * from [`@graphql-tools/schema`](https://npm.im/@graphql-tools/schema):
 *
 * ```js
 * const { makeExecutableSchema } = require("@graphql-tools/schema");
 * const GraphQLUpload = require("graphql-upload/GraphQLUpload.js");
 *
 * const schema = makeExecutableSchema({
 *   typeDefs: `
 *     scalar Upload
 *   `,
 *   resolvers: {
 *     Upload: GraphQLUpload,
 *   },
 * });
 * ```
 * @example
 * A manually constructed schema with an image upload mutation:
 *
 * ```js
 * const { GraphQLSchema, GraphQLObjectType, GraphQLBoolean } = require("graphql");
 * const GraphQLUpload = require("graphql-upload/GraphQLUpload.js");
 *
 * const schema = new GraphQLSchema({
 *   mutation: new GraphQLObjectType({
 *     name: "Mutation",
 *     fields: {
 *       uploadImage: {
 *         description: "Uploads an image.",
 *         type: GraphQLBoolean,
 *         args: {
 *           image: {
 *             description: "Image file.",
 *             type: GraphQLUpload,
 *           },
 *         },
 *         async resolve(parent, { image }) {
 *           const { filename, mimetype, createReadStream } = await image;
 *           const stream = createReadStream();
 *           // Promisify the stream and store the file, then…
 *           return true;
 *         },
 *       },
 *     },
 *   }),
 * });
 * ```
 */
declare const GraphQLUpload: GraphQLScalarType<Promise<import("./processRequest").FileUpload>, never>;
declare namespace GraphQLUpload {
    export { FileUpload };
}
import { GraphQLScalarType } from "graphql";
type FileUpload = import("./processRequest").FileUpload;
