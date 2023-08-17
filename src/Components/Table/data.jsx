export const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
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
  
  export const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];