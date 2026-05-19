import { cn } from "@/lib/utils";

type RemittanceOptionCardProps = {
  title: string;
  index: number;
};

export function RemittanceOptionCard({
  title,
  index,
}: RemittanceOptionCardProps) {
  return (
    <article
      aria-labelledby={`remittance-option-${index}-title`}
      className={cn(
        "flex flex-col rounded-(--radius-card) p-6 shadow-s desktop:shadow-l tablet:p-8",
        "bg-background text-navy-900",
      )}
    >
      <div
        className={cn(
          "flex aspect-[4/3] items-center justify-center rounded-(--radius-chip) bg-sky-100",
          "typo-body5 text-navy-600",
        )}
      >
        圖示／插圖（佔位）
      </div>
      <h3
        id={`remittance-option-${index}-title`}
        className="typo-h4 text-navy-900 mt-6"
      >
        {title}
      </h3>
      <p className="typo-body4 mt-2 flex-1 text-gray-600">
        卡片說明文案（佔位）。
      </p>
      <p className="typo-body4-m mt-4 text-sky-600">查看方案（佔位連結）</p>
    </article>
  );
}
