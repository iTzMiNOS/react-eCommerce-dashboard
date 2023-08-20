import { createServer, Model } from "miragejs"


createServer({
  models: {
    customers: Model,
    products: Model,
    integrations: Model,
    profiles: Model,
    orders: Model,
    transactions: Model,
  },

  routes() {
    this.namespace = "api"



    //customers
    // eslint-disable-next-line no-unused-vars
    this.get("/customers", (schema, request) => {
      return schema.customers.all()
    })
    this.get("/customers/:id", (schema, request) => {
      let id = request.params.id
    
      return schema.customers.find(id)
    })
    
    this.post("/customers", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
    
      return schema.customers.create(attrs)
    })
    
    this.patch("/customers/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody)
      let id = request.params.id
      let customer = schema.customer.find(id)
    
      return customer.update(newAttrs)
    })
    this.delete("/customers/:id", (schema, request) => {
      let id = request.params.id
    
      return schema.customers.find(id).destroy()
    })

    //products
    // eslint-disable-next-line no-unused-vars
    this.get("/products", (schema, request) => {
      return schema.products.all()
    })
    this.get("/products/:id", (schema, request) => {
      let id = request.params.id
    
      return schema.products.find(id)
    })
    
    this.post("/products", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
    
      return schema.products.create(attrs)
    })
    
    this.patch("/products/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody)
      let id = request.params.id
      let product = schema.product.find(id)
    
      return product.update(newAttrs)
    })
    this.delete("/products/:id", (schema, request) => {
      let id = request.params.id
    
      return schema.products.find(id).destroy()
    })

    //integrations
    // eslint-disable-next-line no-unused-vars
    this.get("/integrations", (schema, request) => {
      return schema.integrations.all()
    })
    this.get("/integrations/:id", (schema, request) => {
      let id = request.params.id
    
      return schema.integrations.find(id)
    })
    
    this.post("/integrations", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
    
      return schema.integrations.create(attrs)
    })
    
    this.patch("/integrations/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody)
      let id = request.params.id
      let integration = schema.integration.find(id)
    
      return integration.update(newAttrs)
    })
    this.delete("/integrations/:id", (schema, request) => {
      let id = request.params.id
    
      return schema.integrations.find(id).destroy()
    })


    //profile
    // eslint-disable-next-line no-unused-vars
    this.get("/profiles", (schema) => {
      const profile = schema.profiles.first();
      return profile;
    });
    
    this.patch("/profiles", (schema, request) => {
      const newAttrs = JSON.parse(request.requestBody);
      const profile = schema.profiles.first();
      return profile.update(newAttrs);
    });
    
    //orders
    // eslint-disable-next-line no-unused-vars
    this.get("/orders", (schema, request) => {
      return schema.orders.all()
    })
    this.get("/orders/:id", (schema, request) => {
      let id = request.params.id
    
      return schema.orders.find(id)
    })
    
    this.post("/orders", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
    
      return schema.orders.create(attrs)
    })
    
    this.patch("/orders/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody)
      let id = request.params.id
      let order = schema.order.find(id)
    
      return order.update(newAttrs)
    })
    this.delete("/orders/:id", (schema, request) => {
      let id = request.params.id
    
      return schema.orders.find(id).destroy()
    })


    //transactions
    // eslint-disable-next-line no-unused-vars
    this.get("/transactions", (schema, request) => {
      return schema.transactions.all()
    })
    this.get("/transactions/:id", (schema, request) => {
      let id = request.params.id
    
      return schema.transactions.find(id)
    })
    
    this.post("/transactions", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
    
      return schema.transactions.create(attrs)
    })
    
    this.patch("/transactions/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody)
      let id = request.params.id
      let transaction = schema.transaction.find(id)
    
      return transaction.update(newAttrs)
    })
    this.delete("/transactions/:id", (schema, request) => {
      let id = request.params.id
    
      return schema.transactions.find(id).destroy()
    })


  },
  

  seeds(server) {
    //customers
    server.create("customer", { id: 1, lastName: 'Snow', firstName: 'Jon', email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true })
    server.create("customer", { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true })
    server.create("customer", { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true })
    server.create("customer", { id: 4, lastName: 'Stark', firstName: 'Arya',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true })
    server.create("customer", { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:false  })
    server.create("customer", { id: 6, lastName: 'Melisandre', firstName: 'Dennis',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:false  })
    server.create("customer", { id: 7, lastName: 'Clifford', firstName: 'Ferrara',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true  })
    server.create("customer", { id: 8, lastName: 'Frances', firstName: 'Rossini',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:false  })
    server.create("customer", { id: 9, lastName: 'Roxie', firstName: 'Harvey',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true  })
    
    //products
    server.create("product", { id: 1, name: 'Spray', source: "AliExpress",market: "Woo",price: 25, profit: 11 * 25 ,sold: 11,created:"22/10/2023", stock: 32})
    server.create("product", { id: 2, name: 'Fan', source: "Etsy",market: "Amazon",price: 35, profit: 14 * 35, sold: 14,created:"22/10/2023", stock: 72})
    server.create("product", { id: 3, name: 'Wallet', source: "AliExpress",market: "Shopify",price: 14, profit: 19 * 14, sold: 19,created:"22/10/2023", stock: 115})
    server.create("product", { id: 4, name: 'Phone case', source: "Banggood",market: "Woo",price: 33, profit: 32 * 33, sold: 32,created:"22/10/2023", stock: 0})
    server.create("product", { id: 5, name: 'Vitamin', source: "DHGate",market: "Hepsiburada",price: 14, profit: 91 * 14, sold: 91,created:"22/10/2023", stock: 332})
    server.create("product", { id: 6, name: 'Perfume', source: "TaoBao",market: "Amazon",price: 15, profit: 15 * 15, sold: 15,created:"22/10/2023", stock: 24})
    server.create("product", { id: 7, name: 'Mystery Box', source: "AliExpress",market: "Ebay",price: 29, profit: 41 * 29, sold: 41,created:"22/10/2023", stock: 82})
    
    //integrations
    server.create("integration", {id: 1, dispName: "myshop.com", shopAddress: "woocommerece.myshop.com", activeAPI: true, sync: false, visits: 364, orders: 14})
    server.create("integration", {id: 2, dispName: "yourshop.com", shopAddress: "amazon.yourshop.com", activeAPI: true, sync: true, visits: 64, orders: 4})
    server.create("integration", {id: 3, dispName: "ourshop.com", shopAddress: "shopify.ourshop.com", activeAPI: false, sync: true, visits: 245, orders: 54})
    server.create("integration", {id: 4, dispName: "hesshop.com", shopAddress: "etsy.hesshop.com", activeAPI: false, sync: false, visits: 454, orders: 32})
    server.create("integration", {id: 5, dispName: "shesshop.com", shopAddress: "ebay.shesshop.com", activeAPI: true, sync: false, visits: 74, orders: 10})
    server.create("integration", {id: 6, dispName: "theirshop.com", shopAddress: "hepsiburada.theirshop.com", activeAPI: true, sync: true, visits: 38, orders: 0})
    server.create("integration", {id: 7, dispName: "justshop.com", shopAddress: "trendyol.justshop.com", activeAPI: true, sync: true, visits: 105, orders: 4})
    
    //profile
    server.create("profile", {id: 1, name: "Name LastName",imgUrl:"https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", mailAddress: "name@mail.com", password:"somehash", subscription: "GOLD", integrations: 7, valid: "22/10/2024"})

    //orders
    server.create("order", { id: 1, name: 'Spray', source: "AliExpress",market: "Woo",price: 25, profit: 4 ,created:"22/10/2023", customer: "jake", shipped: true})
    server.create("order", { id: 2, name: 'Fan', source: "Etsy",market: "Amazon",price: 35, profit: 14, created:"22/10/2023", customer: "joan", shipped: false})
    server.create("order", { id: 3, name: 'Wallet', source: "AliExpress",market: "Shopify",price: 14, profit: 19, created:"22/10/2023", customer: "raze", shipped: true})
    server.create("order", { id: 4, name: 'Phone case', source: "Banggood",market: "Woo",price: 33, profit: 32, created:"22/10/2023", customer: "pete", shipped: false})
    server.create("order", { id: 5, name: 'Vitamin', source: "DHGate",market: "Hepsiburada",price: 14, profit: 91, created:"22/10/2023", customer: "dave", shipped: false})
    server.create("order", { id: 6, name: 'Perfume', source: "TaoBao",market: "Amazon",price: 15, profit: 15, created:"22/10/2023", customer: "joe", shipped: true})
    server.create("order", { id: 7, name: 'Mystery Box', source: "AliExpress",market: "Ebay",price: 29, profit: 41 ,created:"22/10/2023", customer: "shakil", shipped: true})
    
    //transactions
    server.create("transaction", {
      id: 1,
      name: "customer 1",
      platform: "wooCommerce",
      value: "149.99",
    })
    server.create("transaction", {
      id: 2,
      name: "customer 2",
      platform: "Amazon",
      value: "49.99",
    })
    server.create("transaction", {
      id: 3,
      name: "customer 3",
      platform: "Ebay",
      value: "199.99",
    })
    server.create("transaction", {
      id: 4,
      name: "customer 4",
      platform: "Shopify",
      value: "9.99",
    })
    server.create("transaction", {
      id: 5,
      name: "customer 5",
      platform: "Hepsiburada",
      value: "1149.99",
    })
    server.create("transaction", {
      id: 6,
      name: "customer 6",
      platform: "Shopify",
      value: "209.99",
    })
    server.create("transaction", {
      id: 7,
      name: "customer 7",
      platform: "wooCommerce",
      value: "349.99",
    })


  },
})