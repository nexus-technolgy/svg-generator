<template>
  <div v-html="svg"></div>
  <div>
    <a href="/">Instructions</a><br />
    <a href="#" :onclick>Download</a>
  </div>
</template>

<script lang="ts">
import { SvgGenerator, type SvgGeneratorParams } from "@/generator";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "SVG-Generator",
  setup() {
    const props = useRoute().params as SvgGeneratorParams;
    const { dimensions, bgColor, fgColor, text } = props;
    const { svg, mimeType } = new SvgGenerator(dimensions, bgColor, fgColor, text);
    const onclick = () => {
      const blob = new Blob([svg], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${text || dimensions}.svg`;
      a.click();
      URL.revokeObjectURL(url);
    };
    return { onclick, svg };
  }
});
</script>

<style scoped>
div {
  width: 100%;
  text-align: center;
  margin-top: 3vh;
}
svg {
  display: block;
  margin: auto;
}
</style>
