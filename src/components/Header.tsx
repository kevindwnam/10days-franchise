export default function Header() {
  return (
    <header className="py-6 md:py-10">
      <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 text-center">
        <div className="font-serif-kr text-3xl md:text-5xl tracking-tight">
          <span className="text-brand-red font-black">十日</span>
          <span className="font-bold">전략</span>
        </div>
        <div className="text-xs md:text-sm text-brand-gray mt-2 tracking-wider">
          GR831 약술형논술 연구소 가맹 모집 안내
        </div>
      </div>
    </header>
  );
}
