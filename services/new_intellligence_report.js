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


function get_reports(){
{ 
    database.sort((id1, id2)=> id1.id.localeCompare(id2.id))
    return database
}
}


function searching_report_id(id){
    for(let report of database){
        if (report.id == id){
            return report
        }
    }throw new Error("this report id not defined")
    }


    function delete_report_by_id(id){
    for (let index = 0 ; index < database.length; index++){
        if (database[index].id == id){
            database.splice(index,1)
            break
        }
    }throw new Error("thid report id not defined")
}






function updates_report(id, obj){
    for (let key of Object.keys(obj)){
        if (!(key in database[0])){
            throw new Error("keys not found")
        }
    }
    for (let index =0; index <database.length;index ++ ){
        if(database[index].id === id){
            for(let key of Object.keys(obj)){
                database[index][key] = obj[key]
            }
        return  
        }
    }
    throw new Error("id not found!")

}





let report1 = create_report("3",["knife"],"adsf")
let report2 = create_report("1",["knife"],"adsf")

save_report_to_db(report1)
save_report_to_db(report2)
let reports = get_reports()
// let search = searching_report_id("5")
// let del  = delete_report_by_id("6")
// console.log(reports);
let d  = {terrorist_name:"yoyo"}

updates_report("1",d)
console.log(reports);