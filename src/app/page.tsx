import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto px-5 pb-12 text-center text-brand-gray">
          홈 페이지 콘텐츠는 3단계에서 구현됩니다.
        </div>
      </main>
    </>
  );
}
