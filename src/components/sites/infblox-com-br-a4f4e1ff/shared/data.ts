import type { ProductSection, Category, Testimonial } from "./types";

export const productSections: ProductSection[] = [
  {
    title: "NOVA ATUALIZAÇÃO",
    items: [
      {
        name: "[🎁] 1x CHROMATIC BOX [ 199 ROBUX ]",
        discount: "-67%",
        compareAt: "De R$ 30,00",
        price: "R$ 9,90",
        emoji: "🎁",
      },
      {
        name: "[🎁] 3x CHROMATIC BOX  [575 ROBUX]",
        discount: "-59%",
        compareAt: "De R$ 70,00",
        price: "R$ 28,90",
        emoji: "🎁",
      },
      {
        name: "[🎁] 10x CHROMATIC BOX  [1699 ROBUX]",
        discount: "-55%",
        compareAt: "De R$ 190,00",
        price: "R$ 84,90",
        emoji: "🎁",
      },
      {
        name: "[🎁] 50x CHROMATIC BOX  [8495 ROBUX]",
        discount: "-47%",
        compareAt: "De R$ 800,00",
        price: "R$ 424,90",
        emoji: "🎁",
      },
      {
        name: "[🐲🧲] Magnetic, Dragon ou Dough",
        discount: "-87%",
        compareAt: "De R$ 150,00",
        price: "R$ 18,90",
        emoji: "🐲🧲",
      },
      {
        name: "CAIXA ROBUX ( SORTE 🍀) - CHANCES DE 1000 a 50.000 Robux!",
        discount: "-33%",
        compareAt: "De R$ 15,00",
        price: "R$ 9,99",
        emoji: "🍀",
      },
      {
        name: "[💎🧲] Magnetic ou Kitsune | 100% GARANTIDO",
        discount: "-88%",
        compareAt: "De R$ 330,00",
        price: "R$ 39,90",
        emoji: "💎🧲",
      },
      {
        name: "[🧲🔥] Magnetic Permanente",
        discount: "-37%",
        compareAt: "De R$ 250,00",
        price: "R$ 157,50",
        emoji: "🧲🔥",
      },
    ],
  },
  {
    title: "Blox Fruits",
    items: [
      {
        name: "Chance Mítica no Báu + Level 1000+",
        discount: "-86%",
        compareAt: "De R$ 29,00",
        price: "R$ 3,99",
      },
      {
        name: "[🔥] Chance Mítica no Báu  [⭐ POPULAR]",
        discount: "-98%",
        compareAt: "De R$ 330,00",
        price: "R$ 4,99",
        emoji: "🔥",
      },
      {
        name: "Contas Aleatória Raras",
        discount: "-84%",
        compareAt: "De R$ 38,00",
        price: "R$ 5,99",
      },
      {
        name: "Level Máximo + God Human",
        discount: "-17%",
        compareAt: "De R$ 6,00",
        price: "R$ 5,00",
      },
      {
        name: "1 Mítica no Báu + Level Aleatório  + God Human",
        discount: "-20%",
        compareAt: "De R$ 10,00",
        price: "R$ 7,99",
      },
      {
        name: "2 a 4 Míticas no Báu + Level Máximo + God Human",
        discount: "-31%",
        compareAt: "De R$ 23,00",
        price: "R$ 15,90",
      },
      {
        name: "Dragon ou Kitsune | 100% Garantido",
        discount: "-56%",
        compareAt: "De R$ 32,00",
        price: "R$ 49,90",
      },
      {
        name: "Conta com 2 Dragon ou T-rex",
        discount: "-79%",
        compareAt: "De R$ 330,00",
        price: "R$ 69,90",
      },
      {
        name: "Cesta Com Mítica Garantida",
        discount: "-89%",
        compareAt: "De R$ 179,90",
        price: "R$ 19,90",
      },
    ],
  },
  {
    title: "PROMOÇÃO DO DIA",
    items: [
      {
        name: "CAIXA ROBUX ( SORTE 🍀) - CHANCES DE 1000 a 50.000 Robux!",
        discount: "-82%",
        compareAt: "De R$ 55,00",
        price: "R$ 9,99",
        emoji: "🍀",
      },
      {
        name: "Rabbit Blade, Dog Blade, CDK ou TTK",
        discount: "-80%",
        compareAt: "De R$ 100,00",
        price: "R$ 19,90",
      },
      {
        name: "Caixa de Gamepass | DARK BLADE & NOTIFICADOR DE FRUTAS",
        discount: "-90%",
        compareAt: "De R$ 100,00",
        price: "R$ 9,90",
      },
      {
        name: "Caixa de Frutas Permanentes",
        discount: "-71%",
        compareAt: "De R$ 45,00",
        price: "R$ 12,90",
      },
      {
        name: "Caixa de Frutas Permanentes (100% GARANTIDO)",
        discount: "-75%",
        compareAt: "De R$ 80,00",
        price: "R$ 19,90",
      },
    ],
  },
  {
    title: "Combos",
    items: [
      {
        name: "COMBO | Sanguine Art + God Human + Level Máximo",
        discount: "-25%",
        compareAt: "De R$ 16,00",
        price: "R$ 19,99",
      },
      {
        name: "COMBO | Shark Anchor + Level Máximo + God Human",
        discount: "-55%",
        compareAt: "De R$ 33,00",
        price: "R$ 14,90",
      },
      {
        name: "COMBO | CDK + Level Máximo + God Human",
        discount: "-29%",
        compareAt: "De R$ 21,00",
        price: "R$ 15,00",
      },
      {
        name: "COMBO | Conta com Dark Blade, TTK ou CDK + Level Máximo + God Human",
        discount: "-71%",
        compareAt: "De R$ 72,00",
        price: "R$ 20,90",
      },
    ],
  },
  {
    title: "Frutas no Báu",
    items: [
      {
        name: "Conta com Chance de Skin + Level Aleatório",
        discount: "-90%",
        compareAt: "De R$ 199,90",
        price: "R$ 20,90",
      },
      {
        name: "Kitsune Equipada + Level Aleatório",
        discount: "-67%",
        compareAt: "De R$ 57,90",
        price: "R$ 18,90",
      },
      {
        name: "Kitsune + Level Máximo + God Human",
        discount: "-40%",
        compareAt: "De R$ 50,00",
        price: "R$ 29,90",
      },
      {
        name: "(REWORK) Venom no Inventário + Level Máximo + God Human",
        discount: "-85%",
        compareAt: "De R$ 89,00",
        price: "R$ 12,99",
      },
      {
        name: "Buddha no Inventário + Level Aleatório + God Human",
        discount: "-76%",
        compareAt: "De R$ 35,00",
        price: "R$ 8,50",
      },
    ],
  },
  {
    title: "Raças V4",
    items: [
      {
        name: "[💎] 6 Raças V4 FULL + CDK + Level Máximo",
        discount: "-74%",
        compareAt: "De R$ 349,90",
        price: "R$ 89,90",
        emoji: "💎",
      },
      {
        name: "Cyborg V4 Full + CDK + God Human + Level Máximo",
        discount: "-58%",
        compareAt: "De R$ 59,90",
        price: "R$ 24,90",
      },
      {
        name: "Ghoul V4 Full + CDK + God Human + Level Máximo",
        discount: "-67%",
        compareAt: "De R$ 89,90",
        price: "R$ 29,99",
      },
    ],
  },
  {
    title: "OS MAIS COMPRADOS",
    items: [
      {
        name: "CAIXA ROBUX ( SORTE 🍀) - CHANCES DE 1000 a 50.000 Robux!",
        discount: "-33%",
        compareAt: "De R$ 15,00",
        price: "R$ 9,99",
        emoji: "🍀",
      },
      {
        name: "[🐲🔥] Dragon Permanente",
        discount: "-40%",
        compareAt: "De R$ 350,00",
        price: "R$ 209,99",
        emoji: "🐲🔥",
      },
      {
        name: "[🦊💎] Kitsune Permanente",
        discount: "-42%",
        compareAt: "De R$ 300,00",
        price: "R$ 174,99",
        emoji: "🦊💎",
      },
      {
        name: "[🌌] Control Permanente",
        discount: "-42%",
        compareAt: "De R$ 300,00",
        price: "R$ 174,99",
        emoji: "🌌",
      },
      {
        name: "Chance Mítica no Báu + Level 1000+",
        discount: "-86%",
        compareAt: "De R$ 29,00",
        price: "R$ 3,99",
      },
      {
        name: "Conta Aleatória Rara",
        discount: "-87%",
        compareAt: "De R$ 38,00",
        price: "R$ 4,98",
      },
    ],
  },
  {
    title: "Gamepass",
    items: [
      {
        name: "CAIXA ROBUX ( SORTE 🍀) - CHANCES DE 1000 a 50.000 Robux!",
        discount: "-33%",
        compareAt: "De R$ 15,00",
        price: "R$ 9,99",
        emoji: "🍀",
      },
      {
        name: "Caixa de Gamepass | DARK BLADE & NOTIFICADOR DE FRUTAS",
        discount: "-90%",
        compareAt: "De R$ 100,00",
        price: "R$ 9,90",
      },
      {
        name: "Notificador de Frutas",
        price: "R$ 134,99",
      },
      {
        name: "Dark Blade",
        price: "R$ 54,00",
      },
      {
        name: "+1 Espaço no Baú",
        price: "R$ 20,00",
      },
      {
        name: "2x Maestria",
        price: "R$ 22,50",
      },
      {
        name: "2x Dinheiro",
        price: "R$ 22,50",
      },
      {
        name: "Barcos Rápidos",
        price: "R$ 17,50",
      },
      {
        name: "2x Chance Drop",
        price: "R$ 17,50",
      },
    ],
  },
  {
    title: "Frutas Permanentes",
    items: [
      {
        name: "Caixa de Frutas Permanentes",
        discount: "-71%",
        compareAt: "De R$ 45,00",
        price: "R$ 12,90",
      },
      {
        name: "Caixa de Frutas Permanentes (100% GARANTIDO)",
        discount: "-75%",
        compareAt: "De R$ 80,00",
        price: "R$ 19,90",
      },
      {
        name: "Magnetic Permanente",
        discount: "-37%",
        compareAt: "De R$ 250,00",
        price: "R$ 157,50",
      },
      {
        name: "Dragon Permanente",
        discount: "-40%",
        compareAt: "De R$ 350,00",
        price: "R$ 209,99",
      },
      {
        name: "Kitsune Permanente",
        discount: "-42%",
        compareAt: "De R$ 300,00",
        price: "R$ 174,99",
      },
      {
        name: "Control Permanente",
        discount: "-42%",
        compareAt: "De R$ 300,00",
        price: "R$ 174,99",
      },
      {
        name: "Yeti Permanente",
        price: "R$ 149,99",
      },
      {
        name: "Tiger Permanente",
        price: "R$ 149,90",
      },
      {
        name: "Spirit Permanente",
        price: "R$ 127,49",
      },
      {
        name: "Gas Permanente",
        price: "R$ 124,99",
      },
      {
        name: "Portal Permanente",
        price: "R$ 100,00",
      },
      {
        name: "Phoenix Permanente",
        price: "R$ 100,00",
      },
      {
        name: "Sound Permanente",
        price: "R$ 95,00",
      },
      {
        name: "Spider Permanente",
        price: "R$ 90,00",
      },
      {
        name: "Creation Permanente",
        price: "R$ 87,50",
      },
      {
        name: "Love Permanente",
        price: "R$ 85,00",
      },
      {
        name: "Buddha Permanente",
        price: "R$ 82,50",
      },
      {
        name: "Terremoto Permanente",
        price: "R$ 75,00",
      },
      {
        name: "Magma Permanente",
        price: "R$ 65,00",
      },
      {
        name: "Ghost Permanente",
        price: "R$ 63,75",
      },
      {
        name: "Rubber Permanente",
        price: "R$ 60,00",
      },
      {
        name: "Light Permanente",
        price: "R$ 55,00",
      },
      {
        name: "Diamond Permanente",
        price: "R$ 50,00",
      },
      {
        name: "Falcon Permanente",
        price: "R$ 48,75",
      },
      {
        name: "Escuridão Permanente",
        price: "R$ 47,50",
      },
      {
        name: "Areia Permanente",
        price: "R$ 42,50",
      },
      {
        name: "Ice Permanente",
        price: "R$ 37,50",
      },
      {
        name: "Flame Permanente",
        price: "R$ 27,50",
      },
      {
        name: "Gravity Permanente",
        price: "R$ 115,00",
      },
      {
        name: "Blizzard Permanente",
        price: "R$ 112,50",
      },
      {
        name: "Phoenix Permanente",
        price: "R$ 100,00",
      },
      {
        name: "Sound Permanente",
        price: "R$ 95,00",
      },
      {
        name: "Spider Permanente",
        price: "R$ 90,00",
      },
      {
        name: "Creation Permanente",
        price: "R$ 87,50",
      },
      {
        name: "Love Permanente",
        price: "R$ 85,00",
      },
      {
        name: "Buddha Permanente",
        price: "R$ 82,50",
      },
      {
        name: "Terremoto Permanente",
        price: "R$ 75,00",
      },
    ],
  },
];

export const categories: Category[] = [
  { name: "Blox Fruits", href: "/category/blox-fruits" },
  { name: "PROMOÇÕES", href: "/category/promocoes" },
];

export const testimonials: Testimonial[] = [
  {
    initials: "JH",
    name: "Joao Henrique",
    date: "30 de agosto de 2026",
    rating: 5,
    text: "Confiável.",
    product: "Angel V4 Full + CDK + God Human + Level Máximo",
  },
  {
    initials: "AJ",
    name: "Artur Costa Jogos",
    date: "26 de agosto de 2026",
    rating: 5,
    text: "Entrega rápida.",
    product: "1 Mítica Rara no Báu + Level Aleatório",
  },
  {
    initials: "JB",
    name: "Juan Araujo Braga",
    date: "26 de agosto de 2026",
    rating: 4,
    text: "Confiável.",
    product: "2x Dinheiro",
    hasLink: true,
  },
  {
    initials: "PR",
    name: "Patricia Radaelli",
    date: "25 de agosto de 2026",
    rating: 5,
    text: "Muito bom.",
    product: "Caixa de Gamepass | DARK BLADE & NOTIFICADOR DE FRUTAS",
    hasLink: true,
  },
  {
    initials: "JC",
    name: "Joao Victor Pinheiro Costa",
    date: "25 de agosto de 2026",
    rating: 5,
    text: "Super confiável",
    product: "Cyborg V4 Full + CDK + God Human + Level Máximo",
    hasLink: true,
  },
  {
    initials: "YG",
    name: "Ygor Goncalves",
    date: "25 de agosto de 2026",
    rating: 5,
    text: "Vem tudo certo",
    product: "Chance Mítica no Báu + Level 1000+",
    hasLink: true,
  },
  {
    initials: "MG",
    name: "Miguel Gomes",
    date: "25 de agosto de 2026",
    rating: 5,
    text: "Muito bom. Entrega rápida.",
    product: "Conta Aleatória Rara",
    hasLink: true,
  },
  {
    initials: "EA",
    name: "Enzo Santos Aquino",
    date: "25 de agosto de 2026",
    rating: 5,
    text: "Muito bom.",
    product: "Chance Mítica no Báu + Level 1000+",
    hasLink: true,
  },
  {
    initials: "EM",
    name: "Eric Almeida Melo",
    date: "25 de agosto de 2026",
    rating: 5,
    text: "Nick BLACK_04007",
    product: "Caixa de Frutas Permanentes",
    hasLink: true,
  },
  {
    initials: "G",
    name: "Gabriel",
    date: "24 de agosto de 2026",
    rating: 5,
    text: "Voltarei a comprar.",
    product: "Chance Mítica no Báu + Level 1000+",
    hasLink: true,
  },
];

export const heroAlt = "Banner da Inf Blox";
export const searchPlaceholder = "Buscar produto";
export const footerInfo = {
  storeName: "Inf Blox",
  email: "AtendimentoInfBlox@gmail.com",
  credit: "InfBlox",
  copyright: "Copyright © 2026 - Inf Blox.",
  termsLink: "Termos e condições",
};
