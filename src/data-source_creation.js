/**
 * @api {post} /data-source Data Source Creation
 * @apiGroup DataSource
 * @apiName Creation
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
 *   "name": "Expenses",
 *   "fields": [
 *     {
 *       "name": "label",
 *       "dataType": "string"
 *     },
 *     {
 *       "name": "type",
 *       "dataType": "string"
 *     },
 *     {
 *       "name": "cost",
 *       "dataType": "number"
 *     },
 *     {
 *       "name": "date",
 *       "dataType": "date"
 *     }
 *   ]
 * }
 * 
 * @apiHeader {String} Content-Type The default content type for worthy app is "application/json".
 * @apiHeader {String} X-WORTHY-APP-HEADER Default header of worthy app.
 * 
 * @apiBody {String} name The data source name.
 * @apiBody {Array[Object]} fields The data source fields array of object.
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Data source successfully saved."
 * }
 * 
 * @apiErrorExample {json} Failed-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "message": "Saving data source failed."
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
