const employee ={
    name: "Lauren",
    streetAddress: "123 Main St.",
}
function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = {...object};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}
function deleteFromEmployeeByKey(object, key, value) {
    const copyEmployee = {...object};
    delete copyEmployee[key];
    return copyEmployee;
}
function destructivelyDeleteFromEmployeeByKey(object, key, value) {
    delete object[key];
    return object;
}