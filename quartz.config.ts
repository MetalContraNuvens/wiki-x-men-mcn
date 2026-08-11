import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 * https://quartz.jzhao.xyz/configuration
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "X-MEN // CORONADO 1997",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "pt-BR",
    baseUrl: "wiki-x-men-mcn.pages.dev",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Courier Prime",
        body: "Space Mono",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#090a0f",
          lightgray: "#1a1d24",
          gray: "#6c7a89",
          darkgray: "#e0e6ed",
          dark: "#ffffff",
          secondary: "#00e676",
          tertiary: "#ff0055",
          highlight: "rgba(0, 230, 118, 0.1)",
          textHighlight: "#00f0ff",
        },
        darkMode: {
          light: "#0d0f12",
          lightgray: "#1a1d24",
          gray: "#6c7a89",
          darkgray: "#e0e6ed",
          dark: "#ffffff",
          secondary: "#00f0ff",
          tertiary: "#ff0055",
          highlight: "rgba(0, 240, 255, 0.1)",
          textHighlight: "#00e676",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInBodyEmbeds: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
