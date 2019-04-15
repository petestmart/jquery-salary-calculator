$( document ).ready(readyNow);

console.log( 'JS' );

let employees = [];
let monthlyCosts = 0;

// let annualSalaryIn = $('#annualSalaryin').val();

function clearInputs() {
    // Clear the inputs; Setter, Irish
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#empIdIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}

// // function to add up annual salaries
function calcSalary() {
    let annualCosts = 0;
    console.log('in calcSalary');
    // loop through employees
    for (let i = 0; i < employees.length; i++) {
        annualCosts += parseFloat(employees[i].annualSalary);
    } // end for loop
    // set new monthlyCosts
    monthlyCosts = ( parseFloat(annualCosts) / 12).toFixed(2);    
    monthlyAppend();
} // end function calcSalary

// function to append the new data to the DOM
function monthlyAppend() {
    console.log('in monthlyAppend');
    
    //target totalMonthly and empty its current contents
    $('#totalMonthly').empty();
    // target totalMonthly, calculate, append total monthly to the DOM
    $('#totalMonthly').append( parseFloat(monthlyCosts) );
    clearInputs()
} // end function monthlyAppend

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
                <td id="firstNameOut${empIdTyped}">${firstNameTyped}</td>
                <td id="lastNameOut${empIdTyped}">${lastNameTyped}</td>
                <td id="empIdOut${empIdTyped}">${empIdTyped}</td>
                <td id="jobTitleOut${empIdTyped}">${jobTitleTyped}</td>
                <td id="annualSalaryOut${empIdTyped}">${annualSalaryTyped}</td>
                <td class="delete" id="${empIdTyped}"><button>Remove</button></td>
            </tbody>
        `)
        // Add Employee To an Object
        let employeeIn = {
            firstName: firstNameTyped,
            lastName: lastNameTyped,
            empID: empIdTyped,
            jobTitle: jobTitleTyped,
            annualSalary: annualSalaryTyped
        } // end object employeeIn
        employees.push( employeeIn );
        
    calcSalary();
    // monthlyAppend();
    }) // end click submit
} // end storeInfo
