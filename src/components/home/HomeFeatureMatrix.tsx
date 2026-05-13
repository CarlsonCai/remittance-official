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
      className="home-section-scaffold bg-navy-600 text-white"
    >
      <span className="home-section__dev-label" aria-hidden="true">
        FeatureMatrix
      </span>
      <div className="layout-shell py-16 min-[1024px]:py-20">
        <div className="layout-container">
          <h2 id="feature-matrix-heading" className="typo-h2 text-white">
            多種匯款矩陣
          </h2>
          <p className="typo-body2 mt-3 max-w-2xl text-sky-100">
            區塊副標說明（佔位）。
          </p>
          <div className="mt-10 grid gap-6 min-[1024px]:grid-cols-4 sm:grid-cols-2">
            {FEATURE_TITLES.map((title, i) => (
              <FeatureCard key={title} title={title} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
