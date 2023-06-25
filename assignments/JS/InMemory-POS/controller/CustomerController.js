
let thVal = 0;
$("#cusId").val(generateNewId());



$("#cAddB").click(function () {
    let id = $("#cusId").val();
    let isAvailable = isACustomer(id);
    if (isAvailable) {
       /* $("#cAddB").textContent("Update");*/
        updateCustomer(id);
        getAll();
        clearFields();
        $("#cusId").val(generateNewId());
       /* $("#cAddB").textContent("Add");*/
    } else {
        saveCustomer();
        getAll();
        clearFields();
        $("#cusId").val(generateNewId());
    }
});

function bindSelectEvent() {
    $("#cTBody>tr").click(function () {
        let id = $(this).children(":eq(1)").text();
        let name = $(this).children(":eq(2)").text();
        let address = $(this).children(":eq(3)").text();
        let mail = $(this).children(":eq(4)").text();
        let tp = $(this).children(":eq(5)").text();
        let dob = $(this).children(":eq(6)").text();


        $('#cusId').val(id);
        $('#cName').val(name);
        $('#cAddress').val(address);
        $('#cMAil').val(mail);
        $('#cTP').val(tp);
        $('#cDOB').val(dob);


        $("#cTBody>tr>td>button").click(function () {
            let consent = confirm("Do you want delete customer? Are you SURE?");
            if (consent) {
                let response = deleteCustomer($(this).children(":eq(1)").text());

                $("#cusId").val(generateNewId());
                if (response) {
                    alert("Customer Deleted");
                    getAll();
                    clearFields();
                } else {
                    alert("Customer Not Removed")
                    getAll();
                    clearFields();
                    $("#cusId").val(generateNewId());
                }
            }
        });
    });
}

function isACustomer(id) {
    let customer = searchCustomer(id);
    if (customer===undefined){
        return false
    }else{
        return true;
    }

}

//crud operations
function getAll() {
    $("#cTBody").empty();

    for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].id;
        let name = customerDB[i].name;
        let address = customerDB[i].address;
        let mail = customerDB[i].mail;
        let tp = customerDB[i].tp;
        let dob = customerDB[i].dob;
        thVal=i+1;

        let row = `<tr>
                     <td>${thVal}</td>
                     <td>${id}</td>
                     <td>${name}</td>
                     <td>${address}</td>
                     <td>${mail}</td>
                     <td>${tp}</td>
                     <td>${dob}</td>
                     <td><button class="btn btn-danger">Delete</button></td>
                    </tr>`;
        $("#cTBody").append(row);

        bindSelectEvent();

    }
}

function saveCustomer() {
    let id =generateNewId();
    let name = $("#cName").val();
    let address = $("#cAddress").val();
    let mail = $("#cMAil").val();
    let tp = $("#cTP").val();
    let dob = $("#cDOB").val();

    let newCustomer = Object.assign({},Customer);

    newCustomer.id=id;
    newCustomer.name=name;
    newCustomer.address=address;
    newCustomer.mail=mail;
    newCustomer.tp=tp;
    newCustomer.dob=dob;

    customerDB.push(newCustomer);
}

function deleteCustomer(id) {
    let customer = searchCustomer(id)

    let index= customerDB.findIndex((c)=> c.id===customer.id);
    customerDB.slice(index,1);
    return true;
}

function updateCustomer(id) {
let customer = searchCustomer(id);
    let name = $("#cName").val();
    let address = $("#cAddress").val();
    let mail = $("#cMAil").val();
    let tp = $("#cTP").val();
    let dob = $("#cDOB").val();

    customer.name=name;
    customer.address=address;
    customer.mail=mail;
    customer.tp=tp;
    customer.dob=dob;
}

function searchCustomer(id) {
    let avilCustomer = Object.assign({},Customer);
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id===id){
            newCustomer=customerDB[i];
            return newCustomer;
        }
    }


}

function generateNewId() {
    if (customerDB.length !== 0) {
        let lastID = customerDB[customerDB.length - 1].id;
        let oldValue = lastID.slice(-1);
        let newValue = +oldValue +1;
        return "C00-00" + newValue;
    } else {
        return "C00-001";
    }
}
function clearFields() {
    $("#cusId").val("");
    $("#cName").val("");
    $("#cAddress").val("");
    $("#cMAil").val("");
    $("#cTP").val("");
    $("#cDOB").val("");
}

/*Validations on Enter*/

$(window).keydown(function (e){
    if (e.key==='Tab'){
        e.preventDefault();
    }
});

$('#cusId').keydown(function (e){
    let isValid = validateCusID($('#cusId').val());

    if (isValid && e.key==='Enter') {
        $(this).css('border','2px solid blue');
        $('#cName').focus();
    } else {
        $(this).css('border','2px solid red');
    }

});

$('#cName').keydown(function (e){
    let isValid = validateName($('#cName').val());

    if (isValid && e.key==='Enter') {
        $(this).css('border','2px solid blue');
        $('#cAddress').focus();
    } else {
        $(this).css('border','2px solid red');
    }

});

$('#cAddress').keydown(function (e){
    let isValid = validateAddress($('#cAddress').val());

    if (isValid && e.key==='Enter') {
        $(this).css('border','2px solid blue');
        $('#cMAil').focus();
    } else {
        $(this).css('border','2px solid red');
    }

});

$('#cMAil').keydown(function (e){
    let isValid = validateEmail($('#cMAil').val());

    if (isValid && e.key==='Enter') {
        $(this).css('border','2px solid blue');
        $('#cTP').focus();
    } else {
        $(this).css('border','2px solid red');
    }

});

$('#cTP').keydown(function (e){
    let isValid = validatePhone($('#cTP').val());

    if (isValid && e.key==='Enter') {
        $(this).css('border','2px solid blue');
        $('#cDOB').focus();
    } else {
        $(this).css('border','2px solid red');
    }

});

$('#cDOB').keydown(function (e){
    let isValid = validateDate($('#cDOB').val());

    if (isValid && e.key==='Enter') {
        $(this).css('border','2px solid blue');
        let id = $("#cusId").val();
        let isAvailable = isACustomer(id);
        if (isAvailable) {
            /* $("#cAddB").textContent("Update");*/
            updateCustomer(id);
            getAll();
            clearFields();
            $("#cusId").val(generateNewId());
            /* $("#cAddB").textContent("Add");*/
        } else {
            saveCustomer();
            getAll();
            clearFields();
            $("#cusId").val(generateNewId());
        }
    } else {
        $(this).css('border','2px solid red');
    }

});