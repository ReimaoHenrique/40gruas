import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "glass";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseClasses = "px-8 py-4 rounded-full font-semibold transition-colors";

  const variantClasses = {
    primary: "bg-yellow-500 text-gray-900 hover:bg-yellow-500 font-bold",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    glass:
      "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 hover:border-white/50 font-bold shadow-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
}
