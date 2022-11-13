/**
 * @api {post} /data-source/:system_name/entry Data Source Entry Creation
 * @apiGroup DataSource
 * @apiName EntryCreation
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
 * # Request Body
 * {
 *   "label": "Tokyo Tokyo",
 *   "type": "sundries",
 *   "cost": 150.00,
 *   "date": "2020-05-03"
 * }
 * 
 * @apiHeader {String} Content-Type The default content type for worthy app is "application/json".
 * @apiHeader {String} X-WORTHY-APP-HEADER Default header of worthy app.
 * 
 * @apiParam {String} system_name The system name of the data source.
 * 
 * @apiBody {Object} fields The data source fields key-value pair.
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Data source entry successfully saved."
 * }
 * 
 * @apiErrorExample {json} Failed-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "message": "Saving data source entry failed."
 * }
 * @apiErrorExample {json} Invalid-Body-Content-Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "message": "Request body content is invalid."
 * }
 * @apiErrorExample {json} No-Default-Header-Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "message": "Invalid request."
 * }
 */
