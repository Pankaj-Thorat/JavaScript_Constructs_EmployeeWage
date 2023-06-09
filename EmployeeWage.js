const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const PER_HR_WAGE = 20;
const WORKING_DAYS = 20;

function getWorkingHours(empInput)
{
    let empHrs = 0 ;       
    switch(empInput)
    {
        case IS_PART_TIME:
            empHrs = PART_TIME_HRS;
            break;
        case IS_FULL_TIME:
            empHrs = FULL_TIME_HRS;
            break;
        default:
            empHrs = 0;
    }
    return empHrs;
}
let totalEmpHrs = 0;
for(let day = 0; day<WORKING_DAYS; day++){
    let empInput = Math.floor(Math.random()*10)%3;
    totalEmpHrs += getWorkingHours(empInput);
}
let empWage = totalEmpHrs * PER_HR_WAGE;
console.log("Total Hrs = "+totalEmpHrs +" Employee Wage is : " + empWage);