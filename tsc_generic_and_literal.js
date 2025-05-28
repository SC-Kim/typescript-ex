// 문제 1. 배열의 첫 번째 요소를 반환하는 함수를 작성하세요. 배열의 요소 타입에 관계없이 작동해야 합니다.
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
// 함수 작성
function updateUserForm(user, updates /* 여기에 작성 */) {
    // 여기에 구현
    return __assign(__assign({}, user), updates);
}
// 테스트 코드
var currentUser = {
    name: "Alice",
    email: "alice@example.com",
    password: "1234",
};
var updatedForm = { email: "new-email@example.com" };
console.log(updateUserForm(currentUser, updatedForm));
// 함수 작성
function getProfileSummary(user) {
    // 여기에 구현
    return {
        id: user.id,
        name: user.name,
    };
}
// 테스트 코드
var userProfile = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    address: "123 Main St",
};
console.log(getProfileSummary(userProfile));
// 함수 작성
function filterSensitiveInfo(user) {
    var password = user.password, safeData = __rest(user, ["password"]);
    return safeData;
}
// 테스트 코드
var userInfo = {
    name: "Alice",
    email: "alice@example.com",
    password: "1234",
    role: "admin",
};
console.log(filterSensitiveInfo(userInfo));
// 1. `createTeamMember` 함수 작성
function createTeamMember(data) {
    var _a;
    // 여기에 구현
    return {
        id: data.id, // 깂이 반드시 있다.
        name: data.name || "",
        email: data.email || "",
        role: data.role || "designer",
        isActive: (_a = data.isActive) !== null && _a !== void 0 ? _a : true,
    };
}
// 2. `filterTeamMembers` 함수 작성
function filterTeamMembers(members, filter) {
    return members.filter(function (members) {
        return members.role === filter.role && members.isActive === filter.isActive;
    });
}
// 3. `removeSensitiveInfo` 함수 작성
function removeSensitiveInfo(members) {
    return members.map(function (_a) {
        var email = _a.email, safeData = __rest(_a, ["email"]);
        return safeData;
    });
}
// 테스트 코드
var members = [
    {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
        role: "developer",
        isActive: true,
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@example.com",
        role: "designer",
        isActive: false,
    },
    {
        id: 3,
        name: "Charlie",
        email: "charlie@example.com",
        role: "manager",
        isActive: true,
    },
];
// 1. 새 팀원 생성
var newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);
// 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }
// 2. 필터링된 팀원 목록
var activeDesigners = filterTeamMembers(members, {
    role: "designer",
    isActive: true,
});
console.log(activeDesigners);
// 기대 출력: []
// 3. 민감한 정보 제거
var sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
// 기대 출력: [{ id: 1, name: "Alice", role: "developer", isActive: true }, ...]
