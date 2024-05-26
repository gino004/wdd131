// const products = [{
//         id: fc - 1888,
//         name: "flux capacitor",
//         avg - rating: 4.5
//     },
//     {
//         id: fc - 2050,
//         name: "power laces",
//         averagerating: 4.7
//     },
//     {
//         id: fs - 1987,
//         name: "time circuits",
//         averagerating: 3.5
//     },
//     {
//         id: ac - 2000,
//         name: "low voltage reactor",
//         averagerating: 3.9
//     },
//     {
//         id: jj - 1969,
//         name: "warp equalizer",
//         averagerating: 5.0
//     }
// ];
const products = [{
        id: "fc-1888",
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avgRating: 5.0
    }
];



document.addEventListener('DOMContentLoaded', (event) => {
    const productSelect = document.getElementById('productSelect');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    const form = document.getElementById('productForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío normal del formulario

        // Incrementar el contador en localStorage
        let reviewCount = localStorage.getItem('reviewCount');
        reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
        localStorage.setItem('reviewCount', reviewCount);

        // Redirigir a review.html
        window.location.href = 'review.html';
    });
});