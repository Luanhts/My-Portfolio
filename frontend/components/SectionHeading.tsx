type SectionHeadingProps = {
  number: string;
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  number,
  label,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${centered ? "items-center text-center" : "items-start"}`}
    >
      <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
        <span className="h-px w-8 bg-zinc-700" aria-hidden="true" />
        <span>
          {number} / {label}
        </span>
      </div>
      <div className={`flex flex-col gap-3 ${centered ? "max-w-2xl" : "max-w-3xl"}`}>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
