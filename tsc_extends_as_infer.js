// 문제 1. 함수의 반환 타입만 추출하는 유틸리티 타입을 작성하세요.
// 문제 2. 동적으로 주어진 키를 사용해 객체의 값을 추출하는 함수를 작성하세요.
// 요구사항:
// 객체 타입과 키를 동적으로 받아, 해당 키에 해당하는 값을 반환하는 함수.
// 주어진 키가 객체에 반드시 존재한다는 조건에서 작동합니다.
// 타입스크립트는 동적 키를 사용하는 상황에서 기본적으로 안전성을 보장하지 않으므로, as를 사용해야 합니다.
function getValue(obj, key) {
    return obj[key];
}
// 테스트 코드
var user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
console.log(getValue(user, "name")); // 기대 출력: "Alice"
console.log(getValue(user, "email")); // 기대 출력: "alice@example.com"
function processRequest(type, data) {
    if (type === "text") {
        return "Processed: ".concat(data);
    }
    else if (type === "json") {
        return "Processed: ".concat(JSON.stringify(data));
    }
    else if (type === "binary") {
        var arrayData = Array.prototype.slice.call(data);
        return "Processed: ".concat(arrayData.join(","));
    }
    throw new Error("Unsupported type");
}
// 테스트 코드
console.log(processRequest("text", "Hello")); // "Processed: Hello"
console.log(processRequest("json", { key: "value" })); // "Processed: [object Object]"
console.log(processRequest("binary", new Uint8Array([72, 101, 108, 108, 111]))); // "Processed: 72,101,108,108,111"
