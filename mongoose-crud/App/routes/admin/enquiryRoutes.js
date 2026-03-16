let express = require('express');
const { insertQuery, queryList, deleteQuery, updateQuery } = require('../../controllers/web/userEnquiryController');

let enquiryRoutes= express.Router()

//--------------------------------------------POST---------------------------------------------------------------------------
// app.post("/insert-query", insertQuery);
enquiryRoutes.post("/insert-query", insertQuery);

                                            //  {
                                            //     "sName":"kartik",
                                            //     "sEmail": "a@gmail.com",
    //use this in body of postman           //     "sNumber": "983372",
                                            //     "sMessage": "hi"
                                            // }


//--------------------------------------------GET---------------------------------------------------------------------------
// app.get("/query-data", queryList)
enquiryRoutes.get("/query-data", queryList);


//--------------------------------------------Delete---------------------------------------------------------------------------
// app.delete("/delete-query/:id", deleteQuery)
enquiryRoutes.delete("/delete-query/:id", deleteQuery);


//--------------------------------------------Update---------------------------------------------------------------------------
// app.put("/update-query/:id", updateQuery)
enquiryRoutes.put("/update-query/:id", updateQuery);

module.exports= enquiryRoutes
