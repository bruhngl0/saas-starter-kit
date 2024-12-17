
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle GET requests
  if (req.method === 'GET') {
    res.status(200).json({
      message: 'Welcome to the Users API!',
      status: 'success',
    });
  } else {
    // If the method is not GET, return 405 Method Not Allowed
    res.status(405).json({
      message: `Method ${req.method} not allowed.`,
    });
  }
}