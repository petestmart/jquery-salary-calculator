$( document ).ready(readyNow);

console.log( 'JS' );

let employees = [];

function readyNow() {
    console.log( 'JQ is R2G' );
    
    storeInfo();

}

function storeInfo(){
    console.log('in storeInfo');
    $( '#submit' ).on( 'click', function()  {
        console.log( 'submit button clicked' );
        let firstNameTyped = $('#firstNameIn').val; //.val is a GETTER of deets
        let lastNameTyped = $('#lastNameIn').val
        let empIdTyped = $('#empIdIn').val
        let jobTitleTyped = $('#jobTitleIn').val
        let annualSalaryTyped = $('#annualSalaryIn').val
    }) // end click submit
    
} // end storeInfo