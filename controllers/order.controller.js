const order = require('../models/order.model.js')
const Order = order();

const makeAnOrder = async (req, res) => {
      const order = new Order({
            subtotal: req.body.subtotal,
            service_fee: req.body.service_fee,
            tax: req.body.tax,
            total_amount: req.body.total_amount,
            address: req.body.address,
            phone_number: req.body.phone_number,
            order_date: req.body.order_date,
            customer_name: req.body.customer_name,
            customer_id: req.body.customer_id,
            cart_summary: req.body.cart_summary
      })
      try {
        const newOrder= await order.save()
        res.status(201).json(newOrder)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
    }

const getAllOrdersForUser = async (req, res) => {
    try{
      const customerId = req.params.id;
      const orders = await Order.find({ customer_id: customerId }).sort({ order_date: -1 });
  
      if (orders.length === 0) {
        return res.status(404).json({ message: "No orders found for this customer." });
      }
  
      res.status(200).json(orders);
    }catch (error) {
      res.status(500).json({ message: err.message })
    }
  }

module.exports = {
    makeAnOrder,
    getAllOrdersForUser
}