function calculatePrice() {
    const productName = document.getElementById("product-name").value;
    const productQuantity = parseFloat(document.getElementById("product-quantity").value);
    const productValue = parseFloat(document.getElementById("product-value").value);
    const productUnits = parseFloat(document.getElementById("product-units").value);

    if (productName && !isNaN(productQuantity) && !isNaN(productValue) && !isNaN(productUnits)) {
        const pricePerUnit = productValue / productUnits;
        const totalPrice = productQuantity * pricePerUnit;

        document.getElementById("price-per-unit").textContent = pricePerUnit.toFixed(2);
        document.getElementById("total-price").textContent = totalPrice.toFixed(2);
    } else {
        alert("Por favor, complete todos los campos con valores numéricos.");
    }
}
