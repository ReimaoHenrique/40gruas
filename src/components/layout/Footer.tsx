import { NavigationMenu } from "./NavigationMenu";

export function Footer() {
  const navigationItems = [
    { href: "/models", label: "MODELOS" },
    { href: "/workshops", label: "WORKSHOPS" },
    { href: "/about", label: "SOBRE NÓS" },
    { href: "/contact", label: "CONTATO" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-serif font-bold mb-4">40GRAUSBAHIA</div>
          <p className="text-gray-400 mb-6">Muito mais que apenas modelagem</p>

          <NavigationMenu
            items={navigationItems}
            className="flex flex-wrap justify-center gap-6 mb-6"
          />

          <div className="text-gray-500 text-sm">
            © 2024 40grausbahia. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
