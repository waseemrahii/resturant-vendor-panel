"use client"

import { useState } from "react"

const SellerAnalytics = () => {
  const [timeRange, setTimeRange] = useState('week');
  
  // Mock data for analytics
  const analyticsData = {
    day: {
      revenue: 450,
      orders: 18,
      averageOrder: 25,
      newCustomers: 5,
      topSellingItems: [
        { name: 'Chicken Burger', quantity: 8, revenue: 96 },
        { name: 'French Fries', quantity: 12, revenue: 48 },
        { name: 'Coke', quantity: 15, revenue: 45 }
      ],
      revenueChange: 5,
      ordersChange: 10,
      customersChange: -2,
      hourlyOrders: [
        { hour: 10, orders: 2 },
        { hour: 11, orders: 3 },
        { hour: 12, orders: 5 },
        { hour: 13, orders: 3 },
        { hour: 14, orders: 1 },
      ]
    }
  };
