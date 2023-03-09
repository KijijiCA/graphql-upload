/// <reference types="node" resolution-mode="require"/>
/**
 * Starts a Node.js HTTP server.
 * @param {import("http").Server} server Node.js HTTP server.
 * @returns Resolves the port the server is listening on, and a server close
 *   function.
 */
export default function listen(server: import("http").Server): Promise<{
    port: number;
    close: () => import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
}>;
