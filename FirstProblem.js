const studentDatabase = ["jordan","erick","john","michel"]

const findStudent = (allstudent , studentName)=>{
    for (let i = 0; i < studentDatabase.length; i++) {
        if (allstudent[i] === studentName) {
            console.log(`Found ${studentName}`);
            return;
        }
    } console.log(`Not found ${studentName}`);
}
findStudent(studentDatabase,"erick")