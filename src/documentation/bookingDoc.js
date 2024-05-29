/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: Booking management
 */

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Get all bookings
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Booking'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Create a new booking
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       201:
 *         description: Booking created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     summary: Get a booking by ID
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The booking ID
 *     responses:
 *       200:
 *         description: Booking data by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/bookings/{id}:
 *   put:
 *     summary: Update a booking by ID
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       200:
 *         description: Booking updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     summary: Delete a booking by ID
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The booking ID
 *     responses:
 *       200:
 *         description: Booking deleted successfully
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       required:
 *         - learner_id
 *         - tutor_id
 *         - course_id
 *         - time_slot
 *         - status
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the booking
 *         learner_id:
 *           type: string
 *           description: The ID of the learner
 *         tutor_id:
 *           type: string
 *           description: The ID of the tutor
 *         course_id:
 *           type: string
 *           description: The ID of the course
 *         time_slot:
 *           type: string
 *           description: The time slot for the booking
 *         status:
 *           type: string
 *           enum: ["pending", "confirmed", "completed", "cancelled"]
 *           description: The status of the booking
 *       example:
 *         _id: 60d21b4677d8f421c8f8e6b9
 *         learner_id: 60d21b4677d8f421c8f8e6b6
 *         tutor_id: 60d21b4677d8f421c8f8e6b5
 *         course_id: 60d21b4677d8f421c8f8e6b4
 *         time_slot: "2024-06-01T10:00:00Z"
 *         status: "pending || confirmed || completed || cancelled"
 */
