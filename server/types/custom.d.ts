// custom.d.ts (or declare this in an existing global.d.ts file)

import { Connection } from 'mongoose';

declare global {
  namespace Express {
    interface Request {
      db2Connection: Connection; // Declare db2Connection in the Request type
    }
  }
}
