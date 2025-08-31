const { createApp } = Vue;

createApp({
  data() {
    return {
      cartCount: 0,
      showProducts: true,
      discount: 10,
      products: [
        { id: 1, name: "Laptop", price: 800, inStock: true, description: "High performance laptop", image: "https://images.pexels.com/photos/4884107/pexels-photo-4884107.jpeg", inCart: false },
        { id: 2, name: "Mouse", price: 25, inStock: true, description: "Wireless mouse", image: "https://images.pexels.com/photos/20510003/pexels-photo-20510003.jpeg", inCart: false },
        { id: 3, name: "Keyboard", price: 45, inStock: false, description: "Mechanical keyboard", image: "https://images.pexels.com/photos/16222011/pexels-photo-16222011.jpeg", inCart: false },
        { id: 4, name: "Monitor", price: 120, inStock: true, description: "HD monitor", image: "https://images.pexels.com/photos/5082554/pexels-photo-5082554.jpeg", inCart: false },
        { id: 5, name: "USB Cable", price: 5, inStock: false, description: "Durable USB cable", image: "https://tse3.mm.bing.net/th/id/OIP.ScFD7WaUk8wH2ecNIdDr8wHaHa?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3", inCart: false }
      ]
    }
  },
  methods: {
    addToCart(product) {
      if (!product.inCart) {
        product.inCart = true;
        this.cartCount++;
        alert(`${product.name} added to cart!`);
      }
    },
    removeFromCart(product) {
      if (product.inCart) {
        product.inCart = false;
        this.cartCount--;
      }
    }
  },
  computed: {
    totalPrice() {
      return this.products.reduce((sum, p) => p.inCart ? sum + p.price : sum, 0);
    }
  }
}).mount('#app');
