// 문제1. 상품(Product)과 할인(Discount) 정보를 병합하여 새로운 타입을 정의하고,
// 할인 적용 후의 가격을 계산하는 함수를 작성하세요.

// Product 타입:
// id: 숫자
// name: 문자열
// price: 숫자

// Discount 타입:
// discountPercentage: 숫자
// Product & Discount 타입을 기반으로 할인된 가격을 반환하는 함수를 작성하세요:

// 함수 이름: calculateDiscountedPrice
// 입력: 교차 타입 객체
// 출력: 할인된 가격(숫자)

// Product 타입 정의
// 여기에 작성
type Product = {
  id: number;
  name: string;
  price: number;
};

type Discount = {
  discountPercentage: number;
};

// Discount 타입 정의
// 여기에 작성

function calculateDiscountedPrice(item: Product & Discount): number {
  // 여기에 구현
  return item.price - item.price * item.discountPercentage * 0.01;
}

// 테스트 코드
const discountedProduct: Product & Discount = {
  id: 101,
  name: "Laptop",
  price: 1000,
  discountPercentage: 20,
};

console.log(calculateDiscountedPrice(discountedProduct)); // 800

// 문제2. 아래의 조건에 따라 복합 데이터를 처리하는 타입을 정의하고, 관련된 함수를 작성하세요.

// ContactInfo 타입:
// phone: 문자열
// address: 문자열

// OrderInfo 타입:
// orderId: 숫자
// items: 문자열 배열

// ContactInfo & OrderInfo 타입을 기반으로, 주문 요약 정보를 출력하는 함수를 작성하세요:

// 함수 이름: printOrderSummary
// 입력: 교차 타입 객체
// 출력: 전화번호와 주문 아이디를 포함한 문자열

// ContactInfo 타입 정의
// 여기에 작성
type ContactInfo = {
  phone: string;
  address: string;
};

// OrderInfo 타입 정의
// 여기에 작성
type OrderInfo = {
  orderId: number;
  items: string[];
};

function printOrderSummary(order: ContactInfo & OrderInfo): string {
  // 여기에 구현
  return `Order ${order.orderId} (Phone: ${order.phone})`;
}

// 테스트 코드
const orderDetails: ContactInfo & OrderInfo = {
  phone: "123-456-7890",
  address: "123 Main St",
  orderId: 2023,
  items: ["Laptop", "Mouse"],
};

console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"

// 문제3. 사용자 프로필과 활동 기록 병합

// 기본 사용자 정보(Profile):
//     * id: 사용자 고유 ID (숫자)
//     * name: 사용자 이름 (문자열)
//     * email: 이메일 주소 (문자열)

// 사용자 활동 기록(Activity):
//     * lastLogin: 마지막 로그인 시간 (Date 객체)
//     * actions: 사용자가 수행한 작업 목록 (문자열 배열)

// Profile & Activity 타입을 기반으로 다음 요구사항을 만족하는 코드를 작성하세요:

// mergeUserData: 사용자 프로필과 활동 기록을 병합하여 새로운 객체를 반환하는 함수.
// getUserSummary: 병합된 데이터를 입력받아 사용자 요약 정보를 반환하는 함수:
// * 출력 형식: "사용자 [id] - [name] ([email]) - 마지막 로그인: [lastLogin]"

// 기본 사용자 정보 타입 정의
// 여기에 작성
type Profile = {
  id: number;
  name: string;
  email: string;
};

// 사용자 활동 기록 타입 정의
// 여기에 작성
type Activity = {
  lastLogin: Date;
  actions: string[];
};

// 사용자 데이터를 병합하는 함수
function mergeUserData(
  profile: Profile /* 여기에 작성 */,
  activity: Activity /* 여기에 작성 */
): Profile & Activity {
  // 여기에 구현
  return { ...profile, ...activity };
}

// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user: Profile & Activity): string {
  // 여기에 구현
  return `사용자 ${user.id} - ${user.name} (${
    user.email
  }) - 마지막 로그인: ${user.lastLogin.toISOString()}`;
}

// 테스트 코드
const profile: Profile = { id: 1, name: "Alice", email: "alice@example.com" };
const activity: Activity = {
  lastLogin: new Date("2024-01-01T10:00:00Z"),
  actions: ["login", "viewed dashboard", "logout"],
};

const mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"

// 문제 1. 다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하세요.

// 입력은 다음 세 가지 형태 중 하나입니다

// 숫자 배열: 배열의 합계를 반환합니다.
// 문자열 배열: 배열의 모든 문자열을 연결한 결과를 반환합니다.
// 객체 { message: string }: message 속성을 대문자로 변환한 문자열을 반환합니다.

// 매개변수, 리턴타입 정의필요
function processInput(
  input: number[] | string[] | { message: string }
): number | string {
  // 여기에 작성

  if (Array.isArray(input)) {
    if (input.length === 0) return "";
    if (typeof input[0] === "number")
      return (input as number[]).reduce((input, curr) => input + curr, 0);
    else if (typeof input[0] === "string") return (input as string[]).join("");
  } else if (typeof input === "object" && "message" in input)
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
class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
}

class Bike {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
}

function processVehicle(vehicle: Car | Bike): string {
  // 여기에 구현
  if (vehicle instanceof Car) return vehicle.brand.toUpperCase();
  else if (vehicle instanceof Bike) return `Bike: ${vehicle.type}`;
  else throw new Error("에러 발생");
}

// 테스트 코드
const myCar = new Car("Tesla");
const myBike = new Bike("Mountain");

console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"

// 문제3. in을 활용한 사용자 관리
// 시스템에는 두 종류의 사용자가 있습니다:

// Admin 사용자: { type: "admin"; permissions: string[] }
// User 사용자: { type: "user"; email: string }
// processUser라는 함수를 작성하세요. 함수는 입력으로 Admin 또는 User 객체를 받아 다음과 같이 처리합니다:

// Admin: 권한 목록(permissions)을 ,로 연결한 문자열을 반환합니다.
// User: 이메일 주소(email)을 반환합니다.

type Admin = { type: "admin"; permissions: string[] };
type User = { type: "user"; email: string };

function processUser(user: Admin | User): string {

  // 여기에 작성
  if ("permissions" in user) return user.permissions.join(',');
  else if ("email" in user) return user.email;
  else throw new Error("Unknown user!")

}

// 테스트 코드
console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"
console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"

//문제 4. 아래와 같은 유니온 타입을 처리하는 함수를 작성하세요:
// Rectangle 객체: { width: number; height: number }
// Circle 객체: { radius: number }
// 함수는 다음 규칙에 따라 동작합니다:

// Rectangle이면 넓이를 반환합니다. (가로 × 세로)
// Circle이면 넓이를 반환합니다. (π × 반지름²)

type Rectangle = { width: number; height: number };
type Circle = { radius: number };

// 사용자 정의 타입 가드
function isRectangle(shape: unknown): shape is Rectangle {
  // 여기에 작성
    return (shape as Rectangle).width !== undefined && (shape as Rectangle).height !== undefined
}

function isCircle(shape: unknown): shape is Circle {
    return (shape as Circle).radius !== undefined 
}

function calculateArea(shape: Rectangle | Circle): number {
  // 여기에 작성
  if(isRectangle(shape)){
    return shape.width * shape.height
  }
  else if(isCircle(shape)){
    return Math.PI*shape.radius*shape.radius
  }
  
  throw new Error("Error! Shape is unknown.")
}

// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)

// 유니온 타입의 문제점
// 아래와 같은 두 가지 유니온 타입을 처리하는 함수가 있습니다:

type Square = { type: "square"; side: number }
type Circle1 = { type: "circle"; radius: number }

// calculateArea라는 함수는 두 타입의 넓이를 계산하려고 하지만, 유니온 타입을 제대로 처리하지 않고 사용할 경우 
// 런타임 에러가 발생할 가능성이 생길 수 있다. 이를 해결 방법을 작성하세요.
// 해결 방법:
// 식별 가능한 유니온(type 속성)을 사용하여 타입을 안전하게 좁히는 코드를 작성하세요.
// exhaustiveness check를 추가하여, 새로운 타입이 추가되더라도 타입 안정성을 유지하도록 구현하세요.

type Shape = Square | Circle1;

// 넓이를 계산하는 함수
function calculateArea1(shape: Shape): number {
  // 여기에 구현
  switch(shape.type){
    case "square":
        return shape.side * shape.side
    case "circle":
        return Math.PI * shape.radius * shape.radius
    default:
        const _exhaustiveCheck: never = shape;
        throw new Error(`Unhandled shape type: ${_exhaustiveCheck}`);
  }
}

// 테스트 코드
console.log(calculateArea1({ type: "square", side: 5 })); // 25
console.log(calculateArea1({ type: "circle", radius: 7 })); // 153.93804002589985
