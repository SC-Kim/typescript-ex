// 문제 1. 다음 변수들의 타입을 지정해주세요
var userName; // 예: 이름
var userAge; // 예: 나이
var isAdmin; // 예: 관리자 여부
userName = "Alice";
userAge = 25;
isAdmin = true;
// 문제 2. 아래 변수들에 적절한 타입과 초기값을 지정하세요.
// 변수 선언과 초기값 지정
var productName = "Apple"; // 상품 이름
var productPrice = 100; // 상품 가격
var isAvailable = true; // 상품 재고 여부
// 예시 출력
console.log("\uC0C1\uD488\uBA85: ".concat(productName, ", \uAC00\uACA9: ").concat(productPrice, ", \uC7AC\uACE0 \uC5EC\uBD80: ").concat(isAvailable));
// 문제 3. 두 숫자를 더하는 함수를 작성하고, 함수의 매개변수와 반환값에 타입을 지정하세요.
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 3));
// 문제 4. 주어진 값을 받아 문자열로 변환하는 함수를 작성하세요. 값이 null 또는 undefined라면 "값이 없습니다"를 반환합니다
// 힌트: 한 변수에 타입을 여러개를 받고싶다면 | (유니온타입) 을 쓸 수 있다 (예시: 문자열 또는 숫자 : string|number)
function stringifyValue(value) {
    // 여기에 구현
    if (value === null || value === undefined) {
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
function compareValues(a, b) {
    if (a === b) {
        return "엄격한 동등성";
    }
    else if (a == b) {
        return "느슨한 동등성";
    }
    else {
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
function isPrimitive(value) {
    // 여기에 구현
    var tscType = typeof value;
    return (value === null || tscType === "string" || tscType === "number" ||
        tscType === "boolean" || tscType === "undefined" || tscType === "bigint" ||
        tscType === "symbol");
}
// 함수 호출 예시
console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false
