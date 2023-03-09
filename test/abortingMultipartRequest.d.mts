/**
 * Sends a multipart request that deliberately aborts after a certain amount of
 * data has been uploaded to the server, for testing purposes.
 * @param {string} url The request URL.
 * @param {FormData} formData A `FormData` instance for the request body.
 * @param {string} abortMarker A unique character in the request body that marks
 *   where to abort the request.
 * @param {Promise<void>} requestReceived Resolves once the request has been
 *   received by the server request handler.
 * @returns {Promise<void>} Resolves once the request aborts.
 */
export default function abortingMultipartRequest(url: string, formData: FormData, abortMarker: string, requestReceived: Promise<void>): Promise<void>;
