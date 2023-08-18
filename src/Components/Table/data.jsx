export const userColumns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
        field: 'email',
        headerName: 'Mail Address',
        width: 200,
        editable: true,
    },
    {
        field: 'phone',
        headerName: 'Phone Number',
        width: 200,
        editable: true,
    },
    {
        field: 'country',
        headerName: 'Country',
        width: 100,
        editable: true,
    },
    {
        field: 'created',
        headerName: 'Joined Date',
        width: 100,
        editable: true,
    },
    {
        field: 'customer',
        headerName: 'Ordered',
        type: "boolean",
        width: 70,
        editable: true,
    },
    
  ];
  
  export const userRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true },
    { id: 4, lastName: 'Stark', firstName: 'Arya',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:false  },
    { id: 6, lastName: 'Melisandre', firstName: 'Dennis',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:false  },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true  },
    { id: 8, lastName: 'Frances', firstName: 'Rossini',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:false  },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true  },
  ];

  export const prodColumns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'name',
      headerName: 'Product Name',
      width: 150,
      editable: true,
    },
    {
        field: 'source',
        headerName: 'Supplier',
        width: 150,
        editable: true,
    },
    {
        field: 'market',
        headerName: 'Market',
        headerAlign: "left",
        width: 150,
        editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: "number",
      headerAlign: "center",
      align: "center",
      width: 100,
      editable: true,
    },
    {
      field: 'profit',
      headerName: 'Profit',
      type: "number",
      headerAlign: "center",
      align: "center",
      width: 100,
      editable: true,
    },
    {
        field: 'sold',
        headerName: 'Sold Units',
        type: "number",
        align: "center",
        width: 100,
        editable: true,
    },
    {
        field: 'created',
        headerName: 'Add Date',
        headerAlign: "center",
        align: "center",
        width: 150,
        editable: true,
    },
    {
      field: 'stock',
      headerName: 'In Stock Units',
      type: "number",
      align: "center",
      width: 100,
      editable: true,
  },
    
  ];
  
  export const prodRows = [
    { id: 1, name: 'Spray', source: "AliExpress",market: "Woo",price: 25, profit: 11 * 25 ,sold: 11,created:"22/10/2023", stock: 32},
    { id: 2, name: 'Fan', source: "Etsy",market: "Amazon",price: 35, profit: 14 * 35, sold: 14,created:"22/10/2023", stock: 72},
    { id: 3, name: 'Wallet', source: "AliExpress",market: "Shopify",price: 14, profit: 19 * 14, sold: 19,created:"22/10/2023", stock: 115},
    { id: 4, name: 'Phone case', source: "Banggood",market: "Woo",price: 33, profit: 32 * 33, sold: 32,created:"22/10/2023", stock: 0},
    { id: 5, name: 'Vitamin', source: "DHGate",market: "Hepsiburada",price: 14, profit: 91 * 14, sold: 91,created:"22/10/2023", stock: 332},
    { id: 6, name: 'Perfume', source: "TaoBao",market: "Amazon",price: 15, profit: 15 * 15, sold: 15,created:"22/10/2023", stock: 24},
    { id: 7, name: 'Mystery Box', source: "AliExpress",market: "Ebay",price: 29, profit: 41 * 29, sold: 41,created:"22/10/2023", stock: 82},
    ];

    export const intgColumns = [
      { field: 'id', headerName: 'ID', width: 50 },
      {
        field: 'name',
        headerName: 'Product Name',
        width: 150,
        editable: true,
      },
      {
          field: 'source',
          headerName: 'Supplier',
          width: 150,
          editable: true,
      },
      {
          field: 'market',
          headerName: 'Market',
          headerAlign: "left",
          width: 150,
          editable: true,
      },
      {
        field: 'price',
        headerName: 'Price',
        type: "number",
        headerAlign: "center",
        align: "center",
        width: 100,
        editable: true,
      },
      {
        field: 'profit',
        headerName: 'Profit',
        type: "number",
        headerAlign: "center",
        align: "center",
        width: 100,
        editable: true,
      },
      {
          field: 'sold',
          headerName: 'Sold Units',
          type: "number",
          align: "center",
          width: 100,
          editable: true,
      },
      {
          field: 'created',
          headerName: 'Add Date',
          headerAlign: "center",
          align: "center",
          width: 150,
          editable: true,
      },
      {
        field: 'stock',
        headerName: 'In Stock Units',
        type: "number",
        align: "center",
        width: 100,
        editable: true,
    },
      
    ];
    
    export const intgRows = [
      { id: 1, name: 'Spray', source: "AliExpress",market: "Woo",price: 25, profit: 11 * 25 ,sold: 11,created:"22/10/2023", stock: 32},
      { id: 2, name: 'Fan', source: "Etsy",market: "Amazon",price: 35, profit: 14 * 35, sold: 14,created:"22/10/2023", stock: 72},
      { id: 3, name: 'Wallet', source: "AliExpress",market: "Shopify",price: 14, profit: 19 * 14, sold: 19,created:"22/10/2023", stock: 115},
      { id: 4, name: 'Phone case', source: "Banggood",market: "Woo",price: 33, profit: 32 * 33, sold: 32,created:"22/10/2023", stock: 0},
      { id: 5, name: 'Vitamin', source: "DHGate",market: "Hepsiburada",price: 14, profit: 91 * 14, sold: 91,created:"22/10/2023", stock: 332},
      { id: 6, name: 'Perfume', source: "TaoBao",market: "Amazon",price: 15, profit: 15 * 15, sold: 15,created:"22/10/2023", stock: 24},
      { id: 7, name: 'Mystery Box', source: "AliExpress",market: "Ebay",price: 29, profit: 41 * 29, sold: 41,created:"22/10/2023", stock: 82},
      ];