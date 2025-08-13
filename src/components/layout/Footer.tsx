"use client";

import { usePathname } from "next/navigation";
import { NavigationMenu } from "./NavigationMenu";
import Image from "next/image";

interface NavigationItem {
  href: string;
  label: string;
}

export function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navigationItems: NavigationItem[] = [
    { href: "/models", label: "MODELOS" },
    { href: "/workshops", label: "WORKSHOPS" },
    { href: isHomePage ? "#about" : "/", label: "SOBRE NÓS" },
    { href: "/contact", label: "CONTATO" },
  ];

  const handleNavigation = (item: NavigationItem) => {
    if (item.href.startsWith("#")) {
      const sectionId = item.href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-serif font-bold mb-4">40GRAUSBAHIA</div>
          <p className="text-gray-400 mb-6">Muito mais que apenas modelagem</p>

          <NavigationMenu
            items={navigationItems}
            className="flex flex-wrap justify-center gap-6 mb-6"
            onNavigation={handleNavigation}
          />

          {/* Logo e créditos da Datasynk */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/datasynk.svg"
                  alt="Datasynk - Desenvolvimento Web"
                  width={24}
                  height={24}
                  className="opacity-70"
                />
                <span className="text-sm text-gray-500">
                  Desenvolvido por{" "}
                  <span className="text-blue-400 font-medium">Datasynk</span>
                </span>
              </div>
              <div className="text-gray-500 text-sm">
                © 2024 40grausbahia. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
