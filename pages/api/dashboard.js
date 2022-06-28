const data = {
  orderSummary: [
    {
      userName: 'Lian',
      quantity: '10',
      amount: '622322662'
    },
    {
      userName: 'Emma',
      quantity: '12',
      amount: '4564651'
    },
    {
      userName: 'Oliver',
      quantity: 'Williams',
      amount: '15'
    },
    {
      userName: 'Isabella',
      quantity: 'Brown',
      amount: '16'
    }
  ],
  subscriptionSummary: [
    {
      date: 'Lian',
      signUps: 'Smith',
      activation: '4654654',
      cancellations: '2',
      customers: '5'
    },
    {
      date: 'Emma',
      signUps: 'Johnson',
      activation: '56465464',
      cancellations: '2',
      customers: '5'
    },
    {
      date: 'Oliver',
      signUps: 'Williams',
      activation: '4654654',
      cancellations: '2',
      customers: '5'
    },
    {
      date: 'Isabella',
      signUps: 'Brown',
      activation: '4654654',
      cancellations: '2',
      customers: '5'
    }
  ],
  statistics: {
    totalCustomers: 205,
    newCustomers: 25,
    totalSubscriptions: 150,
    newSubscriptions: 25,
    totalProducts: 125,
    newProducts: 25,
    totalUnpaidInvoice: 90,
    newUnpaidInvoices: 25
  },
  signups: {
    today: 31,
    yesterday: 20,
    thisMonth: 7
  }
}
export default function handler (req, res) {
  res.status(200).json(data)
}
