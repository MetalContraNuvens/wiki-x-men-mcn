// Localize este bloco dentro de export default { configuration: { ... } }
configuration: {
  pageTitle: "X-MEN // 1997",
  enableSPA: true,
  enablePopovers: true,
  analytics: {
    provider: "plausible",
  },
  locale: "pt-BR",
  baseUrl: "sua-url-aqui.cloudfront.net", // Mantenha a sua URL original aqui
  ignorePatterns: ["private", "templates", ".obsidian"],
  defaultDateType: "created",
  theme: {
    fontOrigin: "google",
    typography: {
      header: "Courier Prime",
      body: "Space Mono",
      code: "JetBrains Mono",
    },
    colors: {
      lightMode: {
        light: "#090a0f",          // Fundo escuro (Cyberpunk Noir)
        lightgray: "#1a1d24",      // Bordas e divisórias escuras
        gray: "#6c7a89",          // Texto secundário/metadados
        darkgray: "#e0e6ed",      // Texto principal claro
        dark: "#ffffff",          // Títulos e negritos
        secondary: "#00e676",     // Verde Neon (Links e acentos principais)
        tertiary: "#ff0055",      // Rosa Neon (Hover e acentos secundários)
        highlight: "rgba(0, 230, 118, 0.1)", // Fundo de links internos
        textHighlight: "#00f0ff", // Ciano Neon para marcações de texto
      },
      darkMode: {
        light: "#0d0f12",          // Fundo escuro principal
        lightgray: "#1a1d24",      // Bordas e divisórias
        gray: "#6c7a89",          // Texto secundário
        darkgray: "#e0e6ed",      // Texto principal claro
        dark: "#ffffff",          // Títulos e negritos
        secondary: "#00f0ff",     // Ciano Neon (Links e acentos principais)
        tertiary: "#ff0055",      // Rosa Neon (Hover e acentos secundários)
        highlight: "rgba(0, 240, 255, 0.1)", // Fundo de links internos
        textHighlight: "#00e676", // Verde Neon para marcações de texto
      },
    },
  },
},