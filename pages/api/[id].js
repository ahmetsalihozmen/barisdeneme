import dbConnect from "../../utils/dbConnect";
import Classified from "../../models/Classified";

export default async function getClassified(req, res) {
    dbConnect();
    
    const { id } = req.query;
    console.log(id)
    const classified = await Classified.findOne({ id: id });
    
    console.log(classified)
    if (!classified) {
        return res.status(404).json({
        status: "fail",
        message: "Classified not found",
        });
    }
    
    res.status(200).json({
        status: "success",
        data: classified,
    });
    }