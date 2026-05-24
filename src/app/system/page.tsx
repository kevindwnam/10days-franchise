import PageHeader from "@/components/PageHeader";

const steps = [
  { num: 1, title: "75분 시험", sub: "ClassIn 시험감독" },
  { num: 2, title: "10분 휴식", sub: "간단한 질문 가능" },
  { num: 3, title: "풀이 수업", sub: "국어·수학1·수학2" },
  { num: 4, title: "질문방", sub: "강사·조교·동료와 소통" },
];

const mobileRows = [
  { label: "소통", old: "일방적", new: "양방향 실시간" },
  { label: "몰입도", old: "낮음", new: "최고" },
  { label: "반복 학습", old: "녹화 가능", new: "라이브 + 녹화" },
  { label: "피드백", old: "거의 없음", new: "실시간 가능" },
  { label: "데이터", old: "없음", new: "패턴 분석 제공" },
];

const pcRows = [
  {
    label: "소통 방식",
    online: "일방적 (강사 → 학생)",
    offline: "일방적 (강사 → 학생)",
    ours: "양방향 실시간 소통",
  },
  {
    label: "몰입도",
    online: "낮음 (자기주도성 필요)",
    offline: "높음 (강사 통제)",
    ours: "최고 (능동적 참여)",
  },
  {
    label: "반복 학습",
    online: "가능 (녹화 강의)",
    offline: "불가능",
    ours: "가능 (라이브 + 녹화)",
  },
  {
    label: "질문 & 피드백",
    online: "거의 없음",
    offline: "제한적",
    ours: "실시간 가능",
  },
  {
    label: "학습 데이터",
    online: "없음",
    offline: "없음",
    ours: "학습 패턴 분석 & 맞춤 피드백",
  },
];

const classInFeatures = [
  { icon: "📹", title: "실시간 화상 강의", desc: "강사·조교·학생 전원 캠 ON 소통" },
  { icon: "✏️", title: "디지털 칠판 + 화판", desc: "강사 칠판과 학생 필기 동기화" },
  { icon: "📊", title: "LMS 통합 관리", desc: "과제 제출 · 채점 · 코멘트" },
  { icon: "🎬", title: "수업 녹화본 저장", desc: "과제 제출 후 복습 시청 가능" },
  {
    icon: "🎯",
    title: "시험 감독 기능",
    desc: "백색소음 · 타이머 · 캠 모니터링 · 집중도 알림",
    fullWidth: true,
  },
];

export default function SystemPage() {
  return (
    <>
      <PageHeader
        label="LIVE CLASS SYSTEM"
        title="참여형 라이브 수업 시스템"
        subtitle="인강이 아닙니다. 실시간 라이브 참여형 수업입니다."
      />

      <main>
        {/* 인트로 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pb-6">
          <div className="bg-white rounded-2xl border-t-4 border-brand-red shadow-sm p-6 lg:p-8">
            <h2 className="font-serif-kr font-bold text-lg lg:text-2xl">
              &ldquo;내가 아는 것과 모르는 것&rdquo;을 정확히 파악합니다
            </h2>
            <p className="text-sm lg:text-base leading-relaxed mt-3">
              십일전략의 참여형 온라인 수업은 단순한 인강이 아닙니다. 본사
              강사진의 라이브 강의를 학생이 태블릿으로 시청하며, 학생의 필기를
              강사·조교가 실시간 모니터링하고 즉각 피드백을 제공하는 양방향
              수업입니다. 질문하고, 피드백받고, 다시 질문하는 과정을 통해
              메타인지를 강화합니다.
            </p>
          </div>
        </section>

        {/* 하루 수업 구조 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-6">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">하루 수업 구조</h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              4단계 학습 루프
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
            <div className="space-y-3 lg:grid lg:grid-cols-4 lg:gap-3 lg:space-y-0">
              {steps.map((s) => (
                <div
                  key={s.num}
                  className="flex lg:flex-col lg:text-center items-center gap-3 lg:gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-red text-white font-bold flex items-center justify-center shrink-0">
                    {s.num}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{s.title}</div>
                    <div className="text-xs text-brand-gray mt-0.5">
                      {s.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-3 bg-brand-bg rounded-lg text-xs lg:text-sm text-brand-gray text-center">
              💡 &ldquo;시험 → 풀이 → 질문&rdquo;의 빠른 루프를 통해 학습
              효율을 극대화합니다
            </div>
          </div>
        </section>

        {/* 비교표 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">
              기존 강의와의 차이점
            </h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              3가지 비교
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border overflow-hidden">
            {/* 모바일 카드 형식 */}
            <div className="lg:hidden divide-y divide-brand-border">
              <div className="p-5 grid grid-cols-3 gap-2 text-xs items-center bg-brand-bg">
                <div className="font-bold text-brand-gray">구분</div>
                <div className="text-center font-bold text-brand-gray">
                  인강
                </div>
                <div className="text-center font-bold text-brand-red">
                  십일전략
                </div>
              </div>
              {mobileRows.map((row) => (
                <div
                  key={row.label}
                  className="p-5 grid grid-cols-3 gap-2 text-xs items-center"
                >
                  <div className="font-bold">{row.label}</div>
                  <div className="text-center text-brand-gray">{row.old}</div>
                  <div className="text-center font-bold">{row.new}</div>
                </div>
              ))}
            </div>

            {/* PC 테이블 */}
            <table className="hidden lg:table w-full text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="py-4 px-6 text-left font-bold">구분</th>
                  <th className="py-4 px-6 text-center font-bold">
                    기존 인강
                  </th>
                  <th className="py-4 px-6 text-center font-bold">
                    기존 현장강의
                  </th>
                  <th className="py-4 px-6 text-center font-bold text-brand-red bg-white">
                    십일전략
                  </th>
                </tr>
              </thead>
              <tbody>
                {pcRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={
                      i < pcRows.length - 1
                        ? "border-b border-brand-border"
                        : ""
                    }
                  >
                    <td className="py-4 px-6 font-bold">{row.label}</td>
                    <td className="py-4 px-6 text-center text-brand-gray">
                      {row.online}
                    </td>
                    <td className="py-4 px-6 text-center text-brand-gray">
                      {row.offline}
                    </td>
                    <td className="py-4 px-6 text-center font-bold">
                      {row.ours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ClassIn 플랫폼 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">
              ClassIn 플랫폼 활용
            </h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              전용 교육 플랫폼
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {classInFeatures.map((f) => (
              <div
                key={f.title}
                className={`bg-white rounded-xl border border-brand-border p-4 lg:p-5${
                  f.fullWidth ? " lg:col-span-2" : ""
                }`}
              >
                <div className="font-bold text-sm lg:text-base">
                  {f.icon} {f.title}
                </div>
                <div className="text-xs lg:text-sm text-brand-gray mt-1">
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 출제 적중률 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">출제 적중률</h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              26학년도 가천대
            </span>
          </div>

          <div className="bg-brand-dark text-white rounded-2xl p-6 lg:p-10">
            <p className="text-sm lg:text-base text-gray-300 text-center mb-6">
              26학년도 가천대 시험 ↔ GR831 파이널 모의고사{" "}
              <strong className="text-white">실제 출제 문항 매핑 분석</strong>
            </p>
            <div className="grid grid-cols-2 gap-4 lg:gap-8">
              <div className="text-center border-r border-gray-700">
                <div className="text-xs text-brand-red font-bold tracking-widest mb-2">
                  MATH
                </div>
                <div className="font-serif-kr font-black text-5xl lg:text-7xl text-white">
                  90
                  <span className="text-2xl lg:text-4xl">%</span>
                </div>
                <div className="text-xs lg:text-sm text-gray-300 mt-3">
                  수학 과목 적중
                </div>
                <div className="text-[10px] lg:text-xs text-gray-400 mt-1">
                  EBS 기반 유형·변형 적중
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-brand-red font-bold tracking-widest mb-2">
                  KOREAN
                </div>
                <div className="font-serif-kr font-black text-5xl lg:text-7xl text-white">
                  80
                  <span className="text-2xl lg:text-4xl">%</span>
                </div>
                <div className="text-xs lg:text-sm text-gray-300 mt-3">
                  국어 과목 적중
                </div>
                <div className="text-[10px] lg:text-xs text-gray-400 mt-1">
                  지문 형태·요소 적중
                </div>
              </div>
            </div>
            <p className="text-xs lg:text-sm text-gray-400 text-center mt-6 leading-relaxed">
              * 지문 자체는 EBS 연계 출제 특성상 자동 100% 적중되며,
              <br className="hidden lg:block" />위 수치는{" "}
              <strong className="text-white">실제 시험 출제 문항 기준</strong>의
              적중률입니다.
            </p>
            <p className="text-xs text-brand-red text-center mt-4 font-bold">
              시험에서 마주친 문제, 학원에서 이미 풀어본 문제 — 데이터로 검증된
              적중률
            </p>
          </div>
        </section>

        {/* 하단 여백 */}
        <div className="pb-12" />
      </main>
    </>
  );
}
