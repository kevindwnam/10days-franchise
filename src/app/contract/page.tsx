import PageHeader from "@/components/PageHeader";

const obligations = [
  "수강생 유치 마케팅 활동의 성실 수행",
  "안정적인 인터넷 환경 사전 구축 및 유지",
  "본사 교재·콘텐츠를 승인된 목적 외 사용 금지",
  "본사 운영 정책, 수업 커리큘럼, 평가 방식 성실 준수",
  "본사·수강생 간 소통 창구 (카톡·ClassIn) 적극 활용",
  "관계 법령 준수 및 학생/학부모 개인정보 보호",
];

export default function ContractPage() {
  return (
    <>
      <PageHeader
        label="CONTRACT"
        title="계약 조건"
        subtitle="계약 기간 · 환불 규정 · 위약 조항"
      />

      <main>
        {/* 인트로 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pb-6">
          <div className="bg-white rounded-2xl border-t-4 border-brand-red shadow-sm p-6 lg:p-8">
            <h2 className="font-serif-kr font-bold text-lg lg:text-2xl">
              투명한 계약, 명확한 권리/의무
            </h2>
            <p className="text-sm lg:text-base leading-relaxed mt-3">
              모든 계약 조건은 사전에 공개됩니다. 가맹점이 안심하고 사업을 시작할
              수 있도록 계약 기간, 환불 규정, 위약 조항을 명확히 정리했습니다.
            </p>
          </div>
        </section>

        {/* 계약 기간 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-6">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">계약 기간</h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">제8조</span>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
            <div className="lg:flex lg:items-center lg:gap-6">
              <div className="text-center lg:text-left">
                <div className="text-xs text-brand-gray mb-1">
                  계약 유효기간
                </div>
                <div className="font-serif-kr font-black text-2xl lg:text-3xl">
                  계약 체결일 ~ 당해년도 12월 31일
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-brand-bg rounded-lg text-xs lg:text-sm leading-relaxed">
              📌 계약 만료 1개월 전 (11월 30일까지) 양 당사자 간 합의가 없는
              경우 계약은 자동 종료됩니다. 이후 재계약 여부는 상호 협의합니다.
            </div>
          </div>
        </section>

        {/* 환불 규정 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">환불 규정</h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">제6조</span>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="py-3 px-4 lg:px-6 text-left font-bold">
                    해지 시점
                  </th>
                  <th className="py-3 px-4 lg:px-6 text-right font-bold">
                    환불율
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="py-3 px-4 lg:px-6">
                    가맹 개시일 ~ 2개월 이내
                  </td>
                  <td className="py-3 px-4 lg:px-6 text-right font-bold text-brand-red">
                    잔여 금액 50% 환불
                  </td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="py-3 px-4 lg:px-6">2 ~ 4개월 이내</td>
                  <td className="py-3 px-4 lg:px-6 text-right font-bold">
                    잔여 금액 25% 환불
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 lg:px-6">4개월 경과 후</td>
                  <td className="py-3 px-4 lg:px-6 text-right text-brand-gray">
                    환불 불가
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-brand-gray mt-3">
            환불 요청은 서면 제출 후 본사 검토를 거쳐 14일 이내 처리됩니다.
          </p>
        </section>

        {/* 위약 조항 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">위약 조항</h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              제7조 · 브랜드 보호
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
            <p className="text-xs lg:text-sm text-brand-gray leading-relaxed mb-4">
              ⚠️ 모든 가맹점의 브랜드 가치를 보호하기 위해 다음과 같은 위약
              조항이 있습니다. 이는 콘텐츠 무단 유출/공유를 방지하여 가맹점
              자산을 지키기 위함입니다.
            </p>
            <div className="space-y-3">
              <div className="bg-brand-bg rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="text-brand-red font-bold text-lg shrink-0">
                    !
                  </span>
                  <div className="flex-1">
                    <div className="font-bold text-sm">교재 무단 복제</div>
                    <div className="text-xs text-brand-gray mt-1">
                      건당{" "}
                      <strong className="text-brand-red">1,000,000원</strong>{" "}
                      위약금 (자료 1부 기준)
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-brand-bg rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="text-brand-red font-bold text-lg shrink-0">
                    !
                  </span>
                  <div className="flex-1">
                    <div className="font-bold text-sm">
                      콘텐츠 공유 · 재판매
                    </div>
                    <div className="text-xs text-brand-gray mt-1">
                      자료 1건당{" "}
                      <strong className="text-brand-red">10,000,000원</strong>{" "}
                      위약금 + 법적 조치
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-brand-bg rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="text-brand-red font-bold text-lg shrink-0">
                    !
                  </span>
                  <div className="flex-1">
                    <div className="font-bold text-sm">
                      타 브랜드 유사 콘텐츠 사용
                    </div>
                    <div className="text-xs text-brand-gray mt-1">
                      본사 사전 협의 후 사용 가능 · 협의 없이 운영 시{" "}
                      <strong className="text-brand-red">
                        즉시 해지 + 5,000,000원
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 가맹점 주요 의무 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">
              가맹점 주요 의무
            </h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">제10조</span>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
            <ul className="space-y-3 text-sm">
              {obligations.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-brand-red font-bold shrink-0">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* DB 관리 정책 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
            <h3 className="font-bold text-base lg:text-lg">
              DB(데이터) 관리 정책{" "}
              <span className="text-xs text-brand-gray font-normal ml-1">
                제9조
              </span>
            </h3>
            <ul className="space-y-2 text-sm mt-4">
              <li className="flex items-start gap-2">
                <span className="text-brand-gray font-bold shrink-0">·</span>
                학생 개인정보는 본사와 공유 (수업 시스템 운영 목적)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gray font-bold shrink-0">·</span>
                <strong>
                  합격자 명단은 다음해 가맹 연장 시 가맹점에 제공
                </strong>{" "}
                (계약 기간 내 마케팅 사용 가능)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gray font-bold shrink-0">·</span>
                <strong>
                  가맹 해지 시에는 본인 가맹점 합격생 외 합격자 명단을 사용할 수
                  없습니다
                </strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gray font-bold shrink-0">·</span>
                제3자 제공·외부 유출·복제·재판매 금지
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gray font-bold shrink-0">·</span>
                계약 종료 시 본사 제공 DB 지체 없이 파기/반환
              </li>
            </ul>
          </div>
        </section>

        {/* 계약서 전문 토글 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10 pb-12">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">
              계약서 전문 보기
            </h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              클릭하여 펼치기
            </span>
          </div>

          <details className="bg-white rounded-2xl border border-brand-border overflow-hidden group">
            <summary className="cursor-pointer p-5 lg:p-6 flex items-center justify-between list-none hover:bg-brand-bg transition [&::-webkit-details-marker]:hidden">
              <div>
                <div className="font-bold text-base lg:text-lg">
                  『(주)십일전략 온라인 강의 & GR831 약술형 논술 콘텐츠 가맹
                  계약서』
                </div>
                <div className="text-xs lg:text-sm text-brand-gray mt-1">
                  전문 11개 조항 · 부칙 포함
                </div>
              </div>
              <span className="text-brand-gray group-open:rotate-180 transition-transform text-xl">
                ▼
              </span>
            </summary>
            <div className="p-5 lg:p-8 border-t border-brand-border text-sm lg:text-base leading-relaxed space-y-5 max-h-[600px] overflow-y-auto">
              <p className="text-xs lg:text-sm text-brand-gray">
                본 계약은 (주)십일전략(이하 &ldquo;본사&rdquo;)과
                가맹사업자(이하 &ldquo;가맹점&rdquo;) 간의 가맹 협약을 목적으로
                체결되며, &ldquo;십일전략 온라인 강의 및 GR831 약술형 논술
                콘텐츠&rdquo; 사용과 관련된 권리 및 의무를 명확히 하기 위해
                다음과 같이 정합니다.
              </p>

              {/* 제1조 */}
              <div>
                <div className="font-bold text-brand-red">
                  제1조 (계약 목적)
                </div>
                <p className="mt-2">
                  본 계약은 본사의 온라인 강의 시스템 및 논술 콘텐츠를 활용한
                  교육 프로그램 운영을 통해 가맹점이 독립적 사업을 운영할 수
                  있도록 하며, 가맹 권한 및 서비스 범위, 운영 조건 등을 규정함을
                  목적으로 한다.
                </p>
              </div>

              {/* 제2조 */}
              <div>
                <div className="font-bold text-brand-red">
                  제2조 (가맹 형태 및 지역권)
                </div>
                <p className="mt-2">
                  가맹점은 다음 중 하나의 형태로 가맹하며, 가맹 후에는 해당 반경
                  내 타 가맹이 제한된다.
                </p>
                <ul className="mt-2 ml-4 space-y-1 text-sm">
                  <li>0. 지역권 無 : 반경 0km 이내 타 학원 가맹 금지</li>
                  <li>
                    1. 지역권 가맹 1형 : 사업장 기준 반경 1km 이내 타 학원 가맹
                    금지
                  </li>
                  <li>
                    2. 지역권 가맹 2형 : 사업장 기준 반경 4km 이내 타 학원 가맹
                    금지
                  </li>
                  <li>
                    3. 지역권 가맹 3형 : 사업장 기준 반경 12km 이내 타 학원 가맹
                    금지
                  </li>
                </ul>
              </div>

              {/* 제3조 */}
              <div>
                <div className="font-bold text-brand-red">
                  제3조 (제공 서비스)
                </div>
                <p className="mt-2">
                  본사가 가맹점에 제공하는 서비스는 아래와 같다.
                </p>
                <ol className="mt-2 ml-4 space-y-1 text-sm list-decimal">
                  <li>온라인 정규 강의 제공</li>
                  <li>
                    수강생 작성 답안에 대한 정기적 채점 및 분석표 제공
                  </li>
                  <li>
                    질의응답 관리: ClassIn을 통한 소통, 자체 질답 페이지 운영
                  </li>
                  <li>
                    공동 마케팅: 홈페이지 가맹학원 명단 공개, 당해년도 입결 결과
                    공유 (중간 해지 시 제공되지 않음)
                  </li>
                </ol>
              </div>

              {/* 제4조 */}
              <div>
                <div className="font-bold text-brand-red">
                  제4조 (온라인 설명회 진행)
                </div>
                <p className="mt-2">
                  본사 온라인 설명회 진행 시 가맹 학원에서도 홍보하여 학원생들이
                  참여할 수 있다. 모든 가맹 형태에서 온라인 설명회 참여 가능.
                  이외 설명회는 학원과 협의에 따라 일정 조율 가능하다.
                </p>
              </div>

              {/* 제5조 */}
              <div>
                <div className="font-bold text-brand-red">
                  제5조 (가맹비 및 수업료 정산 기준)
                </div>
                <ol className="mt-2 ml-4 space-y-2 text-sm list-decimal">
                  <li>
                    <strong>온라인 수업 정산</strong>
                    <ul className="ml-4 mt-1 space-y-0.5">
                      <li>
                        · <strong>모의고사 정규반</strong>: 수강생 1인 기준 회당
                        4만원, 월 4회 기준 월 총 16만원 (교재비 별도)
                      </li>
                      <li>
                        · <strong>개념특강</strong>: 화요일·목요일 수업이 1회로
                        묶여 진행됨. 수강생 1인 기준 1회당 2만원, 월 4회 기준 월
                        총 8만원 (교재비 없음)
                      </li>
                      <li>
                        · <strong>파이널 특강</strong>: 수강생 1인 기준 20회 묶음
                        총 50만원 (교재비 별도)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>교재비</strong>
                    <ul className="ml-4 mt-1 space-y-0.5">
                      <li>
                        · 모의고사 정규반 1회당 1.4만원, 월 4회 기준 월 5.6만원
                      </li>
                      <li>· 개념특강 교재비 無</li>
                      <li>· 파이널 특강 20회 총 20만원</li>
                    </ul>
                  </li>
                  <li>
                    <strong>손익분기점</strong>
                    <ul className="ml-4 mt-1 space-y-0.5">
                      <li>· 지역권 無 : 명수 무관</li>
                      <li>· 지역권 1형 : 월 5명</li>
                      <li>· 지역권 2형 : 월 10명</li>
                      <li>· 지역권 3형 : 월 20명</li>
                    </ul>
                  </li>
                </ol>

                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-xs lg:text-sm border border-brand-border">
                    <thead>
                      <tr className="bg-brand-bg">
                        <th className="py-2 px-2 lg:px-3 text-left">
                          가맹 형태
                        </th>
                        <th className="py-2 px-2 lg:px-3 text-right">
                          6월 이전
                        </th>
                        <th className="py-2 px-2 lg:px-3 text-right">
                          7월 이전
                        </th>
                        <th className="py-2 px-2 lg:px-3 text-right">
                          8월 이전
                        </th>
                        <th className="py-2 px-2 lg:px-3 text-right">
                          8월 이후
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-2 lg:px-3 font-bold">
                          지역권 無
                        </td>
                        <td
                          colSpan={4}
                          className="text-center text-brand-gray"
                        >
                          가맹비 無
                        </td>
                      </tr>
                      <tr className="border-t border-brand-border">
                        <td className="py-2 px-2 lg:px-3 font-bold">
                          지역권 1형
                        </td>
                        <td className="py-2 px-2 lg:px-3 text-right">
                          480만원
                        </td>
                        <td className="py-2 px-2 lg:px-3 text-right">
                          400만원
                        </td>
                        <td className="py-2 px-2 lg:px-3 text-right">
                          320만원
                        </td>
                        <td className="py-2 px-2 lg:px-3 text-right">
                          240만원
                        </td>
                      </tr>
                      <tr className="border-t border-brand-border">
                        <td className="py-2 px-2 lg:px-3 font-bold">
                          지역권 2형
                        </td>
                        <td className="py-2 px-2 lg:px-3 text-right">
                          960만원
                        </td>
                        <td className="py-2 px-2 lg:px-3 text-right">
                          800만원
                        </td>
                        <td className="py-2 px-2 lg:px-3 text-right">
                          640만원
                        </td>
                        <td className="py-2 px-2 lg:px-3 text-right">
                          480만원
                        </td>
                      </tr>
                      <tr className="border-t border-brand-border">
                        <td className="py-2 px-2 lg:px-3 font-bold">
                          지역권 3형
                        </td>
                        <td className="py-2 px-2 lg:px-3 text-right">
                          1,920만원
                        </td>
                        <td className="py-2 px-2 lg:px-3 text-right">
                          1,600만원
                        </td>
                        <td className="py-2 px-2 lg:px-3 text-right">
                          1,280만원
                        </td>
                        <td className="py-2 px-2 lg:px-3 text-right">
                          960만원
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 제6조 */}
              <div>
                <div className="font-bold text-brand-red">
                  제6조 (환불 및 계약 해지 규정)
                </div>
                <p className="mt-2">가맹 개시일로부터:</p>
                <ol className="mt-2 ml-4 space-y-1 text-sm list-decimal">
                  <li>
                    2개월 이내 해지 시 : 가맹비에 잔여 금액의 50% 환불
                  </li>
                  <li>
                    4개월 이내 해지 시 : 가맹비에 잔여 금액의 25% 환불
                  </li>
                  <li>4개월 경과 후 : 환불 불가</li>
                </ol>
                <p className="mt-2 text-sm">
                  환불 요청은 서면으로 제출해야 하며, 본사의 검토 후 14일 이내
                  회신 및 처리.
                </p>
              </div>

              {/* 제7조 */}
              <div>
                <div className="font-bold text-brand-red">
                  제7조 (위약금 및 위약벌 조항)
                </div>
                <p className="mt-2">
                  가맹점이 아래 사항을 위반할 경우 본사는 계약 해지 및 다음과
                  같은 위약벌을 부과할 수 있다.
                </p>
                <ol className="mt-2 ml-4 space-y-2 text-sm list-decimal">
                  <li>
                    <strong>교재 무단 복제 또는 유출 확인 시:</strong>
                    <ul className="ml-4 mt-1 space-y-0.5">
                      <li>
                        · 무단 복제 건당 1,000,000원(백만원)의 위약금 즉시 부과
                      </li>
                      <li>
                        · &ldquo;건당&rdquo;이란 시험지, 해설지 등 본사에서
                        제공하는 자료 1부 기준. 자료 일부 복제도
                        &ldquo;건당&rdquo;에 포함
                      </li>
                      <li>· 민형사상 책임 추궁 및 손해배상 청구 가능</li>
                    </ul>
                  </li>
                  <li>
                    <strong>타인에게 콘텐츠 공유·재판매 시:</strong>
                    <ul className="ml-4 mt-1 space-y-0.5">
                      <li>
                        · 콘텐츠 공유·재판매 자료 1개(자료 1회분) 건당
                        10,000,000원
                      </li>
                      <li>
                        · 판매·공유한 자료가 복제 배포되었을 경우 7조 1항의 복제
                        위약벌도 함께 청구
                      </li>
                      <li>
                        · 2회 이상 발생 시 계약 즉시 해지 및 법적 조치
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>타 브랜드 유사 콘텐츠 사용 시:</strong>
                    <ul className="ml-4 mt-1 space-y-0.5">
                      <li>· 본사와 사전 협의 후 사용 가능</li>
                      <li>· 본사 협의 없이 운영 시 계약 즉시 해지</li>
                      <li>· 계약 즉시 해지 시 가맹비 반환 불가</li>
                      <li>· 위약금 5,000,000원(오백만원) 부과</li>
                    </ul>
                  </li>
                </ol>
              </div>

              {/* 제8조 */}
              <div>
                <div className="font-bold text-brand-red">
                  제8조 (계약 기간)
                </div>
                <p className="mt-2">
                  본 계약의 유효기간은 계약 체결일로부터 당해년도 12월
                  31일까지 유효하다. 계약 만료일 1개월 전(11월 30일까지) 양
                  당사자 간 합의가 없는 경우 계약은 자동
                  &ldquo;종료&rdquo;되며, 이후 재계약 여부는 상호 협의한다.
                </p>
              </div>

              {/* 제9조 */}
              <div>
                <div className="font-bold text-brand-red">
                  제9조 (DB 관련)
                </div>
                <ol className="mt-2 ml-4 space-y-1 text-sm list-decimal">
                  <li>
                    DB(데이터베이스)란 본사 수업 시스템을 통해 수집된 학생
                    개인정보(성명, 연락처, 학교, 학년, 주소 등) 및 합격자 명단을
                    의미한다. 수강 확정 여부와 관계없이 수집된 모든 학생(상담 후
                    미등록 인원 포함) 정보를 포함한다.
                  </li>
                  <li>
                    가맹점은 수집된 개인정보를 본 계약상 서비스 운영 및 학습
                    관리 목적 외 사용하지 않는다. 개인정보 수집 시
                    제3자(십일전략) 제공 동의를 시행하며, 미비로 발생하는 문제는
                    가맹점이 책임진다.
                  </li>
                  <li>
                    본사는 입시 결과 발표 후 당해년도 합격자 명단을{" "}
                    <strong>다음해 가맹 연장 시</strong>에 가맹점에 제공하며,
                    가맹점은 이를 계약 기간 내 홍보 및 마케팅 자료로만 사용할 수
                    있다.
                  </li>
                  <li>
                    <strong>
                      가맹 해지 시에는 본인 가맹점에서 직접 합격시킨 합격생
                      외에는 합격자 명단을 사용할 수 없다.
                    </strong>{" "}
                    본사 제공 합격자 DB는 가맹 종료와 동시에 사용 권한이
                    소멸된다.
                  </li>
                  <li>
                    가맹점은 본사 제공 합격자 DB를 제3자에게 제공·외부
                    유출·복제·재판매할 수 없으며, 위반 시 제7조 위약벌 조항이
                    적용된다.
                  </li>
                  <li>
                    학업 성과·입시 결과 등은 실명 기반 내부 마케팅 자료로만 활용
                    가능하며, 외부 공개 시 본사의 사전 서면 승인을 받아야 한다.
                  </li>
                  <li>
                    계약 해지·종료 시, 가맹점은 본사 제공 DB(합격자 명단,
                    분석자료 등)를 지체 없이 파기 또는 본사에 반환해야 하며,
                    위반 시 민형사상 책임을 질 수 있다.
                  </li>
                </ol>
              </div>

              {/* 제10조 */}
              <div>
                <div className="font-bold text-brand-red">
                  제10조 (가맹점의 의무)
                </div>
                <ol className="mt-2 ml-4 space-y-1 text-sm list-decimal">
                  <li>
                    수강생 유치를 위한 온·오프라인 홍보, 상담, 마케팅 활동의
                    성실한 수행 및 본사 요청 공동 마케팅 협조
                  </li>
                  <li>
                    온라인 수업이 원활히 운영될 수 있는 안정적 인터넷 환경 사전
                    구축·유지 (문제 발생 시 가맹점 책임)
                  </li>
                  <li>
                    본사 시스템·교재·콘텐츠 등 교육 자료를 승인된 목적 외
                    사용·타 브랜드 병행 사용 금지
                  </li>
                  <li>
                    본사 운영 정책·수업 커리큘럼·평가 방식 성실 준수, 요청 시
                    운영 보고서·수강생 현황·마케팅 실적 등 성실 제출
                  </li>
                  <li>
                    본사 및 수강생 간 소통 창구(카카오톡 채널, ClassIn 등) 적극
                    활용한 질의응답·학습 상담 충실 수행
                  </li>
                  <li>
                    관계 법령 준수 및 학생/학부모 개인정보 보호 의무 다함
                  </li>
                </ol>
              </div>

              {/* 제11조 */}
              <div>
                <div className="font-bold text-brand-red">
                  제11조 (기타 조항)
                </div>
                <ol className="mt-2 ml-4 space-y-1 text-sm list-decimal">
                  <li>
                    가맹점은 계약 체결 전 온라인 수업에 필수적인 사용
                    환경(속도, 안정성, 장비 등) 사전 점검을 시행해야 하며, 점검이
                    시행되지 않거나 본사 기준에 부합하지 않을 경우 가맹
                    승인·운영 개시를 보류·재검토할 수 있다.
                    <ul className="ml-4 mt-1 space-y-0.5 text-xs">
                      <li>
                        * 사전 점검 항목: 인터넷 속도 300 Mbps 이상, 수업
                        시뮬레이션 시 진행 안정성
                      </li>
                    </ul>
                  </li>
                  <li>
                    본 계약에 명시되지 않은 사항은 관련 법령 및 상호 협의에 따라
                    결정하며, 협의 불가 시 관습 및 신의성실 원칙에 따라
                    처리한다.
                  </li>
                  <li>
                    계약 이행 중 발생하는 분쟁은 가급적 협의로 해결하되,
                    불가능할 경우 본사의 본점 소재지를 관할하는 법원을 제1심 전속
                    관할 법원으로 한다.
                  </li>
                  <li>
                    본 계약은 당사자 간 서명·날인을 통해 효력을 가지며, 서면
                    합의 없이 일방적 변경·해석은 인정되지 않는다.
                  </li>
                  <li>
                    일부 조항이 무효가 되더라도 그 외의 조항은 계속 유효하며,
                    무효 조항은 관계 법령 및 계약 목적에 부합하도록 합리적으로
                    수정·보완하여 적용한다.
                  </li>
                </ol>
              </div>

              {/* 부칙 */}
              <div className="pt-3 mt-3 border-t border-brand-border">
                <div className="font-bold">부칙</div>
                <p className="mt-2 text-sm">
                  계약 체결일: 2025년 ○월 ○일
                </p>
                <p className="mt-2 text-sm">
                  본 계약은 계약 당사자 간 신의성실 원칙에 따라 체결되며,
                  서명과 날인을 통해 법적 효력을 가진다.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-brand-bg rounded-lg">
                    <div className="text-xs text-brand-gray">
                      (주)십일전략 대표
                    </div>
                    <div className="mt-1">
                      이름: __________ (서명 또는 인)
                    </div>
                  </div>
                  <div className="p-3 bg-brand-bg rounded-lg">
                    <div className="text-xs text-brand-gray">가맹점 대표</div>
                    <div className="mt-1">
                      이름: __________ (서명 또는 인)
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-brand-gray border-t border-brand-border pt-3 mt-3">
                ※ 본 계약서는 표준 양식이며, 실제 계약 시 일부 조항이 변경될 수
                있습니다. 정식 계약서는 가맹 진행 시 별도 제공됩니다.
              </p>
            </div>
          </details>
        </section>
      </main>
    </>
  );
}
