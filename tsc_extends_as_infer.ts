// 문제 1. 함수의 반환 타입만 추출하는 유틸리티 타입을 작성하세요.

// 요구사항:

// 타입 이름: ExtractReturnType<F>.
// 입력: 함수 타입 F.
// 출력: 함수의 반환 타입.
// 테스트 코드:
// 함수 타입에 따라 반환 타입을 추출하세요.

type ExtractReturnType<F> = F extends (...args: any[]) => infer R? R : never;

// 테스트 코드
type Test1 = ExtractReturnType<() => string>; // 기대 결과: string
type Test2 = ExtractReturnType<(x: number) => boolean>; // 기대 결과: boolean
type Test3 = ExtractReturnType<(x: number, y: string) => { id: number }>; // 기대 결과: { id: number }

// 문제 2. 동적으로 주어진 키를 사용해 객체의 값을 추출하는 함수를 작성하세요.

// 요구사항:
// 객체 타입과 키를 동적으로 받아, 해당 키에 해당하는 값을 반환하는 함수.
// 주어진 키가 객체에 반드시 존재한다는 조건에서 작동합니다.
// 타입스크립트는 동적 키를 사용하는 상황에서 기본적으로 안전성을 보장하지 않으므로, as를 사용해야 합니다.

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key] as T[K];
}
  
  // 테스트 코드
  const user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  };
  
  console.log(getValue(user, "name")); // 기대 출력: "Alice"
  console.log(getValue(user, "email")); // 기대 출력: "alice@example.com"
  

// 문제 3. API 요청에서 들어오는 데이터의 형식에 따라 처리 로직이 달라집니다.
// 요청 타입에 따라 처리할 수 있는 데이터의 타입을 결정하세요.

// 요구사항:

// 요청 타입: "text", "json", "binary".
// 각 요청 타입에 따른 데이터 형식:
// "text" → string.
// "json" → Record<string, any> (객체).
// "binary" → Uint8Array (바이너리 데이터).
// 타입 이름: RequestData<T>.
// 요청 타입 T에 따라 위 데이터 형식을 반환.
// 함수 작성:

// 함수 이름: processRequest.
// 입력: 요청 타입(T)과 데이터(RequestData<T>).
// 출력: 데이터 처리 결과 (단순히 "Processed: [data]" 형태로 반환).

type RequestData<T> = 
    T extends "text"? string: 
    T extends "json"? Record<string, any>:
    T extends "binary"? Uint8Array:
    never 

function processRequest<T extends "text" | "json" | "binary">(
  type: T,
  data: RequestData<T>
): string {
    if (type === "text"){
        return `Processed: ${data}`;
    }
    else if(type === "json"){
        return `Processed: ${JSON.stringify(data)}`;
    }
    else if(type === "binary"){
        const arrayData = Array.prototype.slice.call(data);
        return `Processed: ${arrayData.join(",")}`;
    }
    throw new Error("Unsupported type");
  
}

// 테스트 코드
console.log(processRequest("text", "Hello")); // "Processed: Hello"
console.log(processRequest("json", { key: "value" })); // "Processed: [object Object]"
console.log(processRequest("binary", new Uint8Array([72, 101, 108, 108, 111]))); // "Processed: 72,101,108,108,111"


