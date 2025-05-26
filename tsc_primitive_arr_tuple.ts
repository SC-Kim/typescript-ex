// 문제 1. 다음 변수들의 타입을 지정해주세요
let userName: string; // 예: 이름
let userAge: number; // 예: 나이
let isAdmin: boolean; // 예: 관리자 여부

userName = "Alice";
userAge = 25;
isAdmin = true;

// 문제 2. 아래 변수들에 적절한 타입과 초기값을 지정하세요.
// 변수 선언과 초기값 지정
let productName: string = "Apple"; // 상품 이름
let productPrice: number = 100; // 상품 가격
let isAvailable: boolean = true; // 상품 재고 여부

// 예시 출력
console.log(`상품명: ${productName}, 가격: ${productPrice}, 재고 여부: ${isAvailable}`);

// 문제 3. 두 숫자를 더하는 함수를 작성하고, 함수의 매개변수와 반환값에 타입을 지정하세요.
function addNumbers(a:number, b:number) :number {
    return a+b;
}

console.log(addNumbers(5, 3)); 

// 문제 4. 주어진 값을 받아 문자열로 변환하는 함수를 작성하세요. 값이 null 또는 undefined라면 "값이 없습니다"를 반환합니다
// 힌트: 한 변수에 타입을 여러개를 받고싶다면 | (유니온타입) 을 쓸 수 있다 (예시: 문자열 또는 숫자 : string|number)

function stringifyValue(value: string|null|undefined) :string {
    // 여기에 구현
    if (value === null || value === undefined){
        return "값이 없습니다";
    }

    return value;
}
   
// 함수 호출
console.log(stringifyValue("Hello")); // "Hello"
console.log(stringifyValue(null)); // "값이 없습니다"
console.log(stringifyValue(undefined)); // "값이 없습니다"

// 문제 5. 아래 함수는 두 값을 비교하여 결과를 반환합니다. 
// 느슨한 동등성(==)과 엄격 동등성(===)의 차이를 이해하고, 함수의 동작 결과를 예측하세요.
// 힌트: unknown타입은 무슨 타입이던 다 받을 수 있는 타입이다. (뒤에서 배울 예정)

function compareValues(a: unknown, b: unknown): string {
    if (a === b) {
      return "엄격한 동등성";
    } else if (a == b) {
      return "느슨한 동등성";
    } else {
      return "동등하지 않음";
    }
}
  
// 함수 호출 예시
console.log(compareValues(5, "5")); // "느슨한 동등성"
console.log(compareValues(null, undefined)); // "느슨한 동등성"
console.log(compareValues(false, 0)); // "느슨한 동등성"
console.log(compareValues(NaN, NaN)); // "동등하지 않음"
console.log(compareValues(42, 42)); // "엄격한 동등성"

// 문제 6. 주어진 값이 원시 타입인지 아닌지 확인하는 함수를 작성하세요.
function isPrimitive(value: unknown): boolean {
    // 여기에 구현
    const tscType = typeof value;

    return (value === null || tscType === "string" || tscType === "number" ||
            tscType === "boolean" || tscType === "undefined" || tscType === "bigint" ||
            tscType === "symbol")
    
}
  
// 함수 호출 예시
console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false

console.log(" ")
console.log("------------Object, Array, Tuple------------")

// 문제 1.아래 객체를 보고 user의 타입을 작성하세요
let user: {name:string, age?:number, isAdmin:boolean} = {
  name: "Alice",
  isAdmin: true,
};

user={
  name: "Bob",
  age:40,
  isAdmin: false,
}


// 문제2. 읽기 전용(readonly) 배열을 생성하고, 
// 배열에 직접 값을 추가하거나 변경하려고 하면 오류가 발생해야 합니다.

// 숫자만 담을 수 있는 읽기 전용 배열을 작성하세요.
let numbers: readonly number[] = [1, 2, 3]

// 아래 코드는 오류가 발생해야 합니다.
// numbers.push(4);
// numbers[0] = 42;


// 문제3. 주어진 문제 1,2 번을 푸시오
// 상품 이름과 가격만을 포함하는 새로운 배열을 생성하는 함수를 작성하세요.
// 재고가 있는 상품만 포함하는 배열을 반환하는 함수를 작성하세요.

const products: [string, number, boolean][] = [
  ["Laptop", 1000, true],
  ["Shoes", 50, false],
  ["Book", 20, true],
];

// 1. 상품 이름과 가격만 반환,리턴타입 정의필요 
function getProductNamesAndPrices(
  products: [string, number, boolean][]
): [string, number][] {
  // 여기에 구현
  return products.map(([name, price]) => [name, price]);
}

// 2. 재고가 있는 상품만 반환,리턴타입 정의필요 
function getAvailableProducts(
  products: [string, number, boolean][]
): [string, number, boolean][] {
  // 여기에 구현
  return products.filter(([name, price, inStock]) => inStock);
}

// 테스트 코드
console.log(getProductNamesAndPrices(products));
// 기대 출력: [["Laptop", 1000], ["Shoes", 50], ["Book", 20]]

console.log(getAvailableProducts(products));
// 기대 출력: [["Laptop", 1000, true], ["Book", 20, true]]

// 문제 4. 사용자 정보를 업데이트하는 함수를 작성하세요. 나이가 제공되지 않으면 기본값으로 18을 사용하세요
// 매개변수, 리턴 타입 정의 필요
function updateUser(user: {name:string, age?:number}) : {
  name:string, age:number
} {
  // 나이가 제공되지 않으면 18로 설정
  return {...user, age:user.age ?? 18}
}

// 테스트 코드
console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }

// 문제5. 아래와 같은 데이터 구조를 사용하여 특정 카테고리에 해당하는 상품의 이름을 출력하는 함수를 작성하세요.

// proudcts 타입정의  필요 
const productss:{name:string, price:number, category?:string}[] = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shoes", price: 50, category: "Fashion" },
  { name: "Book", price: 20 },
];

//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(category:string): string[] {
  // 여기에 구현
  return productss.reduce((result: string[], product) => {
    if (product.category === category){
      result.push(product.name)
    }
    return result;
  }, []);
}

// 테스트 코드
console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []