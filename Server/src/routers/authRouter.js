const router = require("express").Router();
const authController = require("../controllers/authController");

/**
 * @openapi
 * /signup:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       description: User signup details
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid request
 */

router.post("/signup", authController.signupController);

/**
 * @openapi
 * /login:
 *   post:
 *     summary: Log in a user
 *     requestBody:
 *       description: User login credentials
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Unauthorized
 */
router.post("/login", authController.loginController);
router.get("/refresh", authController.refreshAccessTokenController);
router.post("/logout", authController.logoutController);

module.exports = router;
