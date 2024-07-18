<template>
  <div>
    <h1>SVG Generator Instructions</h1>
    <p>Use the following format in the URL to generate an SVG:</p>
    <code>/`width`x`height`/`bgColor`/`fgColor`/`text`</code>
    <p>Examples:</p>
    <ul>
      <li>
        <code>/400x100/fff/333/logo</code> - Generates a 400x100 SVG with a white background,
        charcoal text "logo".
      </li>
      <li>
        <code>/300x100/steelblue/white/test</code> - Generates a 300x100 SVG with a steel blue
        background, white text "test".
      </li>
      <li>
        <code>/200x200</code> - Generates a 200x200 SVG with default colors and text "200x200".
      </li>
      <li>
        <code>/300</code> - Generates a 300x300 SVG (square) with default colors and text "300x300".
      </li>
      <li>
        <code>/64/green/green</code> - Generates a 64x64 SVG with a green background, no visible
        text.
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {};
</script>
