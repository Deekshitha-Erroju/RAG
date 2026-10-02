import exp from "express"
export const RagRouter=exp.Router()
import { Injestion_of_article } from "../rag controllers/data._injestion_controllers.js" 
import { retrival_of_article } from "../rag controllers/data_retrival.controller.js" 

//ingestion of article
RagRouter.post("/ingestion",Injestion_of_article)
//retrival of data
RagRouter.post("/retrival/:article_Id/search",retrival_of_article)