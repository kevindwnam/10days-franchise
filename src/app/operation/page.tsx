import PageHeader from "@/components/PageHeader";

const weeklyFlow = [
  {
    day: "월",
    dayClass: "",
    title: "수강 인원 전달",
    desc: "가맹점 → 본사 (카카오톡 채널로 엑셀 파일 전송)",
  },
  {
    day: "화",
    dayClass: "",
    title: "콘텐츠 인쇄 & 일괄 배송",
    desc: "문제지·워크북·답안지 실물 + 해설지·모범답안·강의노트·해설영상 온라인 제공",
  },
  {
    day: "월~금",
    dayClass: " text-xs",
    title: "매일국어 1컷 발송",
    desc: "매일 아침 8시 카카오톡으로 9단계 카드뉴스 자동 발송 (15분 분량)",
  },
  {
    day: "토",
    dayClass: "",
    highlight: true,
    title: "수업 진행 (18:00 ~ 22:00)",
    desc: "정규 모의고사반 4시간 라이브 수업",
  },
  {
    day: "토",
    dayClass: "",
    title: "답안지 회송",
    desc: "가맹점이 답안지 PDF 스캔해 카카오톡 소통방으로 전달 (늦어도 일요일까지)",
  },
  {
    day: "금",
    dayClass: "",
    title: "채점지 & 분석표 발송",
    desc: (
      <>
        본사가 <strong>금요일 저녁 7시</strong> 학생/학부모에게 직접 발송
      </>
    ),
  },
];

const hqTasks = [
  "콘텐츠 제작 (문제·해설·모범답안)",
  "콘텐츠 인쇄 & 배송",
  "라이브 강의 진행",
  "답안 채점 & 분석표 제작",
  "성적표 · 출결 안내 등 학생/학부모 정기 발송",
  "매일국어 1컷 자동 발송 (월~금 아침 8시)",
  "카톡 · ClassIn 질문 응대",
];

const franchiseTasks = [
  "학생 모집 & 마케팅",
  "수업 공지 & 학부모 상담",
  "수업 환경 세팅 (인터넷·강의실)",
  "현장 출석 & 결석자 관리",
  "답안지 스캔 & 본사 전송",
  "학원 자체 케어 시스템 운영",
];

const classTypes = [
  {
    label: "메인",
    labelColor: "text-brand-red",
    title: "정규 모의고사반",
    desc: (
      <>
        5월 2일 ~ 10월 31일
        <br />
        매주 토요일 18:00 ~ 22:00
        <br />
        (4시간 수업)
      </>
    ),
  },
  {
    label: "옵션",
    labelColor: "text-brand-gray",
    title: "개념특강",
    desc: (
      <>
        매주 화·목요일 22:30 ~ 23:30
        <br />
        4등급 이하 대상
        <br />
        (정규반 수강생 한정)
      </>
    ),
  },
  {
    label: "시즌",
    labelColor: "text-brand-gray",
    title: "파이널 특강",
    desc: (
      <>
        수능 다음날부터 10일간
        <br />
        매일 2회 진행
        <br />
        (라이브 + 동영상)
      </>
    ),
  },
];

const autoContents = [
  { icon: "📖", name: "해설지" },
  { icon: "✏️", name: "모범답안" },
  { icon: "📑", name: "강의노트" },
  { icon: "🎬", name: "해설영상" },
  { icon: "💡", name: "개념영상" },
];

export default function OperationPage() {
  return (
    <>
      <PageHeader
        label="OPERATIONS"
        title="가맹 운영 방식"
        subtitle="콘텐츠 제공 · 수업 흐름 · 학생 관리"
      />

      <main>
        {/* 인트로 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pb-6">
          <div className="bg-white rounded-2xl border-t-4 border-brand-red shadow-sm p-6 lg:p-8">
            <h2 className="font-serif-kr font-bold text-lg lg:text-2xl">
              본사와 가맹점의 역할 분담
            </h2>
            <p className="text-sm lg:text-base leading-relaxed mt-3">
              본사는 콘텐츠 제작·강의·채점·분석 등 학사 운영의 핵심을 담당하고,
              가맹점은 학생 모집·현장 관리·학부모 응대 등 지역 운영에 집중합니다.
            </p>
          </div>
        </section>

        {/* 주간 운영 흐름 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-6">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">주간 운영 흐름</h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              요일별 프로세스
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border overflow-hidden">
            <div className="divide-y divide-brand-border">
              {weeklyFlow.map((item, i) => (
                <div key={i} className="p-5 lg:p-6 flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-serif-kr font-bold shrink-0${
                      item.highlight
                        ? " bg-brand-red text-white"
                        : " bg-brand-bg"
                    }${item.dayClass}`}
                  >
                    {item.day}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-sm lg:text-base">
                      {item.title}
                    </div>
                    <div className="text-xs lg:text-sm text-brand-gray mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 토요일 수업 시간표 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">
              토요일 수업 시간표
            </h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              정규 모의고사반
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="py-3 px-4 lg:px-6 text-left font-bold">
                    시간
                  </th>
                  <th className="py-3 px-4 lg:px-6 text-left font-bold">
                    내용
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="py-3 px-4 lg:px-6 text-brand-gray">
                    17:45 ~ 18:00
                  </td>
                  <td className="py-3 px-4 lg:px-6">
                    등원 & 준비 (패드 확인)
                  </td>
                </tr>
                <tr className="border-b border-brand-border bg-brand-bg">
                  <td className="py-3 px-4 lg:px-6 font-bold align-top">
                    18:00 ~ 19:15
                  </td>
                  <td className="py-3 px-4 lg:px-6">
                    <div className="font-bold">모의고사 75분</div>
                    <div className="text-xs lg:text-sm text-brand-gray mt-1 leading-relaxed">
                      수학 8문항 · 국어 8문항 출제
                      <br />
                      · 자연계: 수학 8 + 국어 5 풀이 (총 13문항)
                      <br />
                      · 인문계: 수학 5 + 국어 8 풀이 (총 13문항)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 lg:px-6 text-brand-gray align-top">
                    19:20 ~ 22:00
                  </td>
                  <td className="py-3 px-4 lg:px-6">
                    <div>수학 및 국어 해설강의</div>
                    <div className="text-xs lg:text-sm text-brand-gray mt-1">
                      시험시간에 풀이하지 않은 문제도 모두 수강 및 학습
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 역할 분담 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">역할 분담</h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              본사 vs 가맹점
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="bg-white rounded-2xl border border-brand-border p-5 lg:p-6">
              <div className="text-xs font-bold text-brand-red tracking-widest mb-3">
                본사 담당
              </div>
              <ul className="space-y-2 text-sm">
                {hqTasks.map((task) => (
                  <li key={task} className="flex items-start gap-2">
                    <span className="text-brand-red font-bold">·</span> {task}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-brand-border p-5 lg:p-6">
              <div className="text-xs font-bold text-brand-gray tracking-widest mb-3">
                가맹점 담당
              </div>
              <ul className="space-y-2 text-sm">
                {franchiseTasks.map((task) => (
                  <li key={task} className="flex items-start gap-2">
                    <span className="text-brand-gray font-bold">·</span> {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-brand-dark text-white rounded-xl text-center text-sm lg:text-base">
            ⚠️{" "}
            <strong>인원 유치와 마케팅은 가맹점의 책임입니다.</strong>{" "}
            본사는 학사 운영에 집중합니다.
          </div>
        </section>

        {/* 수업 종류 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">수업 종류</h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              3가지 트랙
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {classTypes.map((ct) => (
              <div
                key={ct.title}
                className="bg-white rounded-2xl border border-brand-border p-5 lg:p-6"
              >
                <div
                  className={`text-xs font-bold tracking-widest mb-2 ${ct.labelColor}`}
                >
                  {ct.label}
                </div>
                <div className="font-bold text-base">{ct.title}</div>
                <div className="text-xs lg:text-sm text-brand-gray mt-2 leading-relaxed">
                  {ct.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 스마트 케어 시스템 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">
              스마트 케어 시스템
            </h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              본사 자동 운영
            </span>
          </div>

          {/* 인트로 */}
          <div className="bg-white rounded-2xl border-t-4 border-brand-red shadow-sm p-6 lg:p-8 mb-3">
            <h3 className="font-serif-kr font-bold text-lg lg:text-xl">
              학원 운영은 가맹점, 학생 케어는 본사가 자동으로
            </h3>
            <p className="text-sm lg:text-base text-brand-gray mt-3 leading-relaxed">
              카카오톡 채널 한 곳에서 매일 작동하는 십일전략 시스템이 학생의 학습
              행동을 실시간으로 추적하고 확인할 수 있습니다.
            </p>
          </div>

          {/* QR 스포트라이트 */}
          <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8 mb-3">
            <div className="text-xs font-bold text-brand-red tracking-widest mb-2">
              QR ATTENDANCE · 출석 → 학습 자동 연결
            </div>
            <h3 className="font-serif-kr font-bold text-lg lg:text-xl leading-tight">
              QR 출석 한 번으로,
              <br />
              학생 개인 학습 콘텐츠가 자동으로 열립니다
            </h3>
            <p className="text-sm lg:text-base text-brand-gray mt-3 leading-relaxed">
              수업이 끝나는 동시에 십일전략 자체 웹에서 학생 개인별 학습 콘텐츠가
              자동으로 오픈되어,{" "}
              <strong className="text-brand-black">
                시간 제약 없이 무한 반복 학습
              </strong>
              이 가능합니다.
            </p>

            {/* 3단계 흐름 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-6">
              <div className="bg-brand-bg rounded-xl p-4">
                <div className="text-xs text-brand-red font-bold tracking-widest mb-2">
                  STEP 1
                </div>
                <div className="font-bold text-base">QR 출석 체크</div>
                <div className="text-xs lg:text-sm text-brand-gray mt-2 leading-relaxed">
                  시험지{" "}
                  <strong className="text-brand-black">
                    두 번째 페이지의 QR 코드
                  </strong>
                  로 출석 체크
                </div>
                <div className="text-xs text-brand-gray mt-3 pt-3 border-t border-brand-border space-y-1">
                  <div>→ 학생 휴대폰으로 직접 체크</div>
                  <div>→ 또는 학원에서 수기 체크</div>
                </div>
              </div>
              <div className="bg-brand-bg rounded-xl p-4">
                <div className="text-xs text-brand-red font-bold tracking-widest mb-2">
                  STEP 2
                </div>
                <div className="font-bold text-base">
                  학습 콘텐츠 자동 오픈
                </div>
                <div className="text-xs lg:text-sm text-brand-gray mt-2 leading-relaxed">
                  수업 종료와 동시에 학생 개인별로{" "}
                  <strong className="text-brand-black">
                    십일전략 자체 웹
                  </strong>
                  에서 자동 활성화
                </div>
              </div>
              <div className="bg-brand-bg rounded-xl p-4">
                <div className="text-xs text-brand-red font-bold tracking-widest mb-2">
                  STEP 3
                </div>
                <div className="font-bold text-base">무한 반복 학습</div>
                <div className="text-xs lg:text-sm text-brand-gray mt-2 leading-relaxed">
                  시간·횟수 제약 없이 학생이 원하는 만큼 반복 학습 가능
                </div>
              </div>
            </div>

            {/* 자동 오픈 콘텐츠 */}
            <div className="mt-5 pt-5 border-t border-brand-border">
              <div className="text-xs text-brand-red font-bold tracking-widest mb-3">
                자동 오픈되는 학습 콘텐츠
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 text-xs">
                {autoContents.map((c, i) => (
                  <div
                    key={c.name}
                    className={`bg-brand-bg rounded-lg p-3 text-center${
                      i === autoContents.length - 1
                        ? " col-span-2 lg:col-span-1"
                        : ""
                    }`}
                  >
                    {c.icon} {c.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3개 카드 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* 카드 1: 매일국어 */}
            <div className="bg-white rounded-2xl border border-brand-border p-5 lg:p-6">
              <div className="text-xs font-bold text-brand-red tracking-widest mb-2">
                DAILY · 매일 아침 8시
              </div>
              <div className="font-bold text-base lg:text-lg">
                월~금 매일국어 1컷
              </div>
              <p className="text-sm text-brand-gray mt-2 leading-relaxed">
                매일 아침 8시 카카오톡으로 도착하는 9단계 카드뉴스. 15분이면
                완주, 분산학습으로 장기기억 정착.
              </p>
              <div className="mt-4 pt-4 border-t border-brand-border">
                <div className="grid grid-cols-4 gap-1.5 text-xs">
                  {["정독", "재이해", "정리", "적용"].map((step) => (
                    <div
                      key={step}
                      className="bg-brand-bg rounded p-2 text-center"
                    >
                      <strong>{step}</strong>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-brand-gray mt-3 text-center">
                  월~금 · 5~10월 ={" "}
                  <strong className="text-brand-red">
                    핵심 지문 130편 정복
                  </strong>
                </div>
              </div>
            </div>

            {/* 카드 2: 학습 자료 */}
            <div className="bg-white rounded-2xl border border-brand-border p-5 lg:p-6">
              <div className="text-xs font-bold text-brand-red tracking-widest mb-2">
                PLATFORM · 자체 학습웹
              </div>
              <div className="font-bold text-base lg:text-lg">
                7가지 학습 자료
              </div>
              <p className="text-sm text-brand-gray mt-2 leading-relaxed">
                수업 직후 7가지 학습 자료가 카톡 채널 자체 플랫폼에 자동
                업로드되어 24시간 무제한 반복 학습이 가능합니다.
              </p>
              <div className="mt-4 pt-4 border-t border-brand-border">
                <ul className="text-xs space-y-1 text-brand-gray">
                  <li>· 시험지 + 해설지</li>
                  <li>· 워크북 + 워크북 해설지</li>
                  <li>· 강의노트</li>
                  <li>· 모범답안</li>
                  <li>· 해설영상 32개 (국어·수학)</li>
                </ul>
              </div>
            </div>

            {/* 카드 3: 학원 운영 도구 */}
            <div className="bg-white rounded-2xl border border-brand-border p-5 lg:p-6">
              <div className="text-xs font-bold text-brand-red tracking-widest mb-2">
                ACADEMY TOOL · 학원 운영 도구
              </div>
              <div className="font-bold text-base lg:text-lg">
                학생 학습 현황 데이터
              </div>
              <p className="text-sm text-brand-gray mt-2 leading-relaxed">
                가맹학원 전용{" "}
                <strong className="text-brand-black">관리자 페이지</strong>
                에서 학생들의 학습 현황과 출석을 실시간으로 확인할 수 있습니다.
                데이터 기반으로 학부모 상담과 학생 케어를 효과적으로 진행하세요.
              </p>

              {/* 관리자 페이지 강조 박스 */}
              <div className="mt-4 p-3 bg-brand-bg rounded-lg border border-brand-red/30">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🔐</span>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-brand-red">
                      전용 관리자 페이지 + 아이디 제공
                    </div>
                    <div className="text-[10px] text-brand-gray mt-0.5">
                      가맹점별 독립 계정으로 24시간 접속 가능
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-brand-border">
                <ul className="text-xs space-y-1 text-brand-gray">
                  <li>· QR 출석 체크 기록</li>
                  <li>· 매주 모의고사 성적표</li>
                  <li>· 매일 학습 완료 / 미완료 현황</li>
                  <li>· 학습 진도 추적</li>
                  <li className="pt-1.5 mt-1.5 border-t border-brand-border">
                    <strong className="text-brand-red">
                      학원의 데이터 기반 학부모 케어 도구
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 하단 강조 */}
          <div className="mt-4 p-4 bg-brand-dark text-white rounded-xl text-center text-sm lg:text-base">
            💡{" "}
            <strong>가맹점의 장점:</strong> 본사가 학생
            케어/소통/관리까지 자동 처리하므로, 가맹점은 학생 모집과 현장
            운영에만 집중할 수 있습니다.
          </div>
        </section>

        {/* 하단 여백 */}
        <div className="pb-12" />
      </main>
    </>
  );
}
