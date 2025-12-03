let database = require("../db/database")

function create_report(id, weapons, text, terrorist_name = "muhamd"){
    if(typeof id !== "string" && typeof id !== "number" && !id ){
        throw new Error ("you need enter id number!")
    }
    for (let obj of database){
        if(id == obj.id){
            throw new Error("this id already exist")
        }
    }
    return  {id:id, terrorist_name : terrorist_name, weapons : weapons,text:text}  
}

function save_report_to_db(report){
    database.push(report)
}


function get_reports(database){
{ 
    database.sort((id1, id2)=> id1.id.localeCompare(id2.id))
    return database
}
}


function searching_report_id(database, id){
    
}
