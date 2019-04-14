$( document ).ready(readyNow);

console.log( 'JS' );

let employees = [];
let totalAnnualSalaries = [];


function readyNow() {
    console.log( 'JQ is R2G' );
    
    storeInfo();

}
// take in information on button click and append it to the DOM
function storeInfo(){
    $( '#submit' ).on( 'click', function()  {
        console.log( 'submit button clicked' );
        document.getElementById("#annualSalaryIn").innerHTML = totalAnnualSalaries.reduce(calcSalary);
        // declare variables and link them to user data
        let firstNameTyped = $('#firstNameIn').val(); //.val is a GETTER of deets
        let lastNameTyped = $('#lastNameIn').val();
        let empIdTyped = $('#empIdIn').val();
        let jobTitleTyped = $('#jobTitleIn').val();
        let annualSalaryTyped = $('#annualSalaryIn').val();
        
        // append user data to the table
        console.log(`user typed ${firstNameTyped}, ${lastNameTyped}, ${empIdTyped}, ${jobTitleTyped}, ${annualSalaryTyped}`);
        $( '#employeeDataTable' ).append(`
             <tbody>
                <td id="firstNameOut">${firstNameTyped}</td>
                <td id="lastNameOut">${lastNameTyped}</td>
                <td id="empIdOut">${empIdTyped}</td>
                <td id="jobTitleOut">${jobTitleTyped}</td>
                <td id="annualSalaryOut">${annualSalaryTyped}</td>
            </tbody>
        `)
        // Add Employee To an Object
        let employeeIn = {
            firstName: firstNameTyped,
            lastName: lastNameTyped,
            empID: empIdTyped,
            jobTitle: jobTitleTyped,
            annualSalary: annualSalaryTyped
        }
        employees.push( employeeIn )
        

    }) // end click submit
} // end storeInfo

// function to add up annual salaries
function calcSalary( total, num ) {
    return total + num;
    // loop through employees
    // totalAnnualSalaries.push( $('#annualSalaryIn').val() );
    // } // end for loop
    monthlyAppend();
} // end function calcSalary

// function to append the new data to the DOM
function monthlyAppend() {
    $('#totalMonthly').empty();
    for (let i = 0; i < totalAnnualSalaries.length; i++){
    // target totalMonthly, calculate, append total monthly to the DOM
    $('#totalMonthly').append( );
    } //end for loop totalAnnualSalaries
} // end function monthlyAppend

function clearInputs(){
    // Clear the inputs; Setter, Irish
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#empIdIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}