export default function useLocalData () {
  const sidebarMenuList = [
    { name: 'Dashboard', link: '/', icon: '/dashboard.png' },
    { name: 'Products', link: '/products', icon: '/products.png' },
    { name: 'Customers', link: '/customers', icon: '/customers.png' },
    {
      name: 'Subscriptions',
      link: '/subscriptions',
      icon: '/subscriptions.png',
    },
    { name: 'Invoices', link: '/invoices', icon: '/invoices.png' },
    { name: 'Plans', link: '/plans', icon: '/customers.png' },
    { name: 'Inventories', link: '/inventories', icon: '/payments.png' },
    { name: 'Taxes', link: '/taxes', icon: '/reports.png' },
  ]
  return { sidebarMenuList }
}
