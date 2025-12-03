const database = require("../db/database")
const nano_id = require("nanoid")


function create_report(weapons, text,terrorist_name = "muhamd",id = nano_id.nanoid()) {
    
    if (typeof id !== "string" && typeof id !== "number" && !id) {
        throw new Error("you need enter id number!")
    }
    
    for (let obj of database) {
        if (id == obj.id) {
            throw new Error("this id already exist")
        }
    }
    return { id : id, terrorist_name: terrorist_name, weapons: weapons, text: text }
}

function save_report_to_db(report) {
    database.push(report)
}


function get_reports(field) {
    {
        database.sort((obj1, obj2) => obj1[field].localeCompare(obj2[field]))
        return database
    }
}


function searching_report_id(id) {
    for (let report of database) {
        if (report.id == id) {
            return report
        }
    } throw new Error("this report id not defined")
}


function delete_report_by_id(id) {
    for (let index = 0; index < database.length; index++) {
        if (database[index].id == id) {
            database.splice(index, 1)
            break
        }
    } throw new Error("thid report id not defined")
}






function updates_report(id, obj) {
    for (let key of Object.keys(obj)) {
        if (!(key in database[0])) {
            throw new Error("keys not found")
        }
        else{
    }
    for (let index = 0; index < database.length; index++) {
        if (database[index].id === id) {
            for (let key of Object.keys(obj)) {
                database[index][key] = obj[key]
            }
            return
        }}
    }
    throw new Error("id not found!")

}




module.exports = {database,create_report,save_report_to_db,get_reports,searching_report_id
    ,delete_report_by_id,updates_report}

// let report1 = create_report(["knife","asdf"], "fads")
// let report2 = create_report(["knife"],"adsf")

// save_report_to_db(report1)
// save_report_to_db(report2)
// let reports = get_reports("id")
// let search = searching_report_id("5")
// let del = delete_report_by_id("6")
// console.log(reports);
// let d = { terrorist_name: "yoyo" }

// updates_report("1", d)
// console.log(reports);

// let report1 = create_report(["knife","weapon"],"dsaf")
// let report2 = create_report(["knife","weapon"],"adf")
// save_report_to_db(report1)
// save_report_to_db(report2)
// console.log(get_reports());




