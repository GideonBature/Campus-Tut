/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication and authorization
 */

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - department
 *               - courseOfStudy
 *               - level
 *               - role
 *             properties:
 *               id:
 *                 type: string
 *                 description: The auto-generated id of the user
 *               name:
 *                 type: string
 *                 description: The name of the user
 *               email:
 *                 type: string
 *                 description: The email of the user
 *               password:
 *                 type: string
 *                 description: The password of the user
 *               department:
 *                 type: string
 *                 description: The department of the user
 *               courseOfStudy:
 *                 type: string
 *                 description: The course of study of the user
 *               level:
 *                 type: string
 *                 description: The level of the user
 *               role:
 *                 type: string
 *                 description: The role of the user (tutor or learner)
 *               created_at:
 *                 type: string
 *                 description: The timestamp when the user was created
 *               updated_at:
 *                 type: string
 *                 description: The timestamp when the user was updated
 *             example:
 *               name: John Doe
 *               email: john.doe@example.com
 *               password: "password"
 *               department: Engineering
 *               courseOfStudy: Software Engineering
 *               level: 300
 *               role: tutor
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: The message returned
 *              example:
 *                message: "User registered successfully"
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email of the user
 *               password:
 *                 type: string
 *                 description: The password of the user
 *             example:
 *               email: john.doe@example.com
 *               password: "password"
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  token:
 *                    type: string
 *                    description: JWT token
 *              example:
 *                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
