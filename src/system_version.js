/**
 * @api {get} /system/version Version
 * @apiGroup System
 * @apiName Version
 * @apiVersion 1.0.0
 * @apiPermission public
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
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "1.0.0"
 * }
 * 
 * @apiErrorExample {json} No-Default-Header-Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "message": "Invalid request."
 * }
 */
