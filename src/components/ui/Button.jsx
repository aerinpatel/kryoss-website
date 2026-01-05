export default function Button({ children, primary, outline, className }) {
  return (
    <button
      className={`
        rounded-lg font-semibold transition-all duration-300
        ${primary && "bg-orange-500 text-black hover:bg-orange-600"}
        ${outline && "border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black"}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
