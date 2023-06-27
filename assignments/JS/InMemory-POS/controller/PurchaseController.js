let thValPurch=0;
$("#purOrderID").val(generateNewOrderID());
loadCustomerID();
loadItemCode();
loadDate();

$("#purItemCode").on('change',function (){
    addProductDetailsToFields($(this).val());


});

$("#purItemBtnAdd").click(function () {
        addToBasket();
        getAllBasket();
        calculateSubTotal();
    }
);

$('#purDiscount').keydown(function (e) {
    if (e.key==='Enter'){
        let subTotal=calculateSubTotal();
        console.log(subTotal)
        let discount=parseFloat($('#purDiscount').val());
        console.log(discount)
        let netTotal=subTotal-discount;
        console.log(netTotal)
       $('#purNetTotal').val(netTotal);
    }
});

$('#purBtnCheckOut').click(function () {
   saveOrder();
//   clear table
$('#purTBody').empty();
//    clear fields
$('#purCusId').val("");
$('#purItemCode').val("");
$('#purItemDesc').val("");
$('#purItemBrand').val("");
$('#purItemUPrice').val("");
$('#purItemQty').val("");
$('#purSubTotal').val("");
$('#purDiscount').val("");
$('#purNetTotal').val("");
//    clear basket
    basketDB=[];

//    generate new Order ID
    generateNewOrderID();

});

$('#purBtnCancelOrder').click(function () {
//   clear table
    $('#purTBody').empty();
//    clear fields
    $('#purCusId').val("");
    $('#purItemCode').val("");
    $('#purItemDesc').val("");
    $('#purItemBrand').val("");
    $('#purItemUPrice').val("");
    $('#purItemQty').val("");
    $('#purSubTotal').val("");
    $('#purDiscount').val("");
    $('#purNetTotal').val("");
//    clear basket
    basketDB=[];

//    generate new Order ID
    generateNewOrderID();

});







function bindSelectEvent() {
    $("#purTBody>tr").click(function () {
        let code = $(this).children(":eq(1)").text();
        addProductDetailsToFields(code);

        $("#purTBody>tr>td>button").click(function () {
            let consent = confirm("Do you want VOID item");
            if (consent) {
                let response = voidItem($(this).children(":eq(1)").text());

                if (response) {
                    getAllBasket();
                    clearOrderFields();
                } else {
                    getAllBasket();
                    clearOrderFields();
                }
            }
        });
    });
}




/*Needed function basically utils*/



function addProductDetailsToFields(code){
    let itemFound = searchItem(code);
    let desc=itemFound.desc;
    let brand=itemFound.brand;
    let  unitPrice=itemFound.unitPrice


    $('#purItemDesc').val(desc);
    $('#purItemBrand').val(brand);
    $('#purItemUPrice').val(unitPrice);
}


function  calculateSubTotal() {
    let total=0;
    for (let i = 0; i < basketDB.length; i++) {
        total=+basketDB[i].price+total;
    }
    $('#purSubTotal').val(total);
    return total;
}


function addToBasket() {

    let code = $("#purItemCode").val();
    let desc = $("#purItemDesc").val();
    let unitPrice = $("#purItemUPrice").val();
    let qty = $("#purItemQty").val();
    let price= qty*unitPrice;

    let newBasketItem = Object.assign({},Basket);

    newBasketItem.code=code;
    newBasketItem.desc=desc;
    newBasketItem.unitPrice=unitPrice;
    newBasketItem.qty=qty;
    newBasketItem.price=price;

    basketDB.push(newBasketItem);
    deductItemQty(code,qty);
}

function voidItem(code) {
    //remove item from basket
    let itemFound = searchBasketItem(code);
    let index=basketDB.findIndex(itemFound);
    basketDB.splice(index,1);
    getAllBasket();
    return true;
}

function  deductItemQty(code,qty) {
    let itemEdit = searchItem(code);
    itemEdit.qty=itemEdit.qty-qty;

}





//crud operations
function getAllBasket() {
    $("#purTBody").empty();

    for (let i = 0; i < basketDB.length; i++) {
        let code = basketDB[i].code;
        let desc = basketDB[i].desc;
        let unitPrice = basketDB[i].unitPrice;
        let qty = basketDB[i].qty;
        let price = qty*unitPrice;
        thValPurch=i+1;

        let row = `<tr>
                     <td>${thValPurch}</td>
                     <td>${code}</td>
                     <td>${desc}</td>
                     <td>${unitPrice}</td>
                     <td>${qty}</td>
                     <td>${price}</td>
                     <td><button class="btn btn-danger">Delete</button></td>
                    </tr>`;
        $("#purTBody").append(row);

        bindSelectEvent();

    }
}

function saveOrder() {
    let oid = $("#purOrderID").val();
    let cusId = $("#purCusId").val();
    let subTotal = $("#purSubTotal").val();
    let discount = $("#purDiscount").val();
    let netTotal = $("#purNetTotal").val();
    let date = $("#purDate").text();

    let newOrder = Object.assign({},Order);

    newOrder.oid=oid;
    newOrder.cusId=cusId;
    newOrder.total=subTotal;
    newOrder.discount=discount;
    newOrder.netTotal=netTotal;
    newOrder.date=date;

    orderDB.push(newOrder);
}

function searchBasketItem(code) {
    let avilItem = Object.assign({}, Basket);
    for (let i = 0; i < basketDB.length; i++) {
        if (basketDB[i].code === code) {
            avilItem = bas[i];
            return avilItem;
        }
    }
}

function searchItem(code) {
    let avilItem = Object.assign({},Item);
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].code===code){
            avilItem=itemDB[i];
            return avilItem;
        }
    }


}

function generateNewOrderID(){
    if (orderDB.length !== 0) {
        let lastID = orderDB[orderDB.length - 1].oid;
        let oldValue = lastID.slice(-1);
        let newValue = +oldValue +1;
        return "O00-00" + newValue;
    } else {
        return "O00-001";
    }
}
function clearOrderFields() {
    $("#I_code").val("");
    $("#I_desc").val("");
    $("#I_brand").val("");
    $("#cMAil").val("");
    $("#I_quantity").val("");
}

function loadCustomerID() {
    $("#purCusId").empty();
    for (let i = 0; i < customerDB.length; i++) {
        var optionCustomer=$("<option>").text(customerDB[i].id);
        $("#purCusId").append(optionCustomer);
    }
}
function loadItemCode() {
    $("#purItemCode").empty();
    for (let i = 0; i < itemDB.length; i++) {
        var optionItem=$("<option>").text(itemDB[i].code);
        $("#purItemCode").append(optionItem);
    }
}

function loadDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = String(currentDate.getMonth() + 1).padStart(2, '0');
    var day = String(currentDate.getDate()).padStart(2, '0');

    var formattedDate = year + '-' + month + '-' + day;

    $('#purDate').text(formattedDate);
}



/*Validations on Enter*/


$('#purItemCode').keydown(function (e) {
    let isValid = validateItemCode($('#purItemCode').val());

    if (isValid && e.key === 'Enter') {
        $(this).css('border', '2px solid blue');
        $('#purItemBrand').focus();
    } else {
        $(this).css('border', '2px solid red');
    }

});

$('#purItemBrand').keydown(function (e) {
    let isValid = validateName($('#purItemBrand').val());

    if (isValid && e.key === 'Enter') {
        $(this).css('border', '2px solid blue');
        $('#purItemUPrice').focus();
    } else {
        $(this).css('border', '2px solid red');
    }

});

$('#purItemUPrice').keydown(function (e) {
    let isValid = validatePrice($('#purItemUPrice').val());

    if (isValid && e.key === 'Enter') {
        $(this).css('border', '2px solid blue');
        $('#purItemQty').focus();
    } else {
        $(this).css('border', '2px solid red');
    }

});

$('#purItemQty').keydown(function (e) {
    let isValid = validateQty($('#purItemQty').val());

    if (isValid && e.key === 'Enter') {
        $(this).css('border', '2px solid blue');
        addToBasket();
        getAllBasket();
        calculateSubTotal();
    } else {
        $(this).css('border', '2px solid red');
    }

});

