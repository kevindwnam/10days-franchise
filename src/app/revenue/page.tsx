import PageHeader from "@/components/PageHeader";

const simCards = [
  { students: 5, amount: "100", highlight: false, dark: false },
  { students: 10, amount: "200", highlight: false, dark: false },
  { students: 20, amount: "400", highlight: false, dark: false },
  { students: 30, amount: "600", highlight: true, dark: false },
  { students: 50, amount: "1,000", highlight: false, dark: true },
];

export default function RevenuePage() {
  return (
    <>
      <PageHeader
        label="REVENUE STRUCTURE"
        title="수익 구조 & 정산"
        subtitle="수강료 · 정산 금액 · 가맹점 순익 시뮬레이션"
      />

      <main>
        {/* 인트로 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pb-6">
          <div className="bg-white rounded-2xl border-t-4 border-brand-red shadow-sm p-6 lg:p-8">
            <h2 className="font-serif-kr font-bold text-lg lg:text-2xl">
              투명한 정산, 명확한 수익
            </h2>
            <p className="text-sm lg:text-base leading-relaxed mt-3">
              십일전략의 모든 수강료와 정산 금액은 공개되어 있습니다. 가맹점은
              본사가 제시한{" "}
              <strong className="text-brand-red">최저선 이상</strong>의 수강료를
              자율적으로 책정할 수 있으며, 정산 차액이 가맹점의 순익이 됩니다.
            </p>
            <div className="mt-4 p-3 bg-brand-bg rounded-lg text-xs lg:text-sm text-brand-gray">
              📌 본 페이지의 모든 수치는 학생 1명 기준이며, 부가세 별도입니다.
            </div>
          </div>
        </section>

        {/* 수강료 최저선 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-6">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">수강료 최저선</h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              최저선 이상 학원 자율 책정 가능
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border overflow-hidden">
            {/* 모바일 카드 */}
            <div className="lg:hidden divide-y divide-brand-border">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-base">모의고사 정규반</div>
                  <div className="text-xs text-brand-red font-bold">메인</div>
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-brand-gray">회당 최저 수강료</span>
                    <strong>90,000원</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-gray">회당 교재비</span>
                    <strong>14,000원</strong>
                  </div>
                  <div className="flex justify-between pt-2 mt-2 border-t border-brand-border">
                    <span>월 4회 기준</span>
                    <strong className="text-brand-red text-base">
                      416,000원
                    </strong>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="font-bold text-base mb-3">
                  개념특강{" "}
                  <span className="text-xs text-brand-gray font-normal ml-1">
                    (정규반 수강생 한정)
                  </span>
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-brand-gray">회당 최저 수강료</span>
                    <strong>40,000원</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-gray">교재비</span>
                    <strong>무료</strong>
                  </div>
                  <div className="flex justify-between pt-2 mt-2 border-t border-brand-border">
                    <span>월 4회 기준</span>
                    <strong className="text-brand-red text-base">
                      160,000원
                    </strong>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-base">
                    파이널 특강{" "}
                    <span className="text-xs text-brand-gray font-normal ml-1">
                      (20회 묶음)
                    </span>
                  </div>
                  <div className="text-xs bg-brand-bg text-brand-gray px-2 py-1 rounded-full font-bold">
                    금액 미정
                  </div>
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-brand-gray">수강료 (20회)</span>
                    <strong>1,000,000원</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-gray">교재비 (20회)</span>
                    <strong>200,000원</strong>
                  </div>
                  <div className="flex justify-between pt-2 mt-2 border-t border-brand-border">
                    <span>총액</span>
                    <strong className="text-brand-red text-base">
                      1,200,000원
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* PC 테이블 */}
            <table className="hidden lg:table w-full">
              <thead>
                <tr className="bg-brand-dark text-white text-sm">
                  <th className="py-4 px-6 text-left font-bold">구분</th>
                  <th className="py-4 px-6 text-right font-bold">
                    회당 최저 수강료
                  </th>
                  <th className="py-4 px-6 text-right font-bold">
                    회당 교재비
                  </th>
                  <th className="py-4 px-6 text-right font-bold">
                    월 4회 기준 (총)
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-brand-border">
                  <td className="py-4 px-6 font-bold">
                    모의고사 정규반
                    <span className="ml-2 text-xs text-brand-red">메인</span>
                  </td>
                  <td className="py-4 px-6 text-right">90,000원</td>
                  <td className="py-4 px-6 text-right">14,000원</td>
                  <td className="py-4 px-6 text-right">
                    <strong className="text-brand-red text-base">
                      416,000원
                    </strong>
                  </td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="py-4 px-6 font-bold">
                    개념특강
                    <div className="text-xs text-brand-gray font-normal mt-0.5">
                      정규반 수강생 한정
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">40,000원</td>
                  <td className="py-4 px-6 text-right">무료</td>
                  <td className="py-4 px-6 text-right">
                    <strong className="text-brand-red text-base">
                      160,000원
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold">
                    파이널 특강
                    <div className="text-xs text-brand-gray font-normal mt-0.5">
                      20회 묶음 판매
                    </div>
                    <span className="inline-block mt-1 text-[10px] bg-brand-bg text-brand-gray px-2 py-0.5 rounded-full font-bold">
                      금액 미정
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    1,000,000원
                    <span className="text-xs text-brand-gray block">
                      (20회 총액)
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    200,000원
                    <span className="text-xs text-brand-gray block">
                      (20회 총액)
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <strong className="text-brand-red text-base">
                      1,200,000원
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-brand-gray mt-3 text-center">
            위 금액은 학원에서 받을 수 있는 <strong>최저</strong> 수강료입니다.
            자율적으로 더 높게 책정 가능합니다.
          </p>
        </section>

        {/* 본사 정산 금액 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">본사 정산 금액</h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              가맹점 → 본사
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border overflow-hidden">
            {/* 모바일 카드 */}
            <div className="lg:hidden divide-y divide-brand-border">
              <div className="p-5">
                <div className="font-bold text-base mb-3">모의고사 정규반</div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-brand-gray">회당 정산</span>
                    <strong>40,000원</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-gray">회당 교재비</span>
                    <strong>14,000원</strong>
                  </div>
                  <div className="flex justify-between pt-2 mt-2 border-t border-brand-border">
                    <span>월 4회 기준</span>
                    <strong className="text-base">216,000원</strong>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="font-bold text-base mb-3">개념특강</div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-brand-gray">회당 정산</span>
                    <strong>20,000원</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-gray">교재비</span>
                    <strong>무료</strong>
                  </div>
                  <div className="flex justify-between pt-2 mt-2 border-t border-brand-border">
                    <span>월 4회 기준</span>
                    <strong className="text-base">80,000원</strong>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-base">
                    파이널 특강{" "}
                    <span className="text-xs text-brand-gray font-normal ml-1">
                      (20회 묶음)
                    </span>
                  </div>
                  <div className="text-xs bg-brand-bg text-brand-gray px-2 py-1 rounded-full font-bold">
                    금액 미정
                  </div>
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-brand-gray">수강료 정산 (20회)</span>
                    <strong>500,000원</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-gray">교재비 정산 (20회)</span>
                    <strong>200,000원</strong>
                  </div>
                  <div className="flex justify-between pt-2 mt-2 border-t border-brand-border">
                    <span>총 정산</span>
                    <strong className="text-base">700,000원</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* PC 테이블 */}
            <table className="hidden lg:table w-full">
              <thead>
                <tr className="bg-brand-dark text-white text-sm">
                  <th className="py-4 px-6 text-left font-bold">구분</th>
                  <th className="py-4 px-6 text-right font-bold">회당 정산</th>
                  <th className="py-4 px-6 text-right font-bold">
                    회당 교재비
                  </th>
                  <th className="py-4 px-6 text-right font-bold">
                    월 4회 정산 (총)
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-brand-border">
                  <td className="py-4 px-6 font-bold">모의고사 정규반</td>
                  <td className="py-4 px-6 text-right">40,000원</td>
                  <td className="py-4 px-6 text-right">14,000원</td>
                  <td className="py-4 px-6 text-right">
                    <strong className="text-base">216,000원</strong>
                  </td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="py-4 px-6 font-bold">개념특강</td>
                  <td className="py-4 px-6 text-right">20,000원</td>
                  <td className="py-4 px-6 text-right">무료</td>
                  <td className="py-4 px-6 text-right">
                    <strong className="text-base">80,000원</strong>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold">
                    파이널 특강
                    <div className="text-xs text-brand-gray font-normal mt-0.5">
                      20회 묶음
                    </div>
                    <span className="inline-block mt-1 text-[10px] bg-brand-bg text-brand-gray px-2 py-0.5 rounded-full font-bold">
                      금액 미정
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    500,000원
                    <span className="text-xs text-brand-gray block">
                      (20회 총액)
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    200,000원
                    <span className="text-xs text-brand-gray block">
                      (20회 총액)
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <strong className="text-base">700,000원</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 가맹점 순익 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">가맹점 순익</h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              학생 1명 기준
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* 정규반 */}
            <div className="bg-white rounded-2xl border border-brand-border p-5 lg:p-6">
              <div className="text-xs font-bold text-brand-red tracking-widest mb-2">
                메인
              </div>
              <div className="font-bold text-base">모의고사 정규반</div>
              <div className="text-xs text-brand-gray mt-1">월 4회 기준</div>
              <div className="mt-4 pt-4 border-t border-brand-border space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-brand-gray">학원 매출</span>
                  <strong>416,000원</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-gray">본사 정산</span>
                  <strong>216,000원</strong>
                </div>
                <div className="flex justify-between pt-2 mt-2 border-t border-brand-border">
                  <span className="font-bold">학원 순익</span>
                  <strong className="text-brand-red text-base">
                    200,000원
                  </strong>
                </div>
              </div>
            </div>

            {/* 개념특강 */}
            <div className="bg-white rounded-2xl border border-brand-border p-5 lg:p-6">
              <div className="text-xs font-bold text-brand-gray tracking-widest mb-2">
                옵션
              </div>
              <div className="font-bold text-base">개념특강</div>
              <div className="text-xs text-brand-gray mt-1">
                월 4회 (화·목 1세트)
              </div>
              <div className="mt-4 pt-4 border-t border-brand-border space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-brand-gray">학원 매출</span>
                  <strong>160,000원</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-gray">본사 정산</span>
                  <strong>80,000원</strong>
                </div>
                <div className="flex justify-between pt-2 mt-2 border-t border-brand-border">
                  <span className="font-bold">학원 순익</span>
                  <strong className="text-brand-red text-base">80,000원</strong>
                </div>
              </div>
            </div>

            {/* 파이널 특강 */}
            <div className="bg-white rounded-2xl border border-brand-border p-5 lg:p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-bold text-brand-gray tracking-widest">
                  시즌
                </div>
                <div className="text-[10px] bg-brand-bg text-brand-gray px-2 py-0.5 rounded-full font-bold">
                  금액 미정
                </div>
              </div>
              <div className="font-bold text-base">파이널 특강</div>
              <div className="text-xs text-brand-gray mt-1">
                20회 묶음 총액
              </div>
              <div className="mt-4 pt-4 border-t border-brand-border space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-brand-gray">학원 매출</span>
                  <strong>1,200,000원</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-gray">본사 정산</span>
                  <strong>700,000원</strong>
                </div>
                <div className="flex justify-between pt-2 mt-2 border-t border-brand-border">
                  <span className="font-bold">학원 순익</span>
                  <strong className="text-brand-red text-base">
                    500,000원
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-brand-gray mt-3 text-center">
            위 금액은 본사 제시 최저 수강료 기준입니다. 학원 자율 책정 시 순익이
            더 증가합니다.
          </p>
        </section>

        {/* 학생 수별 시뮬레이션 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">
              학생 수별 월 순익 시뮬레이션
            </h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              정규반 기준
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-3">
            {simCards.map((card) => (
              <div
                key={card.students}
                className={`rounded-xl p-4 text-center${
                  card.dark
                    ? " bg-brand-dark text-white col-span-2 lg:col-span-1"
                    : card.highlight
                      ? " bg-white border-2 border-brand-red"
                      : " bg-white border border-brand-border"
                }`}
              >
                <div
                  className={`text-xs ${
                    card.dark
                      ? "text-gray-300"
                      : card.highlight
                        ? "text-brand-red font-bold"
                        : "text-brand-gray"
                  }`}
                >
                  학생 {card.students}명
                </div>
                <div
                  className={`font-serif-kr font-black text-lg lg:text-xl mt-1 ${
                    card.highlight || card.dark ? "text-brand-red" : ""
                  }`}
                >
                  {card.amount}
                  <span
                    className={`text-xs font-normal ${
                      card.dark ? "text-gray-300" : "text-brand-gray"
                    }`}
                  >
                    만원
                  </span>
                </div>
                <div
                  className={`text-[10px] mt-1 ${
                    card.dark ? "text-gray-400" : "text-brand-gray"
                  }`}
                >
                  월 순익
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-brand-bg rounded-lg text-xs lg:text-sm text-brand-gray">
            💡 <strong>참고:</strong> 위는 최저 수강료(90,000원/회)
            기준입니다. 실제로는 학원이 자율 책정한 수강료(예: 100,000원/회)로
            운영 시 순익이 더 증가합니다. 개념특강을 추가로 운영하면 학생 1명당 월
            80,000원의 추가 순익이 발생합니다.
          </div>
        </section>

        {/* 콘텐츠 사용료 안내 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
            <h3 className="font-serif-kr font-bold text-base lg:text-lg">
              콘텐츠 사용료 안내
            </h3>
            <p className="text-sm lg:text-base text-brand-gray mt-2 leading-relaxed">
              본사가 제공하는 모든 콘텐츠(문제지, 워크북, 답안지,{" "}
              <strong>강의노트</strong>, 해설지, 모범답안, 해설영상,{" "}
              <strong>매일국어 1컷</strong>)는 정산 금액에 포함되어 있습니다.
              별도 사용료는 없습니다.
            </p>

            <div className="mt-5">
              <div className="text-xs font-bold text-brand-red tracking-widest mb-2">
                📦 실물 배송
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-brand-bg rounded-lg p-3 text-center">
                  📄 문제지
                </div>
                <div className="bg-brand-bg rounded-lg p-3 text-center">
                  📘 워크북
                </div>
                <div className="bg-brand-bg rounded-lg p-3 text-center">
                  📝 답안지
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-xs font-bold text-brand-red tracking-widest mb-2">
                💻 온라인 학습웹 제공
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
                <div className="bg-brand-bg rounded-lg p-3 text-center">
                  📝 시험지
                </div>
                <div className="bg-brand-bg rounded-lg p-3 text-center">
                  📑 강의노트
                </div>
                <div className="bg-brand-bg rounded-lg p-3 text-center">
                  📖 해설지
                </div>
                <div className="bg-brand-bg rounded-lg p-3 text-center">
                  ✏️ 모범답안
                </div>
                <div className="bg-brand-bg rounded-lg p-3 text-center">
                  🎬 해설영상
                </div>
                <div className="bg-brand-bg rounded-lg p-3 text-center">
                  📱 매일국어 1컷
                </div>
              </div>
              <p className="text-xs text-brand-gray mt-3">
                * 수강생은 온라인 학습웹에서 위 자료를 언제든 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 하단 여백 */}
        <div className="pb-12" />
      </main>
    </>
  );
}
