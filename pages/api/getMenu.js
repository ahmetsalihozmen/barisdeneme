import dbConnect from "../../utils/dbConnect";
import Classified from "../../models/Classified";


export default async function getMenu(req, res){
    dbConnect();

    const getRealEstate = await Classified.aggregate([
        { $match: {category: "REAL_ESTATE"}},
        {$sample: { size: 5 }}
    ]);


    console.log(getRealEstate);
    const getShopping = await Classified.aggregate([
        { $match: {category: "SHOPPING"}},
        {$sample: { size: 5 }}
    ]);


    
    res.status(200).json({
        status: "success",
        realEstate: getRealEstate,
        shopping: getShopping
        
    });




}