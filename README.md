# SVG Generator

This is a self-rendering SPA that will generate a placeholder image for most requirements in web development

A sample application has been deployed at [https://dynamic-svg.web.app/](https://dynamic-svg.web.app/)

Use the following format in the URL to generate an SVG:

https://dynamic-svg.web.app/`width`x`height`/`bgColor`/`fgColor`/`text`

#### Examples

- `/400x100/fff/333/logo` - Generates a 400x100 SVG with a white background, charcoal text "logo".
- `/300x100/steelblue/white/test` - Generates a 300x100 SVG with a steel blue background, white text "test".
- `/200x100` - Generates a 200x100 SVG with default colors and text "200 x 100".
- `/300` - Generates a 300x300 SVG (square) with default colors and text "300 x 300".
- `/64/green/green` - Generates a 64x64 SVG with a green background, no visible text.

**NB** The text font size will scale from 8 - 24 based on the available space inside the image

## Module

```
lib/generator.js
```

The module is a single class that returns an `svg` image and `mimeType`.

```ts
import { SvgGenerator } from "@nexustech/svg-generator";

const { svg, mimeType } = new SvgGenerator("200x100", "f00", "white", "Hello+World");
```

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100"><rect width="200" height="100" fill="#f00"/><text x="50%" y="50%" fill="white" font-family="Arial" font-size="24" dominant-baseline="middle" text-anchor="middle">Hello World</text></svg>
```

Expected usage is in your own application/API where you need to render placeholder images and don't want to expose your app to the tracking and other issues associated with remote image generators.

### Example in Express

`image.ts`

```ts
import { SvgGenerator } from "@nexustech/svg-generator";
import { Request, Response, Router } from "express";

// Route /image
export const image = Router();

image.get("/:dimensions/:bg?/:fg?/:text?", (req: Request, res: Response) => {
  const { dimensions, bg, fg, text } = req.params;
  const { svg, mimeType } = new SvgGenerator(dimensions, bg, fg, text);
  res.setHeader("Content-Type", mimeType);
  res.send(svg);
});
```

`index.ts`

```ts
import { image } from "./image";
import express from "express";
// ...other imports

const app = express();
// ...middleware

if (!isProd) app.use("/image", image);
// ...other routes

app.listen(port, function () {
  logger.info(`Listening on ${host}:${port}`);
});
```

Then you can call your own backend for a placeholder image using `/image/<width>x<height>/<bg-color>/<fg-color>/<text>` or any other valid combination.

Unlike the demo app, using this in your own backend will respond with an `image/svg+xml` content response containing only the svg.

## App Development

The repository contains both the module and the app, although they are packaged individually

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

### Project Setup

`bun` or `yarn` or `npm`; take you pick, they all do the same thing.

```sh
bun install
```

#### Compile and Hot-Reload App for Development

```sh
bun run dev
```

#### Compile and Package App

```sh
bun run build:app
```

#### Compile and Package Module

```sh
bun run build:module
```

#### Type-Check, Compile and Minify both

```sh
bun run build
```
