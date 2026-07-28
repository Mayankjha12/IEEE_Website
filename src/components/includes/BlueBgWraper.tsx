export function BlueBgWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`w-full py-16 md:py-24 bg-black text-white ${className}`}
    >
      <div className="mx-auto">{children}</div>
    </section>
  );
}
