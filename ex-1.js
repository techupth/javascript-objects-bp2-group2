// Exercise #1: Food Order
// ให้สร้าง Object ที่มีชื่อว่า foodOrder โดยมี Requirement ดังต่อไปนี้
// Object foodOrder ต้องไม่สามารถ Reassign ตัว Value ได้
// สร้าง Key orderNumber ที่มี Value เป็น "A0234"
// สร้าง Key address ที่มี Value เป็น "Bangkok"
// สร้าง Key paymentType ที่มี Value เป็น "Cash"
// สร้าง Key totalPrice ที่มี Value เป็น 4500
// สร้าง Key restaurantName ที่มี Value เป็น "MK"
// เมื่อสร้าง Object ที่มีชื่อว่า foodOrder เรียบร้อยแล้ว ให้ Reassign ตัว Value ของแต่ละ Key ดังต่อไปนี้
// ให้ Reassign ตัว Value ของ Key totalPrice เป็น 5000
// ให้ Reassign ตัว Value ของ Key paymentType เป็น "Credit Card"

// Start coding here
const foodOrder = {
  orderNumber: "A0234",
  address: "Bangkok",
  paymentType: "Cash",
  totalPrice: 4500,
  restaurantName: "MK",
};

foodOrder.totalPrice = 5000;
foodOrder.paymentType = "Credit Card";
console.log(foodOrder);
