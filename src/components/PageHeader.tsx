import Link from "next/link";

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle: string;
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <header className="py-6 md:py-10">
      <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5">
        <Link
          href="/"
          className="text-sm text-brand-gray hover:text-brand-black inline-block mb-3"
        >
          ← 홈
        </Link>
        <div className="text-center">
          <div className="text-xs font-bold text-brand-red tracking-widest mb-2">
            {label}
          </div>
          <h1 className="font-serif-kr font-black text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h1>
          <p className="text-sm md:text-base text-brand-gray mt-2">
            {subtitle}
          </p>
        </div>
      </div>
    </header>
  );
}
