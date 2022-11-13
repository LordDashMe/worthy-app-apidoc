/**
 * @api {get} /data-source/:system_name/entry?offset=0&items=50&orderFieldSystemName=createdAt&orderBy=DESC Data Source Entries
 * @apiGroup DataSource
 * @apiName Entries
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
 * @apiQuery {Number} [offset] The entries offset.
 * @apiQuery {Number} [items] The total items to be fetch.
 * @apiQuery {String} [orderFieldSystemName] The field to be use for ordering.
 * @apiQuery {String} [orderBy] The entries to be order by either descending (DESC) or ascending (ASC).
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "label": "Tokyo Tokyo",
 *     "type": "sundries",
 *     "cost": 150.00,
 *     "date": "2020-05-03"
 *   },
 *   ...
 * ]
 * 
 * @apiErrorExample {json} Failed-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "message": "Failed getting the data source entries."
 * }
 * @apiErrorExample {json} No-Default-Header-Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "message": "Invalid request."
 * }
 */
