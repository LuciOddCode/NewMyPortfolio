
$('#payment').css("display", "grid");
$('#customer').css("display", "none");
$('#item').css("display", "none");
$('#ordersSec').css("display", "none");
loadCustomerID();
loadItemCode();
loadDate();
$("#btnPurchase").click(function () {
    loadCustomerID();
    loadItemCode();
    loadDate();
    $('#payment').css("display", "grid");
    $('#customer').css("display", "none");
    $('#item').css("display", "none");
    $('#ordersSec').css("display", "none");
});

$("#btnCustomer").click(function () {
    $('#payment').css("display", "none");
    $('#customer').css("display", "grid");
    $('#item').css("display", "none");
    $('#ordersSec').css("display", "none");
})

$("#btnItem").click(function () {
    $('#payment').css("display", "none");
    $('#customer').css("display", "none");
    $('#item').css("display", "grid");
    $('#ordersSec').css("display", "none");
})

$("#btnNavOrder").click(function () {
    $('#payment').css("display", "none");
    $('#customer').css("display", "none");
    $('#item').css("display", "none");
    $('#ordersSec').css("display", "grid");
})

