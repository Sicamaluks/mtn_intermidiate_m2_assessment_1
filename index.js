/** 
 * a. Log your information (names, institution, and Github username) into the console log with a statement that introduces you, 
 * e.g. "My name is Tsakane, a student from Xawe University of Technology and my Github username is"
 * 
 */

const whoAmI = (name, institution, gitHubUsername)=> {
console.log(`My name is ${name}, a studnet from ${institution} and my Github usernane is ${gitHubUsername}.`)

}

console.log("\n\n\nSoluiton A.")
whoAmI("Simon", "Wits University", "Sicamaluks")
/**
 * b. Roll a dice and help predict which category will win the MTN Business App of the Year in the year 2022.
 */
''
let categories = ["Huawei AppGallery", "Best Campus Cup Solution", "Best South African Solution", "Best Hackathon Solution", "Best Educational Solution", "Best Financial Solution" ]

const rollADie = () => {
    switch(Math.floor(Math.random()*5)){
        case 1:  console.log(categories[0])       
        break
        case 2: console.log(categories[1]) 
            break
        case 3: console.log(categories[2]) 
            break
        case 4: console.log(categories[3]) 
            break
        case 5: console.log(categories[4]) 
            break
        default: console.log(categories[5])       
    }
}

console.log("\n\n\nSoluiton B.")

rollADie();



/**
 * c. Create, open, and read from a text file: Text content of an app that won the Best Campus Cup in 2021, its developer, category, and institution represented.
 */

var fileSys = require ("fs");

const createFile = (filename) => {
    fileSys.writeFileSync(filename, "Developer: OGO Studio \nCategory: Best Campus Cup Solution \nFrom Institution: Uknown");

    console.log(fileSys.readFileSync(filename, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return
  }
  console.log(data);
}));
}

console.log("\n\n\nSoluiton C.")
createFile("Winners")

