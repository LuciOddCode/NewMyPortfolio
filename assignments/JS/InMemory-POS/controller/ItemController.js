
let thVal = 0;
$("#I_code").val(generateNewId());



$("#I_btnAdd").click(function () {
    let code = $("#I_code").val();
    let isAvailable = isAnItem(code);
    if (isAvailable) {
        /* $("#cAddB").textContent("Update");*/
        updateItem(code);
        getAll();
        clearFields();
        $("#I_code").val(generateNewId());
        /* $("#cAddB").textContent("Add");*/
    } else {
        saveCustomer();
        getAll();
        clearFields();
        $("#I_code").val(generateNewId());
    }
});

function bindSelectEvent() {
    $("#I_tBody>tr").click(function () {
        let code = $(this).children(":eq(1)").text();
        let name = $(this).children(":eq(2)").text();
        let address = $(this).children(":eq(3)").text();
        let mail = $(this).children(":eq(4)").text();
        let tp = $(this).children(":eq(5)").text();
        let dob = $(this).children(":eq(6)").text();


        $('#I_code').val(code);
        $('#cName').val(name);
        $('#cAddress').val(address);
        $('#cMAil').val(mail);
        $('#cTP').val(tp);
        $('#cDOB').val(dob);


        $("#cTBody>tr>td>button").click(function () {
            let consent = confirm("Do you want delete item? Are you SURE?");
            if (consent) {
                let response = deleteCustomer($(this).children(":eq(1)").text());

                $("#I_code").val(generateNewId());
                if (response) {
                    alert("Customer Deleted");
                    getAll();
                    clearFields();
                } else {
                    alert("Customer Not Removed")
                    getAll();
                    clearFields();
                    $("#I_code").val(generateNewId());
                }
            }
        });
    });
}

function isAnItem(code) {
    let item = searchCustomer(code);
    if (item===undefined){
        return false
    }else{
        return true;
    }

}

//crud operations
function getAll() {
    $("#cTBody").empty();

    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].code;
        let name = itemDB[i].name;
        let address = itemDB[i].address;
        let mail = itemDB[i].mail;
        let tp = itemDB[i].tp;
        let dob = itemDB[i].dob;
        thVal=i+1;

        let row = `<tr>
                     <td>${thVal}</td>
                     <td>${code}</td>
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

function saveItem() {
    let code =generateNewId();
    let name = $("#cName").val();
    let address = $("#cAddress").val();
    let mail = $("#cMAil").val();
    let tp = $("#cTP").val();
    let dob = $("#cDOB").val();

    let newCustomer = Object.assign({},Customer);

    newCustomer.code=code;
    newCustomer.name=name;
    newCustomer.address=address;
    newCustomer.mail=mail;
    newCustomer.tp=tp;
    newCustomer.dob=dob;

    itemDB.push(newCustomer);
}

function deleteItem(code) {
    let item = searchItem(code)

    let index= itemDB.findIndex((c)=> c.code===item.code);
    itemDB.slice(index,1);
    return true;
}

function updateItem(code) {
    let item = searchItem(code);
    let name = $("#cName").val();
    let address = $("#cAddress").val();
    let mail = $("#cMAil").val();
    let tp = $("#cTP").val();
    let dob = $("#cDOB").val();

    item.name=name;
    item.address=address;
    item.mail=mail;
    item.tp=tp;
    item.dob=dob;
}

function searchItem(code) {
    let avilCustomer = Object.assign({},Customer);
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].code===code){
            newCustomer=itemDB[i];
            return newCustomer;
        }
    }


}

function generateNewId() {
    if (itemDB.length !== 0) {
        let lastID = itemDB[itemDB.length - 1].code;
        let oldValue = lastID.slice(-1);
        let newValue = +oldValue +1;
        return "I00-00" + newValue;
    } else {
        return "I00-001";
    }
}
function clearFields() {
    $("#I_code").val("");
    $("#cName").val("");
    $("#cAddress").val("");
    $("#cMAil").val("");
    $("#cTP").val("");
    $("#cDOB").val("");
}