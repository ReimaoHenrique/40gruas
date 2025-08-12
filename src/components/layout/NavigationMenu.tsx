import Link from "next/link";

interface NavigationItem {
  href: string;
  label: string;
}

interface NavigationMenuProps {
  items: NavigationItem[];
  className?: string;
  mobile?: boolean;
}

export function NavigationMenu({ items, className = "", mobile = false }: NavigationMenuProps) {
  const baseClasses = mobile 
    ? "flex flex-col space-y-4 pt-4"
    : "flex space-x-8";

  return (
    <nav className={`${baseClasses} ${className}`}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-700 hover:text-primary transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
