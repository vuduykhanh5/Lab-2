// Bai 1
// Sửa đoạn code sau để hoạt động đúng
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Hiện tại in ra 3,3,3
  }, 100);
}
// Yêu cầu: Sửa để in ra 0,1,2

// Bai 2
const student = {
  name: "ThuyTien",
  age: 20,
};

student.grade = "A";

student.age = 21;

console.log(student);

// Bai 3
// Tạo template cho email thông báo
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = `Chào ${user.firstName} ${user.lastName},

Cảm ơn bạn đã đặt hàng sản phẩm "${user.product}" với giá ${user.price.toLocaleString()} VND.
Đơn hàng của bạn được đặt vào ngày ${user.orderDate}.

Trân trọng,
Đội ngũ bán hàng`; // Viết template ở đây

console.log(emailTemplate);

// Bai 4
// Tạo HTML template cho card sản phẩm
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = `<div class="product-card" style="border: 1px solid #ccc; padding: 10px; width: 250px;">
  <h2>${product.name}</h2>
  <p>Giá gốc: ${product.price.toLocaleString()} VND</p>
  <p>Giảm giá: ${product.discount}%</p>
  <p><strong>Giá sau giảm: ${finalPrice.toLocaleString()} VND</strong></p>
  <p>Tình trạng: ${product.inStock ? "Còn hàng" : "Hết hàng"}</p>
</div>`; // Viết template ở đây

console.log(productCard);


// Bai 5
// Viết lại object sau sử dụng ES6 enhanced object literals
const width = 100;
const height = 200;
const color = "red";

const rectangle = {
  width,
  height,
  color,
  calculateArea() {
    return this.width * this.height;
  },
  describe() {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};

console.log(rectangle.calculateArea()); 
console.log(rectangle.describe());      

// Bai 6
const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

const config = {
  [`api_${env}_${version}`]: `https://api.example.com/${env}/${version}`,

  ...features.reduce((acc, feature) => {
    acc[`feature_${feature}`] = true; 
    return acc;
  }, {}),

  [`get${env.charAt(0).toUpperCase() + env.slice(1)}Config`]() {
    return {
      env,
      version,
      features,
    };
  },
};

console.log(config);
console.log(config[`getProductionConfig`]());
