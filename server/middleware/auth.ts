import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

// Extend the Request interface to include the user property
interface AuthenticatedRequest extends Request {
  user?: string | JwtPayload;
}

const ensureAuthenticated = (req: AuthenticatedRequest, res: Response, next: NextFunction): Response | void => {
  const auth = req.headers['authorization'];

  if (!auth) {
    return res.status(403).json({ message: 'Unauthorized, JWT token is required' });
  }

  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET as string);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Unauthorized, JWT token is wrong or expired' });
  }
};

export default ensureAuthenticated;

