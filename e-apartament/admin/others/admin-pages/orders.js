const selectAllCheckbox = document.getElementById('selectAll');
const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');


function saveDeletedRows(orderID) {
    let deletedRows = JSON.parse(localStorage.getItem('deletedRows')) || [];
    deletedRows.push(orderID);
    localStorage.setItem('deletedRows', JSON.stringify(deletedRows));
}


function checkDeletedRows() {
    let deletedRows = JSON.parse(localStorage.getItem('deletedRows')) || [];
    checkboxes.forEach(checkbox => {
        const row = checkbox.closest("tr");
        const orderID = row.querySelector('td').textContent.trim(); 
        
        if (deletedRows.includes(orderID)) {
            row.remove(); 
        }
    });
}


checkDeletedRows();

selectAllCheckbox.addEventListener('change', function () {
    checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
    });
});

function removeRow() {
    let allDeleted = true;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const row = checkbox.closest("tr");
            const orderID = row.querySelector('td').textContent.trim(); 

           
            saveDeletedRows(orderID);

            row.remove(); 
        } else {
            allDeleted = false;
        }
    });


    if (allDeleted) {
        selectAllCheckbox.checked = false;
    }
}



function resetRow() {
    localStorage.clear();
    location.reload()
}