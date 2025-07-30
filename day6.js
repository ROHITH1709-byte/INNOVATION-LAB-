let employees=[];

function addEmp(id,name,salary= true){
    employees.push({id,name,salary});
    console.log("Employee added",employees);
}
addEmp(1,"vikashini",20000)
addEmp(2,"hari",30000)
addEmp(3,"john",400)

function updateEmp(id,newDetail){
    const emp=employees.find(e=> e.id === id)
    if(emp){
        Object.assign(emp, newDetail);
        console.log("updated",employees)
    }
    else{
        console.log("employee not found")
    }
}
updateEmp(3,{name:"joe"});

function removeEmp(id){
    const index=employees.findIndex(e=>e.id===id)
    if(index !==1){
        employees.splice(index,id)
        console.log("employee removed",employees)
    }
    else{
        console.log("emloyee not found");
    }
}
removeEmp(1)

function totalSalary(){
    const total=employees.reduce((sum,emp) =>sum+emp.salary, 0);
    console.log("total salary is",total)
}

totalSalary()