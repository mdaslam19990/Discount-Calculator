document.getElementById('discount-btn').addEventListener("click", function(){
    const output = document.getElementById("output");
    const getPrice = document.getElementById("input-number");
    const getparcentage = document.getElementById("parcentage");
    const getInput = document.getElementById("cupon-code");

    const price = getPrice.value;
    const priceTextToNumber = parseFloat(price);

    const parcentage = getparcentage.value;
    const parcentageToNumber = parseFloat(parcentage)

    const inputValue = getInput.value;
    console.log(inputValue)

    getInput.value = "";
    getPrice.value = "";
    getparcentage.value = "";

    if(inputValue === "DOM"){
        const discount = priceTextToNumber * parcentageToNumber / 100;
        output.innerText = priceTextToNumber - discount;
    }else{
        output.innerText = priceTextToNumber;
        alert("Your Cupon Code Is 'DOM'")
    }
    


})