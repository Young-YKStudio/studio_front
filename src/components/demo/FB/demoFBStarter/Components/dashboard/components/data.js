export const ordersAPI = [
  {
    customer: {
      customerName: 'Jane Cooper',
      customerContact: '+1-202-555-0170',
      customerEmail: 'janeCooper@example.com',
    },
    order: {
      orderedItems: [
        {
          id: '01',
          name: 'Korea Town',
          price: 13.5
        },
        {
          id: '02',
          name: 'Dino Beef Short Rib combo for 2',
          price: 39
        }
      ],
    },
    reservations: [
      {
        reservationId: '00001',
        party: 4,
        reservedDate: '2022-02-17T13:24:00',
        reservedName: 'Annie',
        reservedContact: '+1-202-555-0170',
        comment: 'Window seat please',
        reservationStatus: 'New'
      },
    ],
    orderTotal: 52.5,
    orderTax: 0.0848,
    orderSubTotal: 56.95,
    orderType: 'GrubHub',
    orderState: 'New',
    isPaid: true,
    orderId: '00007',
    orderedWhen: '4m ago'
  },
  {
    customer: {
      customerName: 'John Smith',
      customerContact: '+1-202-555-0170',
      customerEmail: 'johnsmith@example.com',
    },
    order: {
      orderedItems: [
        {
          id: '01',
          name: '"BCR" Brisket, Chicken, Ribs',
          price: 110
        },
      ],
    },
    orderTotal: 110,
    orderTax: 0.0848,
    orderSubTotal: 119.33,
    orderType: 'Uber Eats',
    orderState: 'New',
    isPaid: true,
    orderId: '00006',
    orderedWhen: '5m ago'
  },
  {
    customer: {
      customerName: 'Chris Fisher',
      customerContact: '+1-202-555-0171',
      customerEmail: 'chrisFisher@example.com',
    },
    order: {
      orderedItems: [
        {
          id: '01',
          name: 'Dino Beef Short Rib combo for 2',
          price: 39
        },
        {
          id: '02',
          name: 'Tofu Banh Mi',
          price: 12.5
        },
        {
          id: '03',
          name: 'Dino Beef Short Rib combo for 3',
          price: 39
        },
      ],
    },
    reservations: [
      {
        reservationId: '00003',
        party: 6,
        reservedDate: '2022-02-17T13:24:00',
        reservedName: 'Chris',
        reservedContact: '+1-202-555-0171',
        comment: 'Quiet seat please',
        reservationStatus: 'New'
      },
    ],
    orderTotal: 51.5,
    orderTax: 0.0848,
    orderSubTotal: 55.87,
    orderType: 'DoorDash',
    orderState: 'New',
    isPaid: true,
    orderId: '00005',
    orderedWhen: '6m ago'
  },
  {
    customer: {
      customerName: 'Matt Bravery',
      customerContact: '+1-202-555-0172',
      customerEmail: 'mattBravery@example.com',
    },
    order: {
      orderedItems: [
        {
          id: '01',
          name: 'Fixer',
          price: 12.5
        },
        {
          id: '02',
          name: 'Jose Canseco',
          price: 13.5
        },
        {
          id: '03',
          name: 'Beef Bulgogi Hoagie',
          price: 14
        },
      ],
    },
    orderTotal: 40,
    orderTax: 0.0848,
    orderSubTotal: 40.4,
    orderType: 'Pick Up',
    orderState: 'New',
    isPaid: true,
    orderId: '00004',
    orderedWhen: '7m ago'
  },
  {
    customer: {
      customerName: 'Alex Myers',
      customerContact: '+1-202-555-0173',
      customerEmail: 'alexMyers@example.com',
    },
    order: {
      orderedItems: [
        {
          id: '01',
          name: 'Smoked Jackfruit Paneer Tikka Melt',
          price: 11.5
        },
        {
          id: '02',
          name: 'Dino Beef Short Rib combo for 2',
          price: 39
        },
      ],
    },
    orderTotal: 50.5,
    orderTax: 0.0848,
    orderSubTotal: 54.79,
    orderType: 'Delivery',
    orderState: 'Preparing',
    isPaid: false,
    orderId: '00003',
    orderedWhen: '8m ago'
  },
  {
    customer: {
      customerName: 'Mav Colins',
      customerContact: '+1-202-555-0174',
      customerEmail: 'mavColins@example.com',
    },
    order: {
      orderedItems: [
        {
          id: '01',
          name: 'Individually Packed BBQ sampler Platters',
          price: 26.5
        },
        {
          id: '02',
          name: 'Individually Packed 2 Meat Platters',
          price: 19.5
        },
      ],
    },
    orderTotal: 46,
    orderTax: 0.0848,
    orderSubTotal: 39.01,
    orderType: 'Pick Up',
    orderState: 'Ready',
    isPaid: false,
    orderId: '00002',
    orderedWhen: '9m ago'
  },
  {
    customer: {
      customerName: 'Ken Bryant',
      customerContact: '+1-202-555-0175',
      customerEmail: 'kenBryant@example.com',
    },
    order: {
      orderedItems: [
        {
          id: '01',
          name: 'Korea Town',
          price: 13.5
        },
        {
          id: '02',
          name: 'Fixer',
          price: 12.5
        },
      ],
    },
    orderTotal: 26,
    orderTax: 0.0848,
    orderSubTotal: 28.2,
    orderType: 'Uber Eats',
    orderState: 'Completed',
    isPaid: true,
    orderId: '00001',
    orderedWhen: '10m ago'
  },
]