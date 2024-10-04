// pages/api/hello.js

/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Returns a greeting message
 *     responses:
 *       200:
 *         description: A greeting message
 */
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, World!' });
}
