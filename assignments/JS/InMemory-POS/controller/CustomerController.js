let thVal = 0;


$("#cAddB").click(function () {
    let customer = {
        name: $('#cName').val(),
        address: $('#cAddress').val(),
        mail: $('#cMAil').val(),
        tp: $('#cTP').val(),
        dob: $('#cDOB').val()
    }
    customerDB.push(customer);

    thVal++;
    let row = `<tr>
                    <th>${thVal}</th>
                    <td>${thVal}</td>
                    <td>${customer.name}</td>
                    <td>${customer.address}</td>
                    <td>${customer.mail}</td>
                    <td>${customer.tp}</td>
                    <td>${customer.dob}</td>
                    <td><button class="btn btn-danger">Delete</button></td>
                  </tr>`;


    let purBody = $("#cTBody");

    purBody.append(row);
    bindSelectEvent();

});

function bindSelectEvent() {
    $("#cTBody>tr").click(function () {
        let name = $(this).children(":eq(2)").text();
        let address = $(this).children(":eq(3)").text();
        let mail = $(this).children(":eq(4)").text();
        let tp = $(this).children(":eq(5)").text();
        let dob = $(this).children(":eq(6)").text();


        $('#cName').val(name)
        $('#cAddress').val(address)
        $('#cMAil').val(mail)
        $('#cTP').val(tp)
        $('#cDOB').val(dob)


        $("#cTBody>tr>td>button").click(function () {
            let consent =confirm("Do you want delete customer? Are you SURE?");
            if (consent){
                let response=deleteRow( $('#cName').val(name));
                if (response){
                    alert("Customer Deleted");
                }else{
                    alert("Customer Not Removed")
                }
            }
        });
    });





    function deleteRow(id){
        for (let i = 0; i < customerDB.length; i++) {
            if (customerDB[i].name===id){
                customerDB.splice(i,1);
                return true;
            }
        }
        return false;
    }

    function search(customer){
        if (!(customer.name===null)){

        }
    }
}