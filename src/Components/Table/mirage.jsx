import { createServer } from "miragejs"

createServer({
  routes() {
    this.namespace = "api"

    this.get("/users", () => {
      return {
        users:{
            rows: [
                    { id: 1, lastName: 'Snow', firstName: 'Jon', email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true },
                    { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true },
                    { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true },
                    { id: 4, lastName: 'Stark', firstName: 'Arya',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true },
                    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:false  },
                    { id: 6, lastName: 'Melisandre', firstName: 'Dennis',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:false  },
                    { id: 7, lastName: 'Clifford', firstName: 'Ferrara',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true  },
                    { id: 8, lastName: 'Frances', firstName: 'Rossini',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:false  },
                    { id: 9, lastName: 'Roxie', firstName: 'Harvey',  email: "test@mail.com",phone: "432 312 3456", country: "USA",created:"22/10/2023", customer:true  },
                ],
            cols: [
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
                
              ],
        }
      }
    })
  },
})