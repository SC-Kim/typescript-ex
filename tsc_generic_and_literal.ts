// 문제 1. 배열의 첫 번째 요소를 반환하는 함수를 작성하세요. 배열의 요소 타입에 관계없이 작동해야 합니다.

// 1.함수 이름: getFirstElement
// 2.입력: 제네릭 배열
// 3.출력: 배열의 첫 번째 요소

// 매개변수, 리턴타입 정의 필요
function getFirstElement<T>(array: T[]): T | undefined {
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

function isNumberArray<T>(array: T[]): boolean {
  return array.every((item) => typeof item === "number");
}

// 문제3. 다음 조건을 만족하는 조건부 타입과 함수를 작성하세요.

// 조건부 타입 정의

// 타입 이름: IsArray<T>
// 입력 타입 T가 배열 타입이면 true를 반환합니다.
// 그렇지 않으면 false를 반환합니다.
// 조건부 타입을 활용하는 함수

// 함수 이름: checkArrayType
// 입력: unknown 타입의 값.
// 출력: 입력값이 배열이면 "This is an array."를, 그렇지 않으면 "This is not an array."를 반환합니다.

// 조건부 타입 정의
type IsArray<T> = T extends any[] ? true : false;

// 조건부 타입을 활용한 함수
function checkArrayType<T>(value: T): string {
  if (Array.isArray(value)) {
    return "This is an array.";
  } else {
    return "This is not an array.";
  }
}

// 테스트 코드
console.log(checkArrayType([1, 2, 3])); // "This is an array."
console.log(checkArrayType("Hello")); // "This is not an array."
console.log(checkArrayType({ key: "value" })); // "This is not an array."

// 문제4. 객체의 모든 속성에 대해 기본값을 추가하는 타입을 작성하세요.

// 유틸리티 타입 정의:

// 타입 이름: WithDefault<T>
// 입력: 객체 타입 T
// 출력: 모든 속성 값의 타입이 [originalType, defaultType]의 튜플로 변경된 타입.
// 테스트:

// WithDefault<T>를 활용하여 객체 타입을 변환하고, 변환된 타입의 객체를 작성하세요.

// Mapped Type 정의
type WithDefault<T> = {
  // 여기에 작성
  [K in keyof T]: [T[K], T[K]];
};

// 테스트 코드
type Original = { id: number; name: string; isActive: boolean };
type WithDefaults = WithDefault<Original>;

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

function createObject<K extends string | number | symbol, V>(
  key: K,
  value: V
): { [P in K]: V } {
  // 여기에 구현
  return { [key]: value } as { [P in K]: V };
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
function pluck<T, K extends keyof T>(array: T[], key: K): T[K][] {
  return array.map((item) => item[key]);
}

// 테스트 코드
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

console.log(pluck(users, "id")); // [1, 2]
console.log(pluck(users, "name")); // ["Alice", "Bob"]

// 문제은행 12. 유틸리티 타입
// 기본 타입 정의:

// User: 회원 정보 (이름, 이메일, 비밀번호).
// Partial을 활용: 모든 속성을 선택 속성으로 변경하는 타입을 생성하세요.
// 함수 작성:

// 함수 이름: updateUserForm.
// 입력: 기존 사용자 데이터와 업데이트된 폼 데이터.
// 출력: 업데이트된 사용자 데이터.

type User = {
  name: string;
  email: string;
  password: string;
};

// 함수 작성
function updateUserForm(
  user: User,
  updates: Partial<User> /* 여기에 작성 */
): User {
  // 여기에 구현
  return { ...user, ...updates };
}

// 테스트 코드
const currentUser = {
  name: "Alice",
  email: "alice@example.com",
  password: "1234",
};
const updatedForm = { email: "new-email@example.com" };

console.log(updateUserForm(currentUser, updatedForm));
// 기대 출력: { name: "Alice", email: "new-email@example.com", password: "1234" }

// 문제 2. 프로필 페이지에 표시할 사용자 정보에서 필요한 속성만 선택하는 문제입니다.

// 기본 타입 정의:
// UserProfile: 사용자 프로필 정보 (아이디, 이름, 이메일, 주소).
// Pick을 활용:

// 프로필 페이지에 필요한 데이터(아이디와 이름)만 추출하는 타입을 정의하세요.
// 함수 작성:

// 함수 이름: getProfileSummary.
// 입력: 전체 사용자 정보.
// 출력: 필요한 속성만 포함된 객체.

type UserProfile = {
  id: number;
  name: string;
  email: string;
  address: string;
};

// 함수 작성
function getProfileSummary(
  user: UserProfile
): Pick<UserProfile, "id" | "name"> {
  // 여기에 구현
  return {
    id: user.id,
    name: user.name,
  };
}

// 테스트 코드
const userProfile = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  address: "123 Main St",
};

console.log(getProfileSummary(userProfile));
// 기대 출력: { id: 1, name: "Alice" }

// 문제 3. 데이터베이스 저장 시 민감한 정보를 제외하는 문제입니다.

// 기본 타입 정의:

// User1: 사용자 정보 (이름, 이메일, 비밀번호, 역할).
// Omit을 활용:

// 민감한 정보를 제외한 타입을 정의하세요. (비밀번호는 제외)
// 함수 작성:

// 함수 이름: filterSensitiveInfo.
// 입력: 전체 사용자 정보.
// 출력: 민감한 정보가 제외된 객체.

type User1 = {
  name: string;
  email: string;
  password: string;
  role: string;
};

// 함수 작성
function filterSensitiveInfo(user: User1): Omit<User1, "password"> {
  const { password, ...safeData } = user;
  return safeData;
}

// 테스트 코드
const userInfo = {
  name: "Alice",
  email: "alice@example.com",
  password: "1234",
  role: "admin",
};

console.log(filterSensitiveInfo(userInfo));
// 기대 출력: { name: "Alice", email: "alice@example.com", role: "admin" }

// 문제 4. 팀 관리 시스템을 설계하세요. 각 팀은 여러 멤버로 구성되며, 관리자는 특정 역할에 따라 데이터를 조작할 수 있습니다.

// 함수 요구사항:
// createTeamMember:

// 새 팀원을 생성하는 함수.
// Partial을 활용하여 입력 데이터 중 일부만 제공되더라도 기본값으로 초기화합니다.
// 기본값:
// role: "developer".
// isActive: true.

// filterTeamMembers:
// 특정 조건에 맞는 팀원만 필터링하는 함수.
// Pick을 사용해 필터링 기준을 정의합니다.
// 예: role: "designer" 또는 isActive: false.

// removeSensitiveInfo:
// 팀원 목록에서 민감한 정보를 제거하는 함수.
// Omit을 사용해 이메일 주소를 제외한 데이터를 반환합니다.

type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: "developer" | "designer" | "manager";
  isActive: boolean;
};

// 1. `createTeamMember` 함수 작성
function createTeamMember(data: Partial<TeamMember>): TeamMember {
  // 여기에 구현
  return {
    id: data.id!, // 깂이 반드시 있다.
    name: data.name || "",
    email: data.email || "",
    role: data.role || "designer",
    isActive: data.isActive ?? true,
  };
}

// 2. `filterTeamMembers` 함수 작성
function filterTeamMembers(
  members: TeamMember[],
  filter: Pick<TeamMember, "role" | "isActive">
): TeamMember[] {
  return members.filter(
    (members) =>
      members.role === filter.role && members.isActive === filter.isActive
  );
}

// 3. `removeSensitiveInfo` 함수 작성
function removeSensitiveInfo(
  members: TeamMember[]
): Omit<TeamMember, "email">[] {
  return members.map(({ email, ...safeData }) => safeData);
}

// 테스트 코드
const members: TeamMember[] = [
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
const newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);
// 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }

// 2. 필터링된 팀원 목록
const activeDesigners = filterTeamMembers(members, {
  role: "designer",
  isActive: true,
});
console.log(activeDesigners);
// 기대 출력: []

// 3. 민감한 정보 제거
const sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
// 기대 출력: [{ id: 1, name: "Alice", role: "developer", isActive: true }, ...]
