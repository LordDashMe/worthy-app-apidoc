/**
 * @api {post} /user/login Login
 * @apiGroup User
 * @apiName Login
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
 * @apiBody {String} userName The User's username.
 * @apiBody {String} password The User's password.
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "token": "asdfghjkl..."
 * }
 * 
 * @apiErrorExample {json} Failed-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "message": "Login failed."
 * }
 * @apiErrorExample {json} Empty-Body-Field-Error-Response:
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
