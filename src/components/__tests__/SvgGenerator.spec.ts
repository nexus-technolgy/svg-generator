import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { useRoute } from "vue-router";
import SvgGenerator from "../SvgGenerator.vue";
vi.mock("vue-router");

describe("SVG Generator", () => {
  it("renders the SVG with correct dimensions", () => {
    vi.mocked(useRoute).mockReturnValue({
      ...useRoute(),
      params: {
        dimensions: "200x300",
        bgColor: "333",
        fgColor: "ddd",
        text: "Hello World"
      }
    });
    const wrapper = mount(SvgGenerator);

    const svg = wrapper.find("svg");
    expect(svg.attributes("width")).toBe("200");
    expect(svg.attributes("height")).toBe("300");
  });

  it("renders the rectangle with correct fill color", () => {
    vi.mocked(useRoute).mockReturnValue({
      ...useRoute(),
      params: {
        dimensions: "200x300",
        bgColor: "333",
        fgColor: "ddd",
        text: "Hello World"
      }
    });
    const wrapper = mount(SvgGenerator);

    const rect = wrapper.find("rect");
    expect(rect.attributes("fill")).toBe("#333");
  });

  it("renders the text with correct fill color and font size", () => {
    vi.mocked(useRoute).mockReturnValue({
      ...useRoute(),
      params: {
        dimensions: "200x300",
        bgColor: "333",
        fgColor: "ddd",
        text: "The Quick Brown Fox"
      }
    });
    const wrapper = mount(SvgGenerator);

    const text = wrapper.find("text");
    expect(text.attributes("fill")).toBe("#ddd");
    expect(text.attributes("font-size")).toBe("16");
  });

  it("renders the text with correct content", () => {
    vi.mocked(useRoute).mockReturnValue({
      ...useRoute(),
      params: {
        dimensions: "200x300",
        bgColor: "333",
        fgColor: "ddd",
        text: "Hello World"
      }
    });
    const wrapper = mount(SvgGenerator);

    const text = wrapper.find("text");
    expect(text.text()).toBe("Hello World");
  });
});
