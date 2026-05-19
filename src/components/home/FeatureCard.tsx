type FeatureCardProps = {
  title: string;
  index: number;
};

export function FeatureCard({ title, index }: FeatureCardProps) {
  return (
    <article
      aria-labelledby={`feature-card-${index}-title`}
      className="bg-background text-navy-900 shadow-s desktop:shadow-l tablet:p-8 flex flex-col rounded-xl p-6"
    >
      <div className="text-navy-600 typo-body5 flex aspect-[4/3] items-center justify-center rounded-lg bg-sky-100">
        圖示／插圖（佔位）
      </div>
      <h3
        id={`feature-card-${index}-title`}
        className="typo-h4 text-navy-900 mt-6"
      >
        {title}
      </h3>
      <p className="typo-body4 mt-2 flex-1 text-gray-600">
        卡片說明文案（佔位）。
      </p>
      <p className="typo-body4-m mt-4 text-sky-600">了解更多（佔位連結）</p>
    </article>
  );
}
