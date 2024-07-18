# SVG Generator

This is a self-rendering SPA that will generate a placeholder image for most requirements in web development

Use the following format in the URL to generate an SVG:

/`width`x`height`/`bgColor`/`fgColor`/`text`

#### Examples

- `/400x100/fff/333/logo` - Generates a 400x100 SVG with a white background, charcoal text "logo".
- `/300x100/steelblue/white/test` - Generates a 300x100 SVG with a steel blue background, white text "test".
- `/200x100` - Generates a 200x100 SVG with default colors and text "200 x 100".
- `/300` - Generates a 300x300 SVG (square) with default colors and text "300 x 300".
- `/64/green/green` - Generates a 64x64 SVG with a green background, no visible text.

**NB** The text font size will scale from 8 - 24 based on the available space inside the image

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun run dev
```

### Type-Check, Compile and Minify for Production

```sh
bun run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
bun run test
```

### Lint with [ESLint](https://eslint.org/)

```sh
bun run lint
```
