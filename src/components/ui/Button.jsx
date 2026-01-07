export default function Button(props) {
  const { children, primary, outline, ...rest } = props;

  const base =
    "px-6 py-3 rounded-lg text-sm font-medium transition";

  const styles = primary
    ? "bg-orange-500 hover:bg-orange-400 text-white"
    : outline
    ? "border border-neutral-700 hover:border-[var(--accent)] text-white"
    : "bg-neutral-800 hover:bg-neutral-700 text-white";

  return (
    <button className={`${base} ${styles}`} {...rest}>
      {children}
    </button>
  );
}
