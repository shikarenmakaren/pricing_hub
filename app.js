
let ranger = document.getElementById('ranger');
let price = document.getElementById('price');

price.innerHTML = ranger.value;

ranger.oninput = function() {
   price.innerHTML = this.value;
   console.log(this.value); 
}



function getCheckedBill() {
    var bill = document.getElementById('switch-1')

    if (bill.checked) {
        console.log('yearly bill checked')
    } else {
        console.log('monthly bill checked')
    }
}

getCheckedBill();
