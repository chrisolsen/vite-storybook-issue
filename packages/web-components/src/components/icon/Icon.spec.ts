import { render } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import GoAIcon from './Icon.svelte'

describe("Icon", () => {
  describe("Margins", () => {
    it(`should add the margin`, async () => {
      const baseElement = render(GoAIcon, {
        testid: "icon-test",
        type: "ellipse",
        mt: "s",
        mr: "m",
        mb: "l",
        ml: "xl",
      });
      const el = await baseElement.findByTestId("icon-test");

      expect(el).toBeTruthy();
      expect(el.getAttribute("style")).toContain("margin-top:var(--goa-spacing-s)");
      expect(el.getAttribute("style")).toContain("margin-right:var(--goa-spacing-m)");
      expect(el.getAttribute("style")).toContain("margin-bottom:var(--goa-spacing-l)");
      expect(el.getAttribute("style")).toContain("margin-left:var(--goa-spacing-xl)")
    });
  });
})
