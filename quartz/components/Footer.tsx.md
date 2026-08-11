import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? {}
    return (
      <footer className={`${displayClass ?? ""}`}>
        <p style={{ fontSize: "0.8rem", color: "var(--lightgray)", marginBottom: "1rem", lineHeight: "1.4" }}>
          <strong>Aviso de Obra de Fã:</strong> Este é um projeto de RPG de mesa sem fins lucrativos, não oficial e baseado nos universos de X-Men (Marvel) e Cyberpunk. Todos os direitos reservados aos seus respectivos detentores.
        </p>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://jzhao.xyz">Quartz v{version}</a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li key={text}>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
