import dbConnect from "../../utils/dbConnect";
import Classified from "../../models/Classified";


export default async function getTwo(req, res){
    dbConnect();

    // find 2 random elements from the database
    const randomClassifieds = await Classified.aggregate([
        { $match: {category: "REAL_ESTATE"}},
            {$sample: { size: 2 }}
          
    
    ]);

    console.log(randomClassifieds)

    res.status(200).json({
        status: "success",
        data: randomClassifieds
    });



}