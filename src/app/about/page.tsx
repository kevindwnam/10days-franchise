import PageHeader from "@/components/PageHeader";

const services = [
  {
    num: 1,
    title: "온라인 정규 강의 제공",
    desc: "본사 강사진의 실시간 라이브 강의를 학생 개인의 패드를 통해 학습",
  },
  {
    num: 2,
    title: "매일국어 1컷",
    desc: (
      <>
        매일 아침 <strong>8시 카카오톡</strong>으로 도착하는 9단계 카드뉴스.
        매일 15분, 월~금 5~10월 = <strong>핵심 지문 130편 정복</strong>
      </>
    ),
  },
  {
    num: 3,
    title: "답안 채점 · 분석표 제공",
    desc: (
      <>
        매주 모의고사 답안 채점 후{" "}
        <strong>금요일 저녁 7시 카카오톡 채널</strong>로 정밀 분석표 자동 발송
      </>
    ),
  },
  {
    num: 4,
    title: "질의응답 관리",
    desc: (
      <>
        ClassIn 질문방 운영 + 매주{" "}
        <strong>수요일 밤 10시 30분 질의응답 클래스</strong> 운영
      </>
    ),
  },
  {
    num: 5,
    title: "공동 마케팅",
    desc: "본사 인스타 · 블로그 홍보 진행 · 당해년도 입결 결과 공유 · 학원 자체 마케팅 진행",
    fullWidth: true,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="ABOUT FRANCHISE"
        title="가맹 소개"
        subtitle="GR831약술형논술연구소의 공식 가맹 사업"
      />

      <main>
        {/* 인트로 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pb-6">
          <div className="bg-white rounded-2xl border-t-4 border-brand-red shadow-sm p-6 lg:p-8">
            <h2 className="font-serif-kr font-bold text-lg lg:text-2xl">
              십일전략은 GR831의 온라인 강의 브랜드입니다
            </h2>
            <p className="text-sm lg:text-base leading-relaxed mt-3">
              십일전략은 가천대학교 약술형논술 자문위원 출신 연구원들로 구성된{" "}
              <strong>GR831약술형논술연구소</strong>가 제작한 콘텐츠를 사용하여
              운영하는 참여형 온라인 수업 브랜드입니다.{" "}
              <strong>약술형논술 강사진 운영과 컨텐츠 생산이 어려운 학원</strong>
              에 검증된 실시간 라이브 강의와 시스템을 제공합니다.
            </p>
          </div>
        </section>

        {/* 3개년 합격 실적 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-6">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">
              3개년 누적 합격 실적
            </h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              가천대학교
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-10">
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
              <div className="text-center">
                <div className="text-xs text-brand-gray mb-2">2024학년도</div>
                <div className="font-serif-kr font-black text-3xl lg:text-5xl">
                  98
                  <span className="text-base font-normal text-brand-gray">
                    명
                  </span>
                </div>
              </div>
              <div className="text-center border-x border-brand-border">
                <div className="text-xs text-brand-gray mb-2">2025학년도</div>
                <div className="font-serif-kr font-black text-3xl lg:text-5xl">
                  120
                  <span className="text-base font-normal text-brand-gray">
                    명
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs font-bold text-brand-red mb-2">
                  2026학년도
                </div>
                <div className="font-serif-kr font-black text-3xl lg:text-5xl text-brand-red">
                  135
                  <span className="text-base font-normal">명</span>
                </div>
              </div>
            </div>
            <p className="text-center text-xs lg:text-sm text-brand-gray mt-6 leading-relaxed">
              가천대학교 약술형논술 전형 합격생{" "}
              <strong>전국 최다 배출</strong>
              <br />
              매년 합격생 수가 증가하는 검증된 콘텐츠 · 강사진 · 시스템
            </p>
          </div>
        </section>

        {/* 본사 제공 서비스 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">
              본사 제공 서비스
            </h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              계약서 제3조 기준
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
            {services.map((s) => (
              <div
                key={s.num}
                className={`bg-white rounded-2xl border border-brand-border p-5 lg:p-6${
                  s.fullWidth ? " lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-red text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {s.num}
                  </span>
                  <div>
                    <div className="font-bold text-base">{s.title}</div>
                    <div className="text-sm text-brand-gray mt-1 leading-relaxed">
                      {s.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 강사진 신뢰도 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
          <div className="bg-brand-dark text-white rounded-2xl p-8 lg:p-12 text-center">
            <div className="text-xs font-bold text-brand-red tracking-widest mb-3">
              CREDENTIALS
            </div>
            <h3 className="font-serif-kr font-black text-2xl lg:text-3xl">
              가천대학교 약술형논술 자문위원 출신
            </h3>
            <p className="text-sm lg:text-base text-gray-300 mt-4 leading-relaxed">
              GR831약술형논술연구소는 6년 동안 약술형논술 전형 하나에만 집중해온
              전문 기관입니다.
              <br className="hidden lg:block" />
              출제 의도를 가장 잘 아는 팀이 직접 콘텐츠를 제작하고 강의합니다.
            </p>
          </div>
        </section>

        {/* 하단 CTA */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10 pb-12">
          <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8 text-center">
            <h3 className="font-bold text-base lg:text-lg">
              가맹 상담을 시작하세요
            </h3>
            <p className="text-sm text-brand-gray mt-2">
              카카오톡 채널로 사업 안내와 미팅 일정을 잡아드립니다
            </p>
            <a
              href="http://pf.kakao.com/_kpsxfn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-brand-red text-white rounded-full py-3 px-8 font-bold hover:opacity-90 transition"
            >
              카카오톡 상담하기 →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
