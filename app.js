document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos el formulario, el input de búsqueda y todos los productos
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-form input');
    const products = document.querySelectorAll('.card-product');

    // Prevenimos que el formulario recargue la página al presionar "Enter"
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    // Escuchamos el evento 'keyup' para filtrar en tiempo real mientras el usuario escribe
    searchInput.addEventListener('keyup', (e) => {
        // Obtenemos el texto de búsqueda y lo pasamos a minúsculas
        const searchTerm = e.target.value.toLowerCase();

        // Iteramos sobre cada producto
        products.forEach(product => {
            // Obtenemos el nombre del producto (dentro de la etiqueta h3)
            const productName = product.querySelector('h3').textContent.toLowerCase();

            // Verificamos si el nombre del producto incluye el texto de búsqueda
            if (productName.includes(searchTerm)) {
                // Si coincide, mostramos el producto (restauramos su display por defecto)
                product.style.display = ''; 
            } else {
                // Si no coincide, lo ocultamos
                product.style.display = 'none';
            }
        });
    });
});


