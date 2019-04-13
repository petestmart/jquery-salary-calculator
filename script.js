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
        // Clear the inputs; Setter, Irish
        $('#firstNameIn').val('');
        $('#lastNameIn').val('');
        $('#empIdIn').val('');
        $('#jobTitleIn').val('');
        $('#annualSalaryIn').val('');

        calcSalary();
    }) // end click submit
} // end storeInfo

// function to add up annual salaries
function calcSalary() {
    // loop through employees
    for( let i=0; i<employees.length; i++ ){
    //declare variables to use in calculations
    let annual = ( employees[i].annualSalary );
    } // end for loop
    totalAnnualSalaries.push(annual);
} // end function montlyCalc

// function to append the new data to the DOM
function monthlyAppend() {
    $('#totalMonthly').empty();
    // target totalMonthly, calculate, append total monthly to the DOM
    $('#totalMonthly').append( `${totalAnnualSalaries}` / 12 );
} // end function monthlyAppend