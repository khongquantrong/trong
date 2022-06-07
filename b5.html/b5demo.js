// Khai báo biến
var a = 10;
a = 20;

let b = 10;
b = 20;

const c = 10;

console.log(a);
// Thay thế bằng const hoặc let
// bỏ alert();
// bỏ thằng var
// sử dụng const và let khi nào?
// 90% Sử dụng const khi khai báo biến
// Sử dụng let khi giá trị sẽ thay đổi trong tương lai

// ===================================
// Kiểu dữ liệu nguyên thủy: number, string, boolean
// kiểu object, null, undefined
const myName = "Lê Trọng Đạt";
const myAge = 30;
const myChildren = ["Kien", "Dat"]; // myChildren[1] ~ Dat

const myInfo = {
  name: "Dat",
  age: 30,
  married: true,
  "Ma sinh vien": "PH12345"
}; // myInfo.name | myInfo["name"];

console.log("myinfo", myInfo["Ma sinh vien"]);
// ===================================
// Ví dụ 1

// Khai báo
const students = [
  { id: 1, code: "PH123", name: "Dat" }, // student
  { id: 2, code: "PH456", name: "Tung" }, // student
  { id: 3, code: "PH789", name: "Kien" } // student
];

// xử lý
let result = "";
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  result += `<div class="border p-4">
                <h2>Ho ten: ${student.name}</h2>
                <span>Ma sinh vien: ${student.code}</span>
            </div>`;
}
// Hiển thị
const studentElement = document.getElementById("student-list");
if (studentElement) {
  studentElement.innerHTML = result;
}

// Ví dụ 2
// khai báo
const menuList = [
  { id: 1, name: "Trang chủ", ref: "/" },
  { id: 2, name: "Giới thiệu", ref: "/about" }
];

// thực hiện,
let resultMenu = "";
for (let i = 0; i < menuList.length; i++) {
  const menu = menuList[i];
  resultMenu += `<li><a href="${menu.ref}">${menu.name}</a></li>`;
}

// hiển thị
const menuElement = document.querySelector("#menu");
if (menuElement) {
  menuElement.innerHTML = resultMenu;
}
