import { Request, Response } from "express";


export const home = (req: Request, res: Response) => {
    res.status(200).json({
        msg: "This is project Red_Sparrow. A port for API links on the Automatic Leads database."
    })
}