export function BlueBgWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`w-full py-16 md:py-24 bg-gradient-to-br from-[#002147] via-[#003865] to-[#006ba6] text-white ${className}`}
    >
      <div className="mx-auto">{children}</div>
    </section>
  );
}
