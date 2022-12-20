import { render, cleanup } from "@testing-library/svelte";
import { afterEach, it, describe, expect } from "vitest";
import Divider from "./Divider.svelte";

afterEach(cleanup);

describe("Divider", () => {
  describe("Margins", () => {
    it("should add the margin", async () => {
      const baseElement = render(Divider, {
        testid: "divider-test",
        mt: "s",
        mr: "m",
        mb: "l",
        ml: "xl",
      });
      const divider = await baseElement.findByTestId("divider-test");

      expect(divider).toBeTruthy();
      expect(divider.outerHTML).toContain("margin-top:var(--goa-spacing-s)");
      expect(divider.outerHTML).toContain("margin-right:var(--goa-spacing-m)");
      expect(divider.outerHTML).toContain("margin-bottom:var(--goa-spacing-l)");
      expect(divider.outerHTML).toContain("margin-left:var(--goa-spacing-xl)");
    });
  });
});
