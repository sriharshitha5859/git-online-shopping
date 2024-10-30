var removeCartItemButtons = document.getElementsByClassName('close')
console.log(removeCartItemButtons)
for (var i =0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click',function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

// Function to update the cart total price
function updateCartTotal() {
    const cartItems = document.querySelectorAll('#cart tbody tr');
    let newSubtotal = 0;
  
    cartItems.forEach((item) => {
      const itemPrice = parseFloat(item.querySelector('td:nth-child(4)').textContent.replace(/[^0-9.]/g, ''));
      const itemQuantity = parseInt(item.querySelector('td:nth-child(5) input').value, 10);
      const itemSubtotal = itemPrice * itemQuantity;
      newSubtotal += itemSubtotal;
      item.querySelector('td:nth-child(6)').textContent = `₹${itemSubtotal}`;
    });
  
    const shippingCharges = 0; // You can update this to your desired shipping charges
    const total = newSubtotal + shippingCharges;
  
    const subtotalElement = document.querySelector('#subtotal td:last-child');
    subtotalElement.textContent = `₹${newSubtotal}`;
  
    const totalElement = document.querySelector('#subtotal tr:last-child td:last-child');
    totalElement.textContent = `₹${total}`;
  }
  
  // Event listener for "Remove" buttons
  var removeCartItemButtons = document.getElementsByClassName('close')
  console.log(removeCartItemButtons)
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function (event) {
      var buttonClicked = event.target
      var rowToRemove = buttonClicked.parentElement.parentElement;
      var itemSubtotal = parseFloat(rowToRemove.querySelector('td:nth-child(6)').textContent.replace(/[^0-9.]/g, ''));
      rowToRemove.remove();
      updateCartTotal();
    })
  }
  

