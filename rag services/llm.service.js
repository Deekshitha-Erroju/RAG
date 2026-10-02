import { ChatOllama } from "@langchain/ollama"

//craete an object for the llm 
const llm=new ChatOllama({
    model:"",
    baseUrl:"",
    temperature:0
})
//llm responce generatiom
async function llm_response(query,results) {
    //extract the chunk text from the results
    const relavent_Chunk_Text=results.map(ChunksObj=>ChunksObj.Chunk_Text?.trim())
    //check the query and results whether the results exists or not
    if(!results){
        return "i did not recive any resluts from the search"
    }
    //combine the relevant chunks data as the llm expects just one parameter in form of a string not an array of strings
    const Combined_data=relavent_Chunk_Text.map((Chunk_Text,index)=>{
        return `chunk ${index+1} :\n ${Chunk_Text}`
    })
    //
}
export {llm_response}