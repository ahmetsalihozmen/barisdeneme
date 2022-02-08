import dbConnect from "../../utils/dbConnect";
import Classified from "../../models/Classified";

// const classified = {
//     data: {
//       id: 8,
//       userId: 53128,
//       title: "Est Legimus dis Dico Oporteat",
//       description: "venenatis ubique vivamus labores duo",
//       currency: "TRY",
//       price: 0.8849083426861205,
//       status: "ACTIVE",
//       createdDate: 1639725018404,
//       publishedBy: "CORPORATE",
//       city: "Note",
//       category: "SHOPPING",
//       classifiedAttributes: [
//         {
//           "id": 566104,
//           "classifiedId": 8,
//           "attributeName": "Boyut",
//           "attributeValue": "20x10"
//         },
//         {
//           "id": 566105,
//           "classifiedId": 8,
//           "attributeName": "Renk",
//           "attributeValue": "Siyah"
//         },
//         {
//           "id": 566106,
//           "classifiedId": 8,
//           "attributeName": "Kullanım Durumu",
//           "attributeValue": "İkinci El"
//         }
//       ],
//     }
//   }

export default async function addClassified(req, res) {
    try {
        await dbConnect();
        fetch("https://api-devakademi.sahibinden.com/v1/api/classifieds?pageNo=10")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const classifieds = data.data;
            
            classifieds.forEach(async (classified) => {
                const {
                    id,
                    userId,
                    title,
                    description,
                    currency,
                    price,
                    status,
                    createdDate,
                    publishedBy,
                    city,
                    category,
                    classifiedAttributes
                } = classified;
                const newClassified = await Classified.create({
                    id,
                    userId,
                    title,
                    description,
                    currency,
                    price,
                    status,
                    createdDate,
                    publishedBy,
                    city,
                    category,
                    classifiedAttributes
                });
            });

            
            res.status(201).json({
                status: "success",
                data: "Classifieds added successfully"
            });
        })

        
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}