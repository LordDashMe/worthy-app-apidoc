/**
 * @api {post} /user Registration
 * @apiGroup User
 * @apiName Registration
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
 * # Request Body
 * {
 *   "userName": "john.doe",
 *   "password": "P@ssw0rd!"
 * }
 * 
 * @apiHeader {String} Content-Type The default content type for worthy app is "application/json".
 * @apiHeader {String} X-WORTHY-APP-HEADER Default header of worthy app.
 * 
 * @apiBody {String} userName The unique id of the User.
 * @apiBody {String} password The User password.
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Successfully registered."
 * }
 * 
 * @apiErrorExample {json} Failed-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "message": "Registration failed."
 * }
 * @apiErrorExample {json} Empty-Field-Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "message": "The username or password is empty."
 * }
 * @apiErrorExample {json} No-Default-Header-Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "message": "Invalid request."
 * }
 */
