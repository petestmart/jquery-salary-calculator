$( document ).ready(readyNow);

console.log( 'JS' );

let employees = [];
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
// function calcSalary() {
//     console.log('in calcSalary');
//     // loop through employees
//     for (let i = 0; i < employees.length; i++) {
        
//     } // end for loop
    
    
//     // monthlyAppend();
// } // end function calcSalary

// function to append the new data to the DOM
function monthlyAppend() {
    //target totalMonthly and empty its current contents
    let empAnnTot = parseFloat( $('#totalMonthly') );
    $('#totalMonthly').empty();
    
        for (let i = 0; i < employees.length; i++) {
            console.log('employees annual salary:', empAnnTot );
            let empAnnSal = parseFloat( $('#annualSalaryOut').val() );
            // target totalMonthly, calculate, append total monthly to the DOM
            $('#totalMonthly').append( empAnnSal += empAnnTot );

        clearInputs()
    } // end for loop
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
        } // end object employeeIn
        employees.push( employeeIn )
        
    // calcSalary();
    monthlyAppend();
    }) // end click submit
} // end storeInfo