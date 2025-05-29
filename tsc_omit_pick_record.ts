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
    role: data.role || "developer",
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

//   문제은행 14. -record 타입
// 1. 전자상거래 플랫폼에서 지역 코드에 따른 배송비를 계산하는 로직을 작성하세요.
// 요구사항:

// 각 지역에 대한 고유 코드와 배송비가 주어집니다:
// type RegionCode = "US" | "EU" | "ASIA" | "AFRICA";
// 지역 코드와 배송비를 매핑하는 데이터 구조를 Record 타입으로 정의하세요.
// 함수 작성:

// 함수 이름: calculateShippingCost.
// 입력: 지역 코드(RegionCode)와 배송비 매핑 객체(Record<RegionCode, number>).
// 출력: 해당 지역의 배송비.
// 추가 요구사항:
// 지원되지 않는 지역 코드가 입력되면 에러를 발생시킵니다.

// 지역 코드 타입 정의
type RegionCode = "US" | "EU" | "ASIA" | "AFRICA";

// 배송비 데이터 정의
const shippingCosts: Record<RegionCode, number> = {
  US: 10,
  EU: 15,
  ASIA: 20,
  AFRICA: 25,
};

// 배송비 계산 함수 작성
function calculateShippingCost(
  region: RegionCode,
  costs: Record<RegionCode, number>
): number {
  // 여기에 구현
  if (!(region in costs)) {
    throw new Error(`Invalid region code: ${region}`);
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
const scores: Record<string, number> = {
  Alice: 85,
  Bob: 92,
  Charlie: 78,
};

// 평균 점수 계산 함수 작성
function calculateAverageScore(scores: Record<string, number>): number {
  // 여기에 구현
  const scoreValues = Object.keys(scores).map(key => scores[key]);
  const totalSum = scoreValues.reduce((sum, num) => sum + num, 0);
  const average = totalSum / scoreValues.length;
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
const prices: Record<string, number> = {
    Laptop: 1000,
    Phone: 500,
    Tablet: 300,
  };
  
  // 가격 업데이트 함수 작성
  function updateProductPrice(
    prices: Record<string, number>,
    product: string,
    newPrice: number
  ): Record<string, number> {
    // 여기에 구현
    return {...prices, [product]:newPrice}
  }
  
  // 테스트 코드
  console.log(updateProductPrice(prices, "Phone", 550));
  // 기대 출력: { Laptop: 1000, Phone: 550, Tablet: 300 }
  