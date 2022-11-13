/**
 * @api {get} /data-source/:system_name Data Source Details
 * @apiGroup DataSource
 * @apiName Details
 * @apiVersion 1.0.0
 * @apiPermission authenticated user
 * 
 * @apiExample {json} Request-Example:
 * # Header
 * {
 *   "Content-Type": "application/json",
 *   "X-WORTHY-APP-HEADER": 1
 * }
 * 
 * @apiHeader {String} Content-Type The default content type for worthy app is "application/json".
 * @apiHeader {String} X-WORTHY-APP-HEADER Default header of worthy app.
 * 
 * @apiParam {String} system_name The system name of the data source.
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "system_name": "expenses",
 *   ...
 * }
 * 
 * @apiErrorExample {json} Failed-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "message": "Failed getting the data source details."
 * }
 * @apiErrorExample {json} Parameter-Missing-Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "message": "Missing request parameter(s)."
 * }
 * @apiErrorExample {json} No-Default-Header-Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "message": "Invalid request."
 * }
 */
