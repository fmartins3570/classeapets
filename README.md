# Classe A Pets

Site da Classe A Pets — ambiente de desenvolvimento com React 19 e Vite 7.

## Stack

| Camada     | Tecnologia                    |
| ---------- | ----------------------------- |
| Interface  | React 19 (react + react-dom)   |
| Build      | Vite 7 + @vitejs/plugin-react  |
| Linguagem  | JavaScript (arquivos .jsx)     |
| Estilos    | CSS (um .css por componente)  |
| Lint       | ESLint (React Hooks + React Refresh) |
| Imagens    | Sharp (script de otimização)   |
| Módulos    | ES modules (`"type": "module"`) |

## Comandos

- **`npm run dev`** — servidor de desenvolvimento
- **`npm run build`** — build de produção
- **`npm run preview`** — preview do build
- **`npm run lint`** — rodar ESLint
- **`npm run optimize-images`** — otimizar imagens com Sharp

## Convenção de CSS (um arquivo por componente)

Para cada componente React, use um arquivo `.css` no mesmo nível e importe no componente:

- `Header.jsx` + `Header.css` → no componente: `import './Header.css'`
- `Button.jsx` + `Button.css` → no componente: `import './Button.css'`

O `index.css` na raiz de `src/` é a folha global (reset, variáveis, fontes). Use nomes de classes únicos (ex.: BEM como `header__title`) para evitar conflitos.

## Imagens (Sharp)

- **Originais:** coloque em `public/images/`
- **Otimizadas:** o script gera WebP em `public/images/optimized/`
- **Responsivas:** também gera variantes `-320w`, `-480w`, `-640w`... para uso em `srcSet`

Execute `npm run optimize-images` antes de commitar ou no pipeline. No HTML/JSX, referencie as imagens em `public/images/optimized/` (caminho ex.: `/images/optimized/nome.webp`).

## Performance (CWV)

- **JS inicial menor:** seções abaixo da dobra usam `React.lazy`.
- **Cache HTTP:** regras em `public/_headers` (assets imutáveis por 1 ano).
- **CDN de assets:** defina `VITE_ASSET_CDN_URL` para prefixar URLs de imagem.
- **Base pública:** `VITE_PUBLIC_BASE` para ajustar `base` do Vite no deploy.
- **Script não crítico:** `public/analytics.js` é carregado com `defer` em `index.html`.

## Estrutura sugerida

```
src/
  components/
    Header.jsx
    Header.css
    ...
  App.jsx
  App.css
  main.jsx
  index.css
public/
  images/          ← imagens originais
    optimized/     ← gerado pelo script Sharp
```
