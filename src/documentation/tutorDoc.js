/**
 * @swagger
 * tags:
 *   name: Tutors
 *   description: Tutor management
 */

/**
 * @swagger
 * /api/tutors:
 *   get:
 *     summary: Get all tutors
 *     tags: [Tutors]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all tutors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tutor'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/tutors:
 *   post:
 *     summary: Create a new tutor
 *     tags: [Tutors]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tutor'
 *     responses:
 *       201:
 *         description: Tutor created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutor'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/tutors/{id}:
 *   get:
 *     summary: Get a tutor by ID
 *     tags: [Tutors]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tutor ID
 *     responses:
 *       200:
 *         description: Tutor data by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TutorResponse'
 *       404:
 *         description: Tutor not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/tutors/{id}:
 *   put:
 *     summary: Update a tutor by ID
 *     tags: [Tutors]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tutor ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tutor'
 *     responses:
 *       200:
 *         description: Tutor updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutor'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Tutor not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/tutors/{id}:
 *   delete:
 *     summary: Delete a tutor by ID
 *     tags: [Tutors]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tutor ID
 *     responses:
 *       200:
 *         description: Tutor deleted successfully
 *       404:
 *         description: Tutor not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Tutor:
 *       type: object
 *       required:
 *         - user
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the tutor
 *         user:
 *           $ref: '#/components/schemas/User'
 *         availability:
 *           type: array
 *           items:
 *             type: string
 *           description: Availability times of the tutor
 *         courses:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Course'
 *           description: Courses taught by the tutor
 *       example:
 *         _id: 6651cba5475deee04b22b219
 *         user:
 *           _id: 6651cba5475deee04b22b217
 *           name: Grace Andrew Ajogi
 *           email: grace@example.com
 *           password: $2b$10$D/vA9sWUwlw0r0tRW/Ern.zw0DnaFbSXCifwOTGzlt1Ac3YUawy/y
 *           department: School of Agriculture and Agricultural Technology
 *           courseOfStudy: Food Science and Technology
 *           level: 500
 *           role: tutor
 *           createdAt: 2024-05-25T11:29:41.030Z
 *           updatedAt: 2024-05-25T11:44:52.660Z
 *           __v: 0
 *         availability:
 *          - 9:00 AM - 5:00 PM
 *         courses:
 *          - 6651cba5475deee04b22b210
 *          - 6651cba5475deee04b22b211
 *         __v: 0
 *     TutorResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the tutor
 *         user:
 *           $ref: '#/components/schemas/User'
 *         availability:
 *           type: array
 *           items:
 *             type: string
 *           description: Availability times of the tutor
 *         courses:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Course'
 *           description: Courses taught by the tutor
 *       example:
 *         _id: 6651cba5475deee04b22b219
 *         user:
 *           _id: 6651cba5475deee04b22b217
 *           name: Grace Andrew Ajogi
 *           email: grace@example.com
 *           password: $2b$10$D/vA9sWUwlw0r0tRW/Ern.zw0DnaFbSXCifwOTGzlt1Ac3YUawy/y
 *           department: School of Agriculture and Agricultural Technology
 *           courseOfStudy: Food Science and Technology
 *           level: 500
 *           role: tutor
 *           createdAt: 2024-05-25T11:29:41.030Z
 *           updatedAt: 2024-05-25T11:44:52.660Z
 *           __v: 0
 *         availability: []
 *         courses: []
 *         __v: 0
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - department
 *         - courseOfStudy
 *         - level
 *         - role
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The hashed password of the user
 *         department:
 *           type: string
 *           description: The department of the user
 *         courseOfStudy:
 *           type: string
 *           description: The course of study of the user
 *         level:
 *           type: string
 *           description: The level of the user
 *         role:
 *           type: string
 *           description: The role of the user (e.g., student, tutor)
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the user was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the user was last updated
 *         __v:
 *           type: number
 *           description: The version of the document
 *       example:
 *         _id: 6651cba5475deee04b22b217
 *         name: Grace Andrew Ajogi
 *         email: grace@example.com
 *         password: $2b$10$D/vA9sWUwlw0r0tRW/Ern.zw0DnaFbSXCifwOTGzlt1Ac3YUawy/y
 *         department: School of Agriculture and Agricultural Technology
 *         courseOfStudy: Food Science and Technology
 *         level: 500
 *         role: tutor
 *         createdAt: 2024-05-25T11:29:41.030Z
 *         updatedAt: 2024-05-25T11:44:52.660Z
 *         __v: 0
 */
