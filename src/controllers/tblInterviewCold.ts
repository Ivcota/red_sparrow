import { Request, Response } from "express";
import { db } from "../db/db";

export const getInterviewsColds = async (req: Request, res: Response) => {
  const { contractor } = req.query;

  const leads = await db.tblInterviewCold.findMany({
    where: {
      Contractor_AFF: {
        equals: contractor as string,
      },
    },
    select: {
      Interview_CSID: true,
      Name: true,
      Email: true,
      Cell_Phone: true,
      Wrong_Number: true,
      Comment: true,
      DateEdited: true,
      Callback_Date: true,
      Gender: true,
      Contractor_AFF: true,
      DateStamp: true,
      TimeSlot: true,
      Special: true,
    },
  });

  res.status(200).json({
    count: leads.length,
    leads,
  });
};
