# 40grausbahia - Agência de Modelos

Site profissional para agência de modelos da Bahia com design moderno e responsivo.

## 🚀 Estrutura do Projeto

### Páginas

- **/** - Página inicial com Hero, Galeria de Destaques e CTA
- **/about** - Sobre a agência com história, missão e valores
- **/models** - Galeria de modelos masculinos e femininos
- **/models/male/henrique** - Página individual do modelo Henrique
- **/models/male/pedro** - Página individual do modelo Pedro
- **/models/male/carlos** - Página individual do modelo Carlos
- **/models/male/rafael** - Página individual do modelo Rafael
- **/models/female/ana** - Página individual da modelo Ana
- **/models/female/maria** - Página individual da modelo Maria
- **/models/female/julia** - Página individual da modelo Júlia
- **/models/female/sofia** - Página individual da modelo Sofia
- **/workshops** - Workshops profissionais de modelagem
- **/contact** - Formulário de contato com mapa e informações

### Componentes

#### Layout (`src/components/layout/`)

- `Header.tsx` - Cabeçalho com navegação responsiva
- `Footer.tsx` - Rodapé com links e informações
- `NavigationMenu.tsx` - Menu de navegação reutilizável

#### UI (`src/components/ui/`)

- `Button.tsx` - Botão reutilizável com variantes

#### Sections (`src/components/sections/`)

- `Hero.tsx` - Seção hero com call-to-action
- `ModelsGrid.tsx` - Grid de modelos com cards
- `About.tsx` - Seção sobre a agência
- `Services.tsx` - Seção de serviços oferecidos
- `Workshops.tsx` - Seção de workshops profissionais
- `TestimonialsMarquee.tsx` - Depoimentos em carrossel marquee
- `PartnersMarquee.tsx` - Marcas parceiras em carrossel marquee
- `Contact.tsx` - Seção de contato
- `ContactForm.tsx` - Formulário de contato
- `ThankYouModal.tsx` - Modal de agradecimento

## 🛠️ Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **React Hooks** - Gerenciamento de estado

## 📁 Estrutura de Arquivos

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── models/
│   │   ├── page.tsx
│   │   ├── male/
│   │   │   ├── henrique/
│   │   │   │   └── page.tsx
│   │   │   ├── pedro/
│   │   │   │   └── page.tsx
│   │   │   ├── carlos/
│   │   │   │   └── page.tsx
│   │   │   └── rafael/
│   │   │       └── page.tsx
│   │   └── female/
│   │       ├── ana/
│   │       │   └── page.tsx
│   │       ├── maria/
│   │       │   └── page.tsx
│   │       ├── julia/
│   │       │   └── page.tsx
│   │       └── sofia/
│   │           └── page.tsx
│   ├── workshops/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── NavigationMenu.tsx
│   ├── ui/
│   │   └── Button.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ModelsGrid.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Workshops.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── ContactForm.tsx
│   │   └── ThankYouModal.tsx
│   └── index.ts
```

## 🎨 Design System

### Cores

- **Primary**: `#d4af37` (Dourado)
- **Secondary**: `#2c2c2c` (Cinza escuro)
- **Accent**: `#f8f8f8` (Cinza claro)

### Tipografia

- **Serif**: Playfair Display (títulos)
- **Sans**: Inter (corpo do texto)

## 🚀 Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse [http://localhost:3000](http://localhost:3000)

## 📱 Responsividade

O site é totalmente responsivo e funciona em:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (até 767px)

## 🔧 Funcionalidades

- ✅ Navegação responsiva
- ✅ Formulário de contato funcional
- ✅ Modal de agradecimento
- ✅ Páginas individuais de modelos
- ✅ Design moderno e profissional
- ✅ SEO otimizado
- ✅ Performance otimizada
