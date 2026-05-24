import PageHeader from "@/components/PageHeader";

const franchiseTypes = [
  {
    name: "지역권 無",
    badge: "가맹비 0원 · 추천",
    badgeClass: "bg-brand-red text-white",
    borderClass: "border-2 border-brand-red",
    subtitle: "소규모 시작용",
    radius: "없음",
    breakeven: "무관",
    feeLabel: "가맹비",
    fee: "0원",
  },
  {
    name: "지역권 1형",
    badge: "1km",
    badgeClass: "bg-brand-bg text-brand-gray",
    borderClass: "border border-brand-border",
    subtitle: "소규모 학원용",
    radius: "1km 이내",
    breakeven: "월 5명",
    feeLabel: "가맹비 (6월 이전)",
    fee: "480만원",
  },
  {
    name: "지역권 2형",
    badge: "4km",
    badgeClass: "bg-brand-bg text-brand-gray",
    borderClass: "border border-brand-border",
    subtitle: "중형 학원용",
    radius: "4km 이내",
    breakeven: "월 10명",
    feeLabel: "가맹비 (6월 이전)",
    fee: "960만원",
  },
  {
    name: "지역권 3형",
    badge: "12km",
    badgeClass: "bg-brand-bg text-brand-gray",
    borderClass: "border border-brand-border",
    subtitle: "대형 학원 · 지역 독점용",
    radius: "12km 이내",
    breakeven: "월 20명",
    feeLabel: "가맹비 (6월 이전)",
    fee: "1,920만원",
  },
];

const feeTable = [
  { type: "지역권 1형", fees: ["480만원", "400만원", "320만원", "240만원"] },
  { type: "지역권 2형", fees: ["960만원", "800만원", "640만원", "480만원"] },
  {
    type: "지역권 3형",
    fees: ["1,920만원", "1,600만원", "1,280만원", "960만원"],
  },
];

export default function FranchiseTypePage() {
  return (
    <>
      <PageHeader
        label="FRANCHISE TYPES"
        title="가맹 형태"
        subtitle="지역권 4종 · 가맹비 · 보호 반경"
      />

      <main>
        {/* 인트로 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pb-6">
          <div className="bg-white rounded-2xl border-t-4 border-brand-red shadow-sm p-6 lg:p-8">
            <h2 className="font-serif-kr font-bold text-lg lg:text-2xl">
              지역권으로 가맹점을 보호합니다
            </h2>
            <p className="text-sm lg:text-base leading-relaxed mt-3">
              가맹점의 안정적인 운영을 위해 4가지 가맹 형태를 제공합니다. 지역권
              형태를 선택하면 해당 반경 내 타 가맹이 제한되어 학원 상권이
              보호됩니다. 가맹비는 시기별로 차등 적용되며, 빠를수록 유리합니다.
            </p>
          </div>
        </section>

        {/* 4가지 가맹 형태 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-6">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">
              4가지 가맹 형태
            </h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              지역권 선택
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {franchiseTypes.map((ft) => (
              <div
                key={ft.name}
                className={`bg-white rounded-2xl ${ft.borderClass} p-5 lg:p-6`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-base">{ft.name}</div>
                  <div
                    className={`text-xs ${ft.badgeClass} px-2 py-1 rounded-full font-bold`}
                  >
                    {ft.badge}
                  </div>
                </div>
                <div className="text-xs text-brand-gray mb-3">
                  {ft.subtitle}
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-brand-gray">보호 반경</span>
                    <span>{ft.radius}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-gray">손익분기점</span>
                    <span>{ft.breakeven}</span>
                  </div>
                  <div className="flex justify-between pt-2 mt-2 border-t border-brand-border">
                    <span className="font-bold">{ft.feeLabel}</span>
                    <strong className="text-brand-red">{ft.fee}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 가맹비 시기별 차등 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">
              가맹비 시기별 차등
            </h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              빠를수록 유리
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border overflow-x-auto">
            <table className="w-full text-xs lg:text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="py-3 px-3 lg:px-6 text-left font-bold">
                    가맹 형태
                  </th>
                  <th className="py-3 px-3 lg:px-6 text-right font-bold">
                    6월 이전
                  </th>
                  <th className="py-3 px-3 lg:px-6 text-right font-bold">
                    7월 이전
                  </th>
                  <th className="py-3 px-3 lg:px-6 text-right font-bold">
                    8월 이전
                  </th>
                  <th className="py-3 px-3 lg:px-6 text-right font-bold">
                    8월 이후
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="py-3 px-3 lg:px-6 font-bold">지역권 無</td>
                  <td
                    colSpan={4}
                    className="py-3 px-3 lg:px-6 text-center text-brand-gray"
                  >
                    가맹비 無 (시기 무관)
                  </td>
                </tr>
                {feeTable.map((row, i) => (
                  <tr
                    key={row.type}
                    className={
                      i < feeTable.length - 1
                        ? "border-b border-brand-border"
                        : ""
                    }
                  >
                    <td className="py-3 px-3 lg:px-6 font-bold">{row.type}</td>
                    {row.fees.map((fee, j) => (
                      <td
                        key={j}
                        className={`py-3 px-3 lg:px-6 text-right${
                          j === 0 ? " font-bold text-brand-red" : ""
                        }`}
                      >
                        {fee}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-brand-gray mt-3 text-center">
            📌 가맹비는 시기가 늦어질수록 낮아지지만, 지역권 보호 효과도 같이
            줄어듭니다.
          </p>
        </section>

        {/* 하단 여백 */}
        <div className="pb-12" />
      </main>
    </>
  );
}
