# 🙏 Assembleia de Deus Paulistana - Landing Page

Landing page moderna, responsiva e elegante para a Assembleia de Deus Paulistana, abrangendo todas as unidades do estado de São Paulo.

## 🎨 Identidade Visual

### Paleta de Cores
- **Laranja Vibrante**: `#FF6B00`
- **Laranja Suave**: `#FF8C42`
- **Cinza Escuro**: `#1A1A1A`
- **Cinza Médio**: `#2E2E2E`
- **Preto Suave**: `#0F0F0F`
- **Branco**: `#FFFFFF`
- **Cinza Claro**: `#B8B8B8`

### Tipografia
- **Títulos**: Poppins Bold
- **Texto**: Inter Regular

## 🚀 Tecnologias

- **React** 19.2.6
- **Framer Motion** 12.40.0 (Animações)
- **React Router DOM** 7.15.1 (Navegação)
- **Vite** 8.0.12 (Build Tool)
- **CSS3** (Estilização)

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Navbar.jsx              # Navbar transparente com scroll
│   ├── Navbar.css
│   ├── HeroSection.jsx         # Seção hero com parallax
│   ├── HeroSection.css
│   ├── StatisticsCards.jsx     # Cards com contagem animada
│   ├── StatisticsCards.css
│   ├── ChurchSearch.jsx        # Busca de igrejas
│   ├── ChurchSearch.css
│   ├── ChurchCard.jsx          # Card individual de igreja
│   ├── ChurchCard.css
│   ├── WorshipSection.jsx      # Seção de cultos
│   ├── WorshipSection.css
│   ├── WorshipCard.jsx         # Card individual de culto
│   ├── WorshipCard.css
│   ├── PrayerForm.jsx          # Formulário de oração
│   ├── PrayerForm.css
│   ├── TestimonialCarousel.jsx # Carrossel de testemunhos
│   ├── TestimonialCarousel.css
│   ├── Footer.jsx              # Rodapé completo
│   └── Footer.css
├── pages/
│   ├── Home.jsx                # Página principal
│   ├── Churches.jsx            # Página de igrejas
│   ├── Churches.css
│   ├── NotFound.jsx            # Página 404
│   └── NotFound.css
├── assets/
│   └── hero.png                # Imagem hero
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## ✨ Funcionalidades

### 🏠 Home Page
- **Hero Section**: Imagem com degradê, navbar transparente, parallax
- **Estatísticas**: Contadores animados (igrejas, membros, cultos, orações)
- **Busca de Igrejas**: Filtros por nome, cidade e bairro
- **Cultos**: Cards com informações de horários e eventos
- **Pedidos de Oração**: Formulário interativo
- **Testemunhos**: Carrossel automático
- **Footer**: Links, contato e redes sociais

### 🏛️ Página de Igrejas
- Lista completa de igrejas
- Filtros por região (Centro, Zona Leste, Sul, Norte, Oeste, ABC)
- Cards responsivos com hover effects

### ❌ Página 404
- Design elegante
- Botão para retornar à home

## 🎭 Animações

Todas as animações foram implementadas com **Framer Motion**:

- ✅ Fade In
- ✅ Slide Up
- ✅ Scale
- ✅ Hover Effects
- ✅ Scroll Reveal
- ✅ Parallax
- ✅ Smooth Transitions
- ✅ Contadores Animados
- ✅ Carrossel Automático

## 📱 Responsividade

Totalmente responsivo para:
- 📱 Mobile: 320px+
- 📱 Tablet: 768px
- 💻 Notebook: 1440px
- 🖥️ Desktop: 1920px+

### Mobile Features
- Menu hamburguer
- Cards reorganizados
- Fontes ajustadas
- Animações otimizadas

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🎯 Próximas Implementações

- [ ] Página de Cultos completa
- [ ] Página de Orações com histórico
- [ ] Página Sobre Nós
- [ ] Página de Contato
- [ ] Sistema de autenticação
- [ ] Integração com API backend
- [ ] Mapa interativo das igrejas
- [ ] Sistema de transmissão ao vivo
- [ ] Blog/Notícias

## 🎨 Design System

### Bordas
- Rounded: 16px - 30px

### Sombras
- Suaves: `0 4px 20px rgba(0, 0, 0, 0.3)`
- Hover: `0 12px 40px rgba(255, 107, 0, 0.4)`

### Espaçamento
- Seções: 6rem (desktop) / 4rem (mobile)
- Cards: 2rem gap
- Elementos: 1.5rem - 3rem

## 📄 Licença

© 2024 Assembleia de Deus Paulistana. Todos os direitos reservados.

## 👨‍💻 Desenvolvimento

Desenvolvido com ❤️ e ☕ para a Assembleia de Deus Paulistana.
