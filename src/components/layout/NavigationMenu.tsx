"use client";

import Link from "next/link";

interface NavigationItem {
  href: string;
  label: string;
  isSection?: boolean;
}

interface NavigationMenuProps {
  items: NavigationItem[];
  className?: string;
  mobile?: boolean;
  onNavigation?: (item: NavigationItem) => void;
}

export function NavigationMenu({ items, className = "", mobile = false, onNavigation }: NavigationMenuProps) {
  const baseClasses = mobile 
    ? "flex flex-col space-y-4 pt-4"
    : "flex space-x-8";

  const handleClick = (item: NavigationItem) => {
    if (onNavigation) {
      onNavigation(item);
    }
  };

  return (
    <nav className={`${baseClasses} ${className}`}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => handleClick(item)}
          className="text-gray-700 hover:text-primary transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
