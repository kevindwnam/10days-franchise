import Link from "next/link";

interface MenuCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  layout?: "horizontal" | "vertical";
}

export default function MenuCard({
  icon,
  title,
  description,
  href,
  layout = "horizontal",
}: MenuCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-2xl border border-brand-border p-5 lg:p-6 hover:-translate-y-0.5 hover:shadow-md transition cursor-pointer"
    >
      <div
        className={`flex items-center gap-4 ${
          layout === "vertical"
            ? "lg:flex-col lg:items-start lg:gap-3"
            : ""
        }`}
      >
        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-brand-bg flex items-center justify-center text-3xl shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <div className="font-bold text-base lg:text-lg">{title}</div>
          <div className="text-xs lg:text-sm text-brand-gray mt-1 leading-snug">
            {description}
          </div>
        </div>
        <div
          className={`text-brand-gray ${
            layout === "vertical" ? "lg:hidden" : ""
          }`}
        >
          ›
        </div>
      </div>
    </Link>
  );
}
