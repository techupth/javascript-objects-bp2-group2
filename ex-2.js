// Exercise #2 Product
// ให้ Reassign ตัว Value ของ Key ratings เป็น 4.5
// ให้ Reassign ตัว Value ของ Key photo เป็น https://i01.appmifile.com/webfile/globalimg/products/pc/mi-air-purifier-3H/replace_03.jpg
// ให้สร้าง Key ใหม่ที่ชื่อว่า code ใน Variable product โดยมี Value เป็น IT0101010
// ให้ Reassign ตัว Value ของ Key price เป็น 6000
// ให้ลบ Key ratings ออกจาก Variable product
// ให้สร้าง Key ใหม่ ใน Variable productโดยใช้ Value จาก Variable socialMediaShare เพื่อสร้าง Key และ Assign ตัว Value ของ Key นั้น เป็น 45.5
const product = {
  name: "Xiaomi Air Purifier",
  price: 4000,
  ratings: 2.5,
  photo: null,
};
let socialMediaShare = "facebookShare";
// Start code here
product.ratings = 4.5;
product.photo =
  "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-air-purifier-3H/replace_03.jpg;";
product.code = "IT0101010";
product.price = 6000;
delete product.ratings;
product[socialMediaShare] = 45.5;
console.log(product);
