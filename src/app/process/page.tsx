import PageHeader from "@/components/PageHeader";

const steps = [
  {
    num: 1,
    title: "카카오톡 상담 신청",
    desc: "카카오톡 채널로 가맹 문의 및 기본 정보 전달",
  },
  {
    num: 2,
    title: "사업 설명",
    desc: "본사가 보내드리는 가맹정보 웹페이지를 참고 · 추가 문의는 본사 상담자와 온라인으로 진행",
  },
  {
    num: 3,
    title: "사전 점검",
    desc: "인터넷 환경 (300Mbps 이상) · 강의실 시설 · 수업 시뮬레이션",
  },
  {
    num: 4,
    title: "가맹 형태 선택",
    desc: "학원 위치·규모에 맞는 지역권 형태 결정 (無/1형/2형/3형)",
  },
  {
    num: 5,
    title: "계약 체결",
    desc: "정식 가맹 계약서 작성 및 가맹비 납부",
  },
  {
    num: 6,
    title: "수업 환경 세팅",
    desc: "ClassIn 설정 · 패드 준비 안내 · 학원 자체 시뮬레이션",
  },
  {
    num: 7,
    title: "오픈 & 운영 시작 🎉",
    desc: "학생 모집 → 수업 시작 → 가맹학원 직접 정기적 마케팅 활성화",
    highlight: true,
  },
];

const checkItems = [
  {
    title: "인터넷 속도",
    desc: "300 Mbps 이상 (와이파이 시 학생 수에 따른 용량 점검 필수)",
  },
  {
    title: "수업 시뮬레이션",
    desc: "실제 수업 환경에서 라이브 송출/필기 동기화 안정성 검증",
  },
  {
    title: "강의실 환경",
    desc: "학생당 충분한 공간 · 패드 거치 가능 환경 · 시험 분위기 조성 가능",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        label="PROCESS"
        title="가맹 진행 절차"
        subtitle="문의부터 개점까지 7단계"
      />

      <main>
        {/* 인트로 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pb-6">
          <div className="bg-white rounded-2xl border-t-4 border-brand-red shadow-sm p-6 lg:p-8">
            <h2 className="font-serif-kr font-bold text-lg lg:text-2xl">
              상담부터 개점까지
            </h2>
            <p className="text-sm lg:text-base leading-relaxed mt-3">
              처음 문의 후 빠르면 2~3주 안에 가맹 계약 및 수업 시작이
              가능합니다. 본사가 사전 점검부터 환경 세팅까지 함께 진행합니다.
            </p>
          </div>
        </section>

        {/* 7단계 진행 절차 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-6">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">
              7단계 진행 절차
            </h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              예상 2~3주
            </span>
          </div>

          <div className="space-y-3">
            {steps.map((step) => (
              <div
                key={step.num}
                className={`bg-white rounded-2xl p-5 lg:p-6 flex items-center gap-4${
                  step.highlight
                    ? " border-2 border-brand-red"
                    : " border border-brand-border"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-brand-red text-white font-serif-kr font-black text-lg flex items-center justify-center shrink-0">
                  {step.num}
                </div>
                <div className="flex-1">
                  <div
                    className={`font-bold text-base${
                      step.highlight ? " text-brand-red" : ""
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-xs lg:text-sm text-brand-gray mt-1">
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 사전 점검 항목 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
            <h3 className="font-bold text-base lg:text-lg">
              사전 점검 항목 (3단계)
            </h3>
            <div className="mt-4 space-y-3">
              {checkItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-brand-red font-bold shrink-0">✓</span>
                  <div>
                    <div className="font-bold text-sm">{item.title}</div>
                    <div className="text-xs text-brand-gray mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 하단 여백 */}
        <div className="pb-12" />
      </main>
    </>
  );
}
