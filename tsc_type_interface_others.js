// 문제 1. 사용자 정보를 나타내는 인터페이스와 타입을 작성하세요. 사용자 정보는 다음과 같은 구조를 가집니다:
// id: 고유 ID (숫자)
// name: 이름 (문자열)
// email: 이메일 (문자열, 선택 속성)
var user1 = {
    id: 1,
    name: "Alice",
};
var userWithEmail = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
};
// User 타입을 사용하여 아래 객체를 작성하세요.
var user2 = {
    id: 1,
    name: "Alice",
    address: {
        city: "Seoul",
        zipCode: 12345,
    },
};
var normalUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
var adminUser = {
    id: 2,
    name: "Bob",
    role: "Administrator",
};
var normalProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
};
var discountedProduct = {
    id: 2,
    name: "Smartphone",
    price: 800,
    discount: 10,
};
// Order 타입을 사용하여 아래 객체를 작성하세요.
var order = {
    orderId: 101,
    products: [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Mouse", price: 50 },
    ],
    totalPrice: 1050,
};
// 아래 객체를 작성하세요.
var admin = {
    id: 1,
    name: "Alice",
    role: "Administrator",
};
var guest = {
    id: 2,
    name: "Bob",
    visitCount: 5,
};
console.log("**************** enum, any, unknown ****************");
//   문제 1. 작업의 상태를 나타내는 enum을 작성하고, 상태에 따라 다른 메시지를 반환하는 함수를 작성하세요.
// 작업의 상태는 다음과 같습니다:
// Pending: 대기 중
// InProgress: 진행 중
// Completed: 완료됨
// 상태에 따라 다음 메시지를 반환하세요:
// Pending: "작업이 대기 중입니다."
// InProgress: "작업이 진행 중입니다."
// Completed: "작업이 완료되었습니다."
// 작업 상태를 나타내는 enum을 작성하세요.
// 여기에 작성
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Pending"] = "Pending";
    TaskStatus["InProgress"] = "InProgress";
    TaskStatus["Completed"] = "Completed";
})(TaskStatus || (TaskStatus = {}));
function getStatusMessage(status) {
    // 여기에 구현
    switch (status) {
        case TaskStatus.Pending:
            return "작업이 대기 중입니다.";
        case TaskStatus.InProgress:
            return "작업이 진행 중입니다.";
        case TaskStatus.Completed:
            return "작업이 완료되었습니다.";
    }
}
// 테스트 코드
console.log(getStatusMessage(TaskStatus.Pending)); // "작업이 대기 중입니다."
console.log(getStatusMessage(TaskStatus.InProgress)); // "작업이 진행 중입니다."
console.log(getStatusMessage(TaskStatus.Completed)); // "작업이 완료되었습니다."
//  문제 2. 아래 조건에 따라 함수를 작성하세요.
// 작업 상태를 나타내는 enum:
// Pending: 작업 대기 중
// InProgress: 작업 진행 중
// Completed: 작업 완료
// Failed: 작업 실패
// 함수의 요구사항:
// 함수는 작업 상태(TaskStatus)와 입력값(unknown)을 받습니다.
// input은 문자열이어야 합니다.
// 문자열을 작업 상태에 따라 가공합니다:
// Pending: 문자열을 모두 대문자로 변환.
// InProgress: 문자열을 소문자로 변환.
// Completed: 문자열 앞에 "완료: "를 추가.
// Failed: 에러를 발생시킵니다.
// 작업 상태가 Failed면 에러를 발생시켜야 합니다.
// 최종 결과로 가공된 문자열 배열을 반환합니다.
// 힌트 : typeof를 사용하면 타입을 알 수 있다.
// 작업 상태를 나타내는 enum 작성
// 여기에 작성
var TaskStatus1;
(function (TaskStatus1) {
    TaskStatus1["Pending"] = "Pending";
    TaskStatus1["InProgress"] = "InProgress";
    TaskStatus1["Completed"] = "Completed";
    TaskStatus1["Failed"] = "Failted";
})(TaskStatus1 || (TaskStatus1 = {}));
function processTask(status, input) {
    // 여기에 구현
    if (typeof input === "string") {
        switch (status) {
            case TaskStatus1.Pending:
                return input.toUpperCase();
            case TaskStatus1.InProgress:
                return input.toLowerCase();
            case TaskStatus1.Completed:
                return "완료: " + input;
            case TaskStatus1.Failed:
                return "에러: 작업이 실패했습니다.";
        }
    }
    else
        return "에러: 입력값은 문자열이어야 합니다.";
}
// 테스트 코드
console.log(processTask(TaskStatus1.Pending, "task1"));
// 기대 출력: "TASK1"
console.log(processTask(TaskStatus1.InProgress, "TaskA"));
// 기대 출력: "taska"
console.log(processTask(TaskStatus1.Completed, "Report1"));
// 기대 출력: "완료: Report1"
console.log(processTask(TaskStatus1.Failed, "TaskX"));
// 에러: 작업이 실패했습니다.
console.log(processTask(TaskStatus1.Pending, 42));
// 에러: 입력값은 문자열이어야 합니다.
// 문제 3. 아래 조건에 따라 코드를 작성하세요.
// 로그 수준을 나타내는 enum을 작성하세요:
// Info
// Error
// Debug
// 로그 함수 타입을 정의하세요. 이 함수는 다음 특징을 가집니다:
// message: 로그 메시지 (문자열)
// level: 로그 수준 (enum 값)
// 반환값이 없습니다. (void 타입)
// 작성한 타입과 enum을 사용해 함수를 구현하세요:
// 로그 수준에 따라 다른 메시지를 출력합니다.
// Info: [INFO] 메시지 앞에 [INFO] 출력
// Error: 메시지 앞에 [ERROR] 출력
// Debug: 메시지 앞에 [DEBUG] 출력
// 로그 수준을 나타내는 enum 작성
// 여기에 작성
var LogLevel;
(function (LogLevel) {
    LogLevel["Info"] = "Info";
    LogLevel["Error"] = "Error";
    LogLevel["Debug"] = "Debug";
})(LogLevel || (LogLevel = {}));
// 로그 함수 구현
var logMessage = function (message, level) {
    // 여기에 구현
    switch (level) {
        case LogLevel.Info:
            console.log("[INFO] ".concat(message));
            break;
        case LogLevel.Error:
            console.log("[Error] ".concat(message));
            break;
        case LogLevel.Debug:
            console.log("[Debug] ".concat(message));
            break;
    }
};
// 테스트 코드
logMessage("시스템이 시작되었습니다.", LogLevel.Info);
logMessage("네트워크 연결 실패!", LogLevel.Error);
logMessage("디버깅 모드 활성화", LogLevel.Debug);
// 문제 4. 아래 조건을 만족하는 함수를 작성하세요.
// 두 개의 함수(processAny와 processUnknown)를 작성합니다:
// processAny: 매개변수로 any 타입을 받습니다. 입력값의 타입에 관계없이 값을 문자열로 변환하여 반환합니다.
// processUnknown: 매개변수로 unknown 타입을 받습니다. 입력값이 문자열이면 대문자로 변환하여 반환하고, 
// 숫자라면 10을 곱해 반환합니다. 다른 타입의 경우 에러를 발생시킵니다.
// 테스트 코드를 작성하여 두 함수의 차이를 확인하세요.
function processAny(input) {
    // 여기에 구현
    return input.toString();
}
function processUnknown(input) {
    // 여기에 구현
    if (typeof input === "string")
        return input.toUpperCase();
    else if (typeof input === "number")
        return input * 10;
    else
        throw new Error("지원되지 않는 타입입니다.");
}
// 테스트 코드
console.log(processAny("hello")); // 기대 출력: "hello"
console.log(processAny(42)); // 기대 출력: "42"
console.log(processAny(true)); // 기대 출력: "true"
console.log(processUnknown("hello")); // 기대 출력: "HELLO"
console.log(processUnknown(42)); // 기대 출력: 420
console.log(processUnknown(true)); // 에러 발생
