const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('down');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Sample product data (you can replace this with actual data from your backend)
const products = [
    { id: 1, name: 'John Lewis',   price: '₹1000',imageUrl: "images/i1.jpeg" },
    { id: 2, name: 'ANGE',   price: '₹1500' , imageUrl: "images/i2.png" },
    { id: 3, name: 'Principles',   price: '₹1200', imageUrl:"images/i3.jpg"},
    { id: 4, name: 'John Lewis',   price: '₹1000', imageUrl: "images/i4_1.png" },
    { id: 5, name: 'Abraham & Thakore',   price: '₹2000', imageUrl: "images/i5.jpeg" },
    { id: 6, name: 'Banana Republic',   price: '₹1500', imageUrl: "images/i6.jpg" },
    { id: 7, name: 'Charlies',   price: '₹1200', imageUrl: "images/i7.jpg" }
    // Add more products here...
];

let searchResults = [...products]; // Create a separate array to hold search results

// Function to display search results
function displayResults(results) {
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = '';

    if (results.length === 0) {
        searchResultsDiv.innerHTML = '<p>No results found.</p>';
        return;
    }

    const ul = document.createElement('ul');
    results.forEach((product) => {
        const li = document.createElement('li');

        const img = document.createElement('img');
        img.src = product.imageUrl;
        li.appendChild(img);

        const nameDiv = document.createElement('div');
        nameDiv.textContent = product.name;
        li.appendChild(nameDiv);


        const priceDiv = document.createElement('div');
        priceDiv.textContent = product.price;
        li.appendChild(priceDiv);

        ul.appendChild(li);
    });

    searchResultsDiv.appendChild(ul);
}

// Function to handle search input and display results
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    searchResults = products.filter((product) => product.name.toLowerCase().includes(searchTerm));
    displayResults(searchResults);
}

// Function to reset the search
function resetSearch() {
    document.getElementById('searchInput').value = ''; // Clear search input
    searchResults = [...products]; // Restore original products array
    displayResults(searchResults); // Display all products
    location.reload(); // Reload the page to revert to the default state  
}

// Event listener for the search input
document.getElementById('searchInput').addEventListener('input', handleSearch);

// Event listener for the close button
document.getElementById('closeButton').addEventListener('click', resetSearch);

var cart = []; // Array to store cart items


