import { NextFunction, Request, Response } from "express";
import { validationResult, query } from "express-validator";

export const tblInterviewColdValidator = [
    query('contractor').exists().withMessage('Enter a contractor to filter by.'),
    query('date').optional().isDate(),
    query('api-key').exists().matches(process.env.APIKEY).withMessage('Invalid API key')
  ,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
