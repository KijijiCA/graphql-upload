/**
 * Converts a Node.js readable stream to a string.
 * @param {import("stream").Readable} stream Node.js readable stream.
 * @returns {Promise<string>} Resolves the final string.
 */
export default function streamToString(stream: import("stream").Readable): Promise<string>;
