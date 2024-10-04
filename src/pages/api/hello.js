// pages/api/docs.js
import { swaggerUi, swaggerDocs } from '../../lib/swagger';

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Nếu là yêu cầu GET, phục vụ Swagger UI
    swaggerUi.setup(swaggerDocs)(req, res);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
