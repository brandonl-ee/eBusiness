function copyText() {
    var copyText = document.getElementById("selling_price");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    // var tooltip = document.getElementById("myTooltip");
    // tooltip.innerHTML = "Copied: " + copyText.value;
}
  
function showToolTip() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

function calculate_selling_price(){
    var marginPercentage = document.getElementById("margin_perc").value;
    var ori_price = document.getElementById("ori_price").value;
    console.log(marginPercentage, ori_price);
    var selling = parseFloat(ori_price) * ((parseFloat(marginPercentage)/100.00)+1);
    var selling_price = document.getElementById("selling_price");
    selling_price.value = selling.toFixed(1);
}
function check_input(){
    require(['nodejs'], function (require) {
        const download = require("nodejs");
    });
}


