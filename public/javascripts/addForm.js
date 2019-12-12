var total = 1; // Our default for how many contacts we have

function funcCreate() {

    var addBlockId = total = total + 1;

    var line = document.createElement('hr');
    $(line).appendTo($('.form-contacts-container'));
    
    var addBlock = document.createElement('div');
    $(addBlock).addClass('row my-2');

    var addLabel = document.createElement('label');
    $(addLabel).addClass('col-12 col-sm-3 text-sm-right my-auto')
    addLabel.innerHTML = 'Product Code :'
    $(addLabel).appendTo($(addBlock));

    var inputproductCode = document.createElement('input');
    $(inputproductCode).attr('type','text');
    $(inputproductCode).attr('name','productCode-' + addBlockId);
    $(inputproductCode).attr('id','productCode-' + addBlockId);
    $(inputproductCode).attr('class','form-control col-12 col-sm-6 col-md-5');
    $(inputproductCode).appendTo($(addBlock));
    $(addBlock).appendTo($('.form-contacts-container'));

    var addBlock2 = document.createElement('div');
    $(addBlock2).addClass('row my-2');

    var addLabel2 = document.createElement('label');
    $(addLabel2).addClass('col-12 col-sm-3 text-sm-right my-auto')
    addLabel2.innerHTML = 'Quantity Order :'
    $(addLabel2).appendTo($(addBlock2));

    var inputqty = document.createElement('input');
    $(inputqty).attr('type','text');
    $(inputqty).attr('name','qty-' + addBlockId);
    $(inputqty).attr('id','qty-' + addBlockId);
    $(inputqty).attr('class','form-control col-12 col-sm-6 col-md-5');
    $(inputqty).appendTo($(addBlock2));
    $(addBlock2).appendTo($('.form-contacts-container'));

    var addBlock3 = document.createElement('div');
    $(addBlock3).addClass('row my-2');

    var addLabel3 = document.createElement('label');
    $(addLabel3).addClass('col-12 col-sm-3 text-sm-right my-auto')
    addLabel3.innerHTML = 'Price Each :'
    $(addLabel3).appendTo($(addBlock3));

    var inputPrice = document.createElement('input');
    $(inputPrice).attr('type','text');
    $(inputPrice).attr('name','qty-' + addBlockId);
    $(inputPrice).attr('id','qty-' + addBlockId);
    $(inputPrice).attr('class','form-control col-12 col-sm-6 col-md-5');
    $(inputPrice).appendTo($(addBlock3));
    $(addBlock3).appendTo($('.form-contacts-container'));

    var addBlock4 = document.createElement('div');
    $(addBlock4).addClass('row my-2');

    var addLabel4 = document.createElement('label');
    $(addLabel4).addClass('col-12 col-sm-3 text-sm-right my-auto')
    addLabel4.innerHTML = 'Order Line Number :'
    $(addLabel4).appendTo($(addBlock4));

    var inputOrLN = document.createElement('input');
    $(inputOrLN).attr('type','text');
    $(inputOrLN).attr('name','qty-' + addBlockId);
    $(inputOrLN).attr('id','qty-' + addBlockId);
    $(inputOrLN).attr('class','form-control col-12 col-sm-6 col-md-5');
    $(inputOrLN).appendTo($(addBlock4));
    $(addBlock4).appendTo($('.form-contacts-container'));

    // var inputPhone = document.createElement('input');
    // $(inputPhone).attr('type','text');
    // $(inputPhone).attr('name','phone-' + addBlockId);
    // $(inputPhone).attr('id','phone-' + addBlockId);
    // $(inputPhone).attr('placeholder','phone');
    // $(inputPhone).appendTo($(addBlock));

    
    $('#contacts').val(total);
};