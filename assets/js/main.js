function toggleNav() {
    const sidebar = document.getElementById("navMenu");
    sidebar.classList.toggle("nav-ver-open");
}

function redirectToWhatsApp(productName, productId, productPrice) {
    // Reemplaza con tu número de WhatsApp (incluye código de país)
    const phoneNumber = "5355105070"; // Ejemplo: 521234567890 para México
    
    // Mensaje personalizado con los detalles del producto
    const message = `¡Hola! Estoy interesado en comprar el siguiente producto:%0A%0A` +
                    `*Nombre:* ${productName}%0A` +
                    `*ID:* ${productId}%0A` +
                    `*Precio:* $${productPrice}%0A%0A` +
                    `Por favor, proporcióneme más información.`;
    
    // Crear el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Redirigir al usuario
    window.open(whatsappUrl, '_blank');
}