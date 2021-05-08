export const productMixins =  {
    data () {
      return {
        products: ['Iphone', 'Samsung', 'HTC', 'Nokia', 'Noway', 'Bphone', 'Realme'],
        filteredProduct: ''
      }
    },
    computed: {
      filteredProducts() {
        return this.products.filter((element) => {
          console.log(this.filteredProduct);
          return element.match(this.filteredProduct)
        })
      }
    }
  }