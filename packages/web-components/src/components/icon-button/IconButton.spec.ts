import { render } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import GoAIconButton from './IconButton.svelte'

describe("IconButton", () => {
  describe("Margins", () => {
    it(`should add the margin`, async () => {
      const baseElement = render(GoAIconButton, {
        testid: "iconButton-test",
        icon: "ellipsis",
        mt: "s",
        mr: "m",
        mb: "l",
        ml: "xl",
      });
      const el = await baseElement.findByTestId("iconButton-test");

      expect(el).toBeTruthy();
      expect(el.getAttribute("style")).toContain("margin-top:var(--goa-spacing-s)");
      expect(el.getAttribute("style")).toContain("margin-right:var(--goa-spacing-m)");
      expect(el.getAttribute("style")).toContain("margin-bottom:var(--goa-spacing-l)");
      expect(el.getAttribute("style")).toContain("margin-left:var(--goa-spacing-xl)")
    });
  });
})
