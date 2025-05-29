// 문제은행 12. 유틸리티 타입
// 기본 타입 정의:
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
        role: data.role || "developer",
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
// 배송비 데이터 정의
var shippingCosts = {
    US: 10,
    EU: 15,
    ASIA: 20,
    AFRICA: 25,
};
// 배송비 계산 함수 작성
function calculateShippingCost(region, costs) {
    // 여기에 구현
    if (!(region in costs)) {
        throw new Error("Invalid region code: ".concat(region));
    }
    return costs[region];
}
// 테스트 코드
console.log(calculateShippingCost("US", shippingCosts)); // 10
console.log(calculateShippingCost("EU", shippingCosts)); // 15
console.log(calculateShippingCost("ASIA", shippingCosts)); // 20
console.log(calculateShippingCost("AFRICA", shippingCosts)); // 25
// console.log(calculateShippingCost("AUSTRALIA", shippingCosts)); // 에러 발생
// 2. 학생들의 점수를 기록하고 평균 점수를 계산하는 문제입니다.
// 요구사항:
// 학생 이름(string)과 점수(number)를 매핑하는 데이터를 Record 타입으로 정의하세요.
// 평균 점수를 계산하는 함수를 작성하세요.
// 함수 작성:
// 함수 이름: calculateAverageScore.
// 입력: 학생 점수 데이터(Record<string, number>).
// 출력: 모든 학생의 평균 점수(number).
// 학생 점수 데이터 정의
var scores = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
};
// 평균 점수 계산 함수 작성
function calculateAverageScore(scores) {
    // 여기에 구현
    var scoreValues = Object.keys(scores).map(function (key) { return scores[key]; });
    var totalSum = scoreValues.reduce(function (sum, num) { return sum + num; }, 0);
    var average = totalSum / scoreValues.length;
    return average;
}
// 테스트 코드
console.log(calculateAverageScore(scores)); // 85
//문제 3. 쇼핑몰에서 각 제품의 이름과 가격을 매핑하고, 특정 제품의 가격을 업데이트하는 기능을 구현하세요.
// 요구사항:
// 제품 이름(string)과 가격(number)을 매핑하는 데이터를 Record 타입으로 정의하세요.
// 특정 제품의 가격을 업데이트하는 함수를 작성하세요.
// 함수 작성:
// 함수 이름: updateProductPrice.
// 입력: 제품 가격 데이터(Record<string, number>), 업데이트할 제품 이름과 새로운 가격.
// 출력: 업데이트된 제품 가격 데이터(Record<string, number>).
// 제품 가격 데이터 정의
var prices = {
    Laptop: 1000,
    Phone: 500,
    Tablet: 300,
};
// 가격 업데이트 함수 작성
function updateProductPrice(prices, product, newPrice) {
    var _a;
    // 여기에 구현
    return __assign(__assign({}, prices), (_a = {}, _a[product] = newPrice, _a));
}
// 테스트 코드
console.log(updateProductPrice(prices, "Phone", 550));
// 기대 출력: { Laptop: 1000, Phone: 550, Tablet: 300 }
