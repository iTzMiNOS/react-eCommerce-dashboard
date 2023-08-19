export const singleCustomer = {
    id: 1,
    title: "Customer",
    chart: true,
    info: {
      username: "customer",
      fullname: "Customer Name",
      email: "customer@mail.com",
      phone: "321 452 4243",
      status: "verified",
    },
    datas: {
      dataKeys: [
        { id:1, name: "visits", color: "#82ca9d" },
        { id:2, name: "clicks", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300,
        },
      ],
    },
    activities: [
      {
        text: "Customer Name purchased Spray",
        time: "3 day ago",
      },
      {
        text: "Customer Name purchased Fan",
        time: "1 week ago",
      },
      {
        text: "Customer Name Verified their Email Address",
        time: "2 weeks ago",
      },
      {
        text: "Customer Name Verified their Payment Method",
        time: "1 month ago",
      },
      {
        text: "Customer Name Joined our Newsletter",
        time: "2 month ago",
      },
      {
        text: "Customer Name Joined",
        time: "2 months ago",
      },
    ],
  };
  export const singleProduct = {
    id: 1,
    title: "Spray",
    chart: true,
    info: {
      productId: "spray1",
      color: "white",
      price: "$14.99",
      producer: "gratis",
      export: "turkey",
    },
    datas: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "orders", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          orders: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          orders: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          orders: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          orders: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          orders: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          orders: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          orders: 4300,
        },
      ],
    },
    activities: [
      {
        text: "User 1 purchased Spray",
        time: "3 day ago",
      },
      {
        text: "User 2 purchased Spray",
        time: "1 week ago",
      },
      {
        text: "User 3 purchased Spray",
        time: "2 weeks ago",
      },
      {
        text: "User 4 reviewed the product",
        time: "1 month ago",
      },
      {
        text: "User 5 purchased Spray",
        time: "1 month ago",
      },
      {
        text: "User 6 reviewed the product",
        time: "2 months ago",
      },
    ],
  };

  export const singleInteg = {
    id: 1,
    title: "Woo",
    chart: true,
    info: {
      productId: "Woo1",
      color: "white",
      valid: "23/10/2024",
      created: "04/11/2023",
      link: "woo.myshop.com",
    },
    datas: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "orders", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          orders: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          orders: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          orders: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          orders: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          orders: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          orders: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          orders: 4300,
        },
      ],
    },
    activities: [
      {
        text: "2 New customers Joined",
        time: "3 day ago",
      },
      {
        text: "12 Orders was filled this week",
        time: "1 week ago",
      },
      {
        text: "6 Orders was filled this week",
        time: "2 weeks ago",
      },
      {
        text: "X plugin was added to platform",
        time: "1 month ago",
      },
      {
        text: "Platform Optimization Done",
        time: "1 month ago",
      },
      {
        text: "WooCommerce API Created Successfully",
        time: "2 months ago",
      },
    ],
  };

  export const singleOrder = {
    id: 1,
    title: "Spray",
    chart: false,
    info: {
      productId: "spray1",
      color: "white",
      price: "$14.99",
      producer: "gratis",
      export: "turkey",
    },
    datas: {
      dataKeys: [],
      data:[],
    },
    activities: [
      {
        text: "Joe wrote a review on item",
        time: "3 day ago",
      },
      {
        text: "Item Was received by Joe",
        time: "1 week ago",
      },
      {
        text: "Item Was Shipped to Joe",
        time: "2 weeks ago",
      },
      {
        text: "Order approved",
        time: "1 month ago",
      },
      {
        text: "Order Created",
        time: "1 month ago",
      },
    ],
  };