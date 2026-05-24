import Header from "@/components/Header";
import MenuCard from "@/components/MenuCard";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero 카드 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto px-5 pb-6">
          <div className="bg-white rounded-2xl border-t-4 border-brand-red shadow-sm overflow-hidden">
            <div className="p-6 md:p-10 lg:p-12">
              <div className="lg:grid lg:grid-cols-5 lg:gap-12 lg:items-center">
                {/* 좌측 텍스트 */}
                <div className="lg:col-span-3">
                  <div className="text-xs font-bold text-brand-red tracking-widest mb-3">
                    FOR ACADEMY OWNERS
                  </div>
                  <h1 className="font-serif-kr font-black text-2xl md:text-3xl lg:text-4xl leading-tight">
                    검증된 콘텐츠 · 시스템 · 노하우
                    <br />
                    <span className="text-brand-red">
                      가맹점에 그대로 제공합니다
                    </span>
                  </h1>
                  <p className="text-sm md:text-base text-brand-gray mt-4 leading-relaxed">
                    2026학년도 가천대학교 135명 합격을 만든
                    GR831약술형논술연구소의 온라인 학습 브랜드 &ldquo;십일전략&rdquo;
                    공식 가맹 사업. 전국 최다 합격률을 만든 콘텐츠와 시스템을
                    가맹점이 그대로 사용합니다.
                  </p>

                  {/* 핵심 가치 4줄 */}
                  <div className="mt-6 space-y-2.5">
                    {[
                      "약술형논술 강사진 운영과 컨텐츠 생산이 어려운 학원에 검증된 실시간 라이브 강의를 그대로",
                      "지역권 보호정책 유무 선택",
                      "약술형논술 전문 온라인 강사진 실시간 라이브 수업",
                      "합격 숫자로 증명된 GR831약술형논술연구소 콘텐츠 사용",
                    ].map((text) => (
                      <div key={text} className="flex items-start gap-3">
                        <span className="text-brand-red font-bold">✓</span>
                        <span className="text-sm md:text-base">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 우측 합격 실적 */}
                <div className="lg:col-span-2 mt-8 lg:mt-0">
                  <div className="bg-brand-bg rounded-xl p-5 lg:p-6">
                    <div className="text-xs text-brand-gray tracking-widest text-center mb-4">
                      가천대학교 합격생 추이
                    </div>
                    <div className="grid grid-cols-3 gap-2 lg:grid-cols-1 lg:gap-3">
                      <div className="text-center lg:text-left lg:flex lg:items-baseline lg:justify-between lg:pb-3 lg:border-b lg:border-brand-border">
                        <div className="text-xs text-brand-gray">
                          2024학년도
                        </div>
                        <div className="font-serif-kr font-black text-2xl lg:text-3xl">
                          98
                          <span className="text-sm font-normal text-brand-gray">
                            명
                          </span>
                        </div>
                      </div>
                      <div className="text-center lg:text-left lg:flex lg:items-baseline lg:justify-between lg:pb-3 lg:border-b lg:border-brand-border">
                        <div className="text-xs text-brand-gray">
                          2025학년도
                        </div>
                        <div className="font-serif-kr font-black text-2xl lg:text-3xl">
                          120
                          <span className="text-sm font-normal text-brand-gray">
                            명
                          </span>
                        </div>
                      </div>
                      <div className="text-center lg:text-left lg:flex lg:items-baseline lg:justify-between">
                        <div className="text-xs font-bold text-brand-red">
                          2026학년도
                        </div>
                        <div className="font-serif-kr font-black text-3xl lg:text-5xl text-brand-red">
                          135
                          <span className="text-base font-normal">명</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-[10px] md:text-xs text-brand-gray text-center mt-4">
                      GR831약술형논술연구소 · 전국 최다 합격률
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 섹션 1: 십일전략 가맹이란? */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto px-5 pt-6">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">
              십일전략 가맹이란?
            </h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              사업 개요
            </span>
          </div>

          <div className="space-y-3 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-4">
            <MenuCard
              icon="🏆"
              title="가맹 소개"
              description="3개년 합격 실적 · 브랜드 가치 · 제공 서비스"
              href="/about"
              layout="vertical"
            />
            <MenuCard
              icon="💡"
              title="참여형 라이브 수업 시스템"
              description="인강 ≠ 십일전략 · ClassIn 활용 라이브 수업"
              href="/system"
              layout="vertical"
            />
            <MenuCard
              icon="⚙️"
              title="가맹 운영 방식"
              description="콘텐츠 제공 · 수업 흐름 · 학생 관리 시스템"
              href="/operation"
              layout="vertical"
            />
          </div>
        </section>

        {/* 섹션 2: 가맹 상세 정보 */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto px-5 pt-10">
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-brand-red rounded mr-3" />
            <h2 className="font-bold text-base md:text-lg">가맹 상세 정보</h2>
            <div className="flex-1 mx-3 border-t border-brand-border" />
            <span className="text-xs md:text-sm text-brand-gray">
              수익 · 형태 · 절차 · 계약
            </span>
          </div>

          <div className="space-y-3 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
            <MenuCard
              icon="💰"
              title="수익 구조"
              description="수강료 · 정산 · 손익분기점 · 시뮬레이션"
              href="/revenue"
            />
            <MenuCard
              icon="🗺️"
              title="가맹 형태"
              description="지역권 4종 · 가맹비 · 보호 반경"
              href="/franchise-type"
            />
            <MenuCard
              icon="📋"
              title="가맹 진행 절차"
              description="문의부터 개점까지 7단계"
              href="/process"
            />
            <MenuCard
              icon="📜"
              title="계약 조건"
              description="계약 기간 · 환불 규정 · 위약 조항"
              href="/contract"
            />
          </div>
        </section>

        {/* 하단 CTA */}
        <section className="max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto px-5 pt-10 pb-12">
          <div className="bg-brand-dark text-white rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="font-serif-kr font-black text-2xl lg:text-3xl">
              가맹 상담을 시작하세요
            </h3>
            <p className="text-sm lg:text-base text-gray-300 mt-3 leading-relaxed">
              카카오톡 채널로 문의주시면 상세한 사업 안내와 미팅 일정을
              잡아드립니다.
              <br className="hidden lg:block" />
              모든 가맹 형태에 대한 자료와 계약서를 제공해드립니다.
            </p>
            <a
              href="http://pf.kakao.com/_kpsxfn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-brand-red text-white rounded-full py-3 px-8 font-bold hover:opacity-90 transition"
            >
              카카오톡 상담하기 →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
