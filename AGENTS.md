# AGENTS.md — Wiki Pública (wiki-x-men-mcn)

## Função deste repositório

Wiki **pública** da campanha RPG X-Men (Coronado City, 1997), publicada como site estático via Quartz 5. Origin: `MetalContraNuvens/wiki-x-men-mcn`.

Todo o conteúdo aqui é **liberado** para a população de Coronado. Não há segredos aqui.

## Regras de revelação (privado → público)

- Nenhum conteúdo do repositório privado `x-men-rpg` (lore secreta, dossiês internos, spoilers de sessão) pode ser copiado, adaptado ou resumido para esta wiki sem **autorização explícita do Narrador**.
- A transferência privado → público é **deliberadamente manual**. Não implementar, automatizar ou presumir publicação.
- Publicação: `npx quartz build` + deploy. Nunca fazer build, commit ou push de publicação sem ordem explícita do Narrador.

## Estrutura

- `content/` — artigos da wiki (Markdown + frontmatter YAML). Fonte dos textos públicos.
- `quartz.config.ts` — configuração do Quartz 5 (título, tema cyberpunk, plugins, `ignorePatterns: ["private", "templates", ".obsidian"]`).
- `quartz/` — framework Quartz (não editar sem necessidade explícita).
- `docs/` — documentação do framework (padrão do upstream; não editar).
- `private/` — ignorado pelo `.gitignore`; nunca versionar conteúdo restrito aqui.

## Convenções de conteúdo

- Idioma: **pt-BR**.
- Frontmatter YAML obrigatório: `title`, `description`, `aliases` (ver `content/index.md`).
- Wikilinks `[[...]]` suportados (Obsidian-flavored habilitado no Quartz).
- O texto reflete estritamente o **conhecimento público** de Coronado City em 1997.

## Precedência da verdade

1. Sessão mais recente (`SxxEyy`), vinda do NBLM.
2. `[LORE]` local (fonte: repositório privado `x-men-rpg`).
3. `[REFERÊNCIA]` (inspiração externa, só canônica se assimilada).

Esta wiki **não é fonte primária da verdade**; a fonte é o repositório privado `x-men-rpg`.
