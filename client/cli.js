const readlineSync = require('readline-sync');
const func = require("../services/new_intellligence_report")


function menu() {
    let flag = true
    while (flag == true) {
        console.log(`================
   1. Add a new intelligence report
   2. Show all reports
   3. Search report by ID
   4. Delete report by ID
   5. Edit report by ID
   0. Exit
   ==========================`);
        let choose = readlineSync.question(`enter a number from menu: `);
        switch (choose) {
            case "1":
                let terrorist_name = readlineSync.question("what the terrorist name? ")
                let text = readlineSync.question("enter a report: ")
                let weapons = readlineSync.question("enter a weapons: ")
                let weapons_list = weapons.split(" ")

                if (terrorist_name == "") {
                    terrorist_name = undefined
                }
                let new_report = func.create_report(weapons_list, text, terrorist_name)
                console.log(`report id : ${new_report.id} created`);
                func.save_report_to_db(new_report)
                break
            case "2":
                let field = readlineSync.question("enter a field do you want sort on: ")
                console.log(func.get_reports(field));
                break
            case "3":
                let id = readlineSync.question("enter a id do you want: ")
                let report = func.searching_report_id(id)
                console.log(report);
                break
            case "4":
                let del_id = readlineSync.question("enter a report id do you want to delete: ")
                func.delete_report_by_id(del_id)
                break
            case "5":
                let new_obj = {}
                let count = readlineSync.question("how much keys you want to change? ")
                for (let i = 0; i < count; count++) {
                    let update_id = readlineSync.question("enter a id you want to update: ")
                    let key = readlineSync.question("please enter a object key: ")
                    let val = readlineSync.question("please enter a val: ")
                    new_obj[key] = val
                }
                func.updates_report(update_id, new_obj)
                break

            case "0":
                flag = false
        }

    }
}

module.exports = menu