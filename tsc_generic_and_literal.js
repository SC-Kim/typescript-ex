// 문제 1. 배열의 첫 번째 요소를 반환하는 함수를 작성하세요. 배열의 요소 타입에 관계없이 작동해야 합니다.
// 1.함수 이름: getFirstElement
// 2.입력: 제네릭 배열
// 3.출력: 배열의 첫 번째 요소
// 매개변수, 리턴타입 정의 필요
function getFirstElement(array) {
    // 여기에 구현
    return array[0];
}
// 테스트 코드
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined
// 문제 2. 숫자 배열인지 문자열 배열인지 확인하는 함수를 작성하세요.
// 함수 이름: isNumberArray
// 입력: 제네릭 배열
// 출력:
// 배열이 숫자 배열이면 true.
// 그렇지 않으면 false.
function isNumberArray(array) {
    return array.every(function (item) { return typeof item === "number"; });
}
console.log(isNumberArray([1, 2, 3])); // true
console.log(isNumberArray(["a", "b", "c"])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)
// 조건부 타입을 활용한 함수
function checkArrayType(value) {
    if (Array.isArray(value)) {
        return "This is an array.";
    }
    else {
        return "This is not an array.";
    }
}
// 테스트 코드
console.log(checkArrayType([1, 2, 3])); // "This is an array."
console.log(checkArrayType("Hello")); // "This is not an array."
console.log(checkArrayType({ key: "value" })); // "This is not an array."
// 기대 결과:
// type WithDefaults = {
//   id: [number, number];
//   name: [string, string];
//   isActive: [boolean, boolean];
// }
// 문제 5. 키와 값을 받아 객체를 생성하는 함수를 작성하세요.
// 함수 이름: createObject
// 입력:
// key: 키 (제네릭 타입 K)
// value: 값 (제네릭 타입 V)
// 출력: { key: value } 형태의 객체
function createObject(key, value) {
    var _a;
    // 여기에 구현
    return _a = {}, _a[key] = value, _a;
}
console.log(createObject("id", 123)); // { id: 123 }
console.log(createObject("name", "Alice")); // { name: "Alice" }
// 문제 6. 사용자 정보를 나타내는 객체 배열에서 특정 속성만 추출하는 함수를 작성하세요.
// 함수 이름: pluck
// 입력:
// 객체 배열: 제네릭 타입 배열
// 속성 이름: 제네릭 타입
// 출력: 속성 값 배열
// 매개변수, 리턴 타입 정의 필요
function pluck(array, key) {
    return array.map(function (item) { return item[key]; });
}
// 테스트 코드
var users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];
console.log(pluck(users, "id")); // [1, 2]
console.log(pluck(users, "name")); // ["Alice", "Bob"]
// 문제 은행 12. 리터럴 타입
// 문제 1. 웹 애플리케이션에서 사용할 버튼의 스타일을 선택하는 함수를 작성하세요.
// 리터럴 타입 정의:
// 버튼 스타일: "primary", "secondary", "danger".
// 함수 작성:
// 함수 이름: getButtonClass.
// 입력: 버튼 스타일(리터럴 타입).
// 출력: 스타일에 따라 CSS 클래스를 반환.
function getButtonClass(style) {
    // 여기에 구현
    switch (style) {
        case "primary": return "btn-primary";
        case "secondary": return "btn-secondary";
        case "danger": return "btn-danger";
        default:
            throw new Error("Invalid button style");
    }
}
// 테스트 코드
console.log(getButtonClass("primary")); // "btn-primary"
console.log(getButtonClass("secondary")); // "btn-secondary"
console.log(getButtonClass("danger")); // "btn-danger"
// console.log(getButtonClass("unknown")); // 오류 발생
// 문제 2. 서버에서 데이터를 요청할 때 발생하는 상태를 처리하는 함수를 작성하세요.
// 리터럴 타입 정의:
// 요청 상태: "loading", "success", "error".
// 함수 작성:
// 함수 이름: handleRequestState.
// 입력: 요청 상태(리터럴 타입).
// 출력: 상태에 따라 메시지를 반환.
function handleRequestState(state) {
    // 여기에 구현
    switch (state) {
        case "loading": return "Loading, please wait...";
        case "success": return "Request successful!";
        case "error": return "There was an error processing your request.";
        default:
            throw new Error("Invalid request state");
    }
}
// 테스트 코드
console.log(handleRequestState("loading")); // "Loading, please wait..."
console.log(handleRequestState("success")); // "Request successful!"
console.log(handleRequestState("error")); // "There was an error processing your request."
// console.log(handleRequestState("unknown")); // 오류 발생
