import dbConnect from "../../utils/dbConnect";
import Classified from "../../models/Classified";


export default async function getMenu(req, res){
    dbConnect();

    const sort = req.body.sort;
    console.log(sort)
    let getRealEstate = ""
    if(sort === "▲"){
        getRealEstate = await Classified.find({category: "REAL_ESTATE"}).sort({point: 1}).limit(10);
        console.log(getRealEstate)
        res.status(200).json({
            status: "success",
            data: getRealEstate
           
        });
    }
    else if(sort === "▼" ){
        getRealEstate = await Classified.find({category: "REAL_ESTATE"}).sort({point: -1}).limit(10);
        res.status(200).json({
            status: "success",
            data: getRealEstate
           
        });
    }


}