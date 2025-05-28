// 문제1. 상품(Product)과 할인(Discount) 정보를 병합하여 새로운 타입을 정의하고,
// 할인 적용 후의 가격을 계산하는 함수를 작성하세요.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Discount 타입 정의
// 여기에 작성
function calculateDiscountedPrice(item) {
    // 여기에 구현
    return item.price - item.price * item.discountPercentage * 0.01;
}
// 테스트 코드
var discountedProduct = {
    id: 101,
    name: "Laptop",
    price: 1000,
    discountPercentage: 20,
};
console.log(calculateDiscountedPrice(discountedProduct)); // 800
function printOrderSummary(order) {
    // 여기에 구현
    return "Order ".concat(order.orderId, " (Phone: ").concat(order.phone, ")");
}
// 테스트 코드
var orderDetails = {
    phone: "123-456-7890",
    address: "123 Main St",
    orderId: 2023,
    items: ["Laptop", "Mouse"],
};
console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"
// 사용자 데이터를 병합하는 함수
function mergeUserData(profile /* 여기에 작성 */, activity /* 여기에 작성 */) {
    // 여기에 구현
    return __assign(__assign({}, profile), activity);
}
// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user) {
    // 여기에 구현
    return "\uC0AC\uC6A9\uC790 ".concat(user.id, " - ").concat(user.name, " (").concat(user.email, ") - \uB9C8\uC9C0\uB9C9 \uB85C\uADF8\uC778: ").concat(user.lastLogin.toISOString());
}
// 테스트 코드
var profile = { id: 1, name: "Alice", email: "alice@example.com" };
var activity = {
    lastLogin: new Date("2024-01-01T10:00:00Z"),
    actions: ["login", "viewed dashboard", "logout"],
};
var mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"
// 문제 1. 다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하세요.
// 입력은 다음 세 가지 형태 중 하나입니다
// 숫자 배열: 배열의 합계를 반환합니다.
// 문자열 배열: 배열의 모든 문자열을 연결한 결과를 반환합니다.
// 객체 { message: string }: message 속성을 대문자로 변환한 문자열을 반환합니다.
// 매개변수, 리턴타입 정의필요
function processInput(input) {
    // 여기에 작성
    if (Array.isArray(input)) {
        if (input.length === 0)
            return "";
        if (typeof input[0] === "number")
            return input.reduce(function (input, curr) { return input + curr; }, 0);
        else if (typeof input[0] === "string")
            return input.join("");
    }
    else if (typeof input === "object" && "message" in input)
        return input.message.toUpperCase();
    throw new Error("에러 발생");
}
// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
// 문제2. 다음 조건을 만족하는 코드를 작성하세요.
// 아래와 같은 두 개의 클래스를 정의합니다:
// Car 클래스: brand(브랜드 이름, 문자열) 속성을 가집니다.
// Bike 클래스: type(바이크 종류, 문자열) 속성을 가집니다.
// 입력값이 Car 또는 Bike의 인스턴스일 수 있는 vehicle을 받아 다음 규칙에 따라 처리하는 함수를 작성하세요:
// Car이면 브랜드 이름을 대문자로 반환합니다.
// Bike이면 바이크 종류 앞에 "Bike: "를 추가하여 반환합니다.
// 클래스 정의
// 여기에 작성
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike(type) {
        this.type = type;
    }
    return Bike;
}());
function processVehicle(vehicle) {
    // 여기에 구현
    if (vehicle instanceof Car)
        return vehicle.brand.toUpperCase();
    else if (vehicle instanceof Bike)
        return "Bike: ".concat(vehicle.type);
    else
        throw new Error("에러 발생");
}
// 테스트 코드
var myCar = new Car("Tesla");
var myBike = new Bike("Mountain");
console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
function processUser(user) {
    // 여기에 작성
    if ("permissions" in user)
        return user.permissions.join(',');
    else if ("email" in user)
        return user.email;
    else
        throw new Error("Unknown user!");
}
// 테스트 코드
console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"
console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"
// 사용자 정의 타입 가드
function isRectangle(shape) {
    // 여기에 작성
    return shape.width !== undefined && shape.height !== undefined;
}
function isCircle(shape) {
    return shape.radius !== undefined;
}
function calculateArea(shape) {
    // 여기에 작성
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    else if (isCircle(shape)) {
        return Math.PI * shape.radius * shape.radius;
    }
    throw new Error("Error! Shape is unknown.");
}
// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)
// 넓이를 계산하는 함수
function calculateArea1(shape) {
    // 여기에 구현
    switch (shape.type) {
        case "square":
            return shape.side * shape.side;
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        default:
            var _exhaustiveCheck = shape;
            throw new Error("Unhandled shape type: ".concat(_exhaustiveCheck));
    }
}
// 테스트 코드
console.log(calculateArea1({ type: "square", side: 5 })); // 25
console.log(calculateArea1({ type: "circle", radius: 7 })); // 153.93804002589985
