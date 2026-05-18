import { SectionLayout } from "@/components/layout/SectionLayout";

import { FeatureCard } from "./FeatureCard";

const FEATURE_TITLES = [
  "矩陣項目一（佔位）",
  "矩陣項目二（佔位）",
  "矩陣項目三（佔位）",
  "矩陣項目四（佔位）",
];

export function HomeFeatureMatrix() {
  return (
    <section
      id="feature-matrix"
      aria-labelledby="feature-matrix-heading"
      className="w-full bg-navy-600 text-white"
    >
      <SectionLayout>
          <h2
            id="feature-matrix-heading"
            className="typo-h2 text-shadow-on-blue text-white"
          >
            多種匯款矩陣
          </h2>
          <p className="typo-body2 mt-3 max-w-2xl text-sky-100">
            區塊副標說明（佔位）。
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 tablet:grid-cols-4">
            {FEATURE_TITLES.map((title, i) => (
              <FeatureCard key={title} title={title} index={i} />
            ))}
          </div>
      </SectionLayout>
    </section>
  );
}
