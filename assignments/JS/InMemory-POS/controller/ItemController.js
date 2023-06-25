let thValItem = 0;
$("#I_code").val(generateNewCode());


$("#I_btnAdd").click(function () {
    let code = $("#I_code").val();
    let isAvailable = isAnItem(code);
    if (isAvailable) {

        updateItem(code);
        getAllItems();
        clearItemFields();
        $("#I_code").val(generateNewCode());

    } else {
        saveItem();
        getAllItems();
        clearItemFields();
        $("#I_code").val(generateNewCode());
    }
});

function bindSelectEvent() {
    $("#I_tBody>tr").click(function () {
        let code = $(this).children(":eq(1)").text();
        let desc = $(this).children(":eq(2)").text();
        let brand = $(this).children(":eq(3)").text();
        let unitPrice = $(this).children(":eq(4)").text();
        let qty = $(this).children(":eq(5)").text();


        $('#I_code').val(code);
        $('#I_desc').val(desc);
        $('#I_brand').val(brand);
        $('#I_unitPrice').val(unitPrice);
        $('#I_quantity').val(qty);


        $("#I_tBody>tr>td>button").click(function () {
            let consent = confirm("Do you want delete item? Are you SURE?");
            if (consent) {
                let response = deleteItem($(this).children(":eq(1)").text());

                $("#I_code").val(generateNewCode());
                if (response) {
                    alert("Item Deleted");
                    getAllItems();
                    clearItemFields();
                } else {
                    alert("Item Not Removed")
                    getAllItems();
                    clearItemFields();
                    $("#I_code").val(generateNewCode());
                }
            }
        });
    });
}

function isAnItem(code) {
    let item = searchItem(code);
    if (item === undefined) {
        return false
    } else {
        return true;
    }

}

//crud operations
function getAllItems() {
    $("#I_tBody").empty();

    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].code;
        let desc = itemDB[i].desc;
        let brand = itemDB[i].brand;
        let unitPrice = itemDB[i].unitPrice;
        let qty = itemDB[i].qty;
        thValItem = i + 1;

        let row = `<tr>
                     <td>${thValItem}</td>
                     <td>${code}</td>
                     <td>${desc}</td>
                     <td>${brand}</td>
                     <td>${unitPrice}</td>
                     <td>${qty}</td>
                     <td><button class="btn btn-danger">Delete</button></td>
                    </tr>`;
        $("#I_tBody").append(row);

        bindSelectEvent();

    }
}

function saveItem() {
    let code = generateNewCode();
    let desc = $("#I_desc").val();
    let brand = $("#I_brand").val();
    let unitPrice = $("#I_unitPrice").val();
    let qty = $("#I_quantity").val();

    let newItem = Object.assign({}, Item);

    newItem.code = code;
    newItem.desc = desc;
    newItem.brand = brand;
    newItem.unitPrice = unitPrice;
    newItem.qty = qty;

    itemDB.push(newItem);
}

function deleteItem(code) {
    let item = searchItem(code)

    let index = itemDB.findIndex((c) => c.code === item.code);
    itemDB.slice(index, 1);
    return true;
}

function updateItem(code) {
    let item = searchItem(code);
    let desc = $("#I_desc").val();
    let brand = $("#I_brand").val();
    let unitPrice = $("#I_unitPrice").val();
    let qty = $("#I_quantity").val();

    item.desc = desc;
    item.brand = brand;
    item.unitPrice = unitPrice;
    item.qty = qty;

}

function searchItem(code) {
    let avilItem = Object.assign({}, Item);
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].code === code) {
            avilItem = itemDB[i];
            return avilItem;
        }
    }


}

function generateNewCode() {
    if (itemDB.length !== 0) {
        let lastID = itemDB[itemDB.length - 1].code;
        let oldValue = lastID.slice(-1);
        let newValue = +oldValue + 1;
        return "I00-00" + newValue;
    } else {
        return "I00-001";
    }
}

function clearItemFields() {
    $("#I_code").val("");
    $("#I_desc").val("");
    $("#I_brand").val("");
    $("#I_unitPrice").val("");
    $("#I_quantity").val("");
}

/*Validations on Enter*/


$('#I_code').keydown(function (e) {
    let isValid = validateItemCode($('#I_code').val());

    if (isValid && e.key === 'Enter') {
        $(this).css('border', '2px solid blue');
        $('#I_desc').focus();
    } else {
        $(this).css('border', '2px solid red');
    }

});

$('#I_desc').keydown(function (e) {
    let isValid = validateName($('#I_desc').val());

    if (isValid && e.key === 'Enter') {
        $(this).css('border', '2px solid blue');
        $('#I_brand').focus();
    } else {
        $(this).css('border', '2px solid red');
    }

});

$('#I_brand').keydown(function (e) {
    let isValid = validateName($('#I_brand').val());

    if (isValid && e.key === 'Enter') {
        $(this).css('border', '2px solid blue');
        $('#I_unitPrice').focus();
    } else {
        $(this).css('border', '2px solid red');
    }

});

$('#I_unitPrice').keydown(function (e) {
    let isValid = validatePrice($('#I_unitPrice').val());

    if (isValid && e.key === 'Enter') {
        $(this).css('border', '2px solid blue');
        $('#I_quantity').focus();
    } else {
        $(this).css('border', '2px solid red');
    }

});

$('#I_quantity').keydown(function (e) {
    let isValid = validatePrice($('#I_quantity').val());

    if (isValid && e.key === 'Enter') {
        $(this).css('border', '2px solid blue');
        let code = $("#I_code").val();
        let isAvailable = isAnItem(code);
        if (isAvailable) {

            updateItem(code);
            getAllItems();
            clearItemFields();
            $("#I_code").val(generateNewCode());

        } else {
            saveItem();
            getAllItems();
            clearItemFields();
            $("#I_code").val(generateNewCode());
        }
    } else
        $(this).css('border', '2px solid red');

});

