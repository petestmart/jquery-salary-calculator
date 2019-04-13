$( document ).ready(readyNow);

console.log( 'JS' );

let employees = [];

function readyNow() {
    console.log( 'JQ is R2G' );
    
    storeInfo();

}
// take in information on  button click and append it to the DOM
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
                <td id="firstNameOut"> table data 1</td>
                <td id="lastNameOut"> table data 2</td>
                <td id="empIdOut"> table data 3</td>
                <td id="jobTitleOut"> table data 4</td>
                <td id="annualSalaryOut"> table data 5</td>
            </tbody>
        `)
        //Clear the inputs; Setter, Irish
        $('#nameIn').val('')
        $('#addressIn').val('')
        $('#nameIn').val('')
        $('#addressIn').val('')
        $('#addressIn').val('')
    }) // end click submit
    
} // end storeInfo