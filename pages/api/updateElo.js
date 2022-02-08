import dbConnect from "../../utils/dbConnect";
import Classified from "../../models/Classified";


export default async function updateElo(req, res){

    try {

        dbConnect();
        
        const {id1, id2, elo1, elo2, score} = req.body

        dbConnect();

    
        let K = 32;
    
        let elo1New = elo1 + K * (score - 1 / (1 + 10 ** ((elo2 - elo1) / 400)));
        let elo2New = elo2 + K * (1 - score - 1 / (1 + 10 ** ((elo1 - elo2) / 400)));
    
        let doc = await Classified.findOneAndUpdate({id: id1}, {$set: {point: elo1New}});
        let doc2 = await Classified.findOneAndUpdate({id: id2}, {$set: {point: elo2New}});

        res.status(200).json({
            status: "success",
            data: doc
        });
    
        
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
        
    }
    
