import { render, cleanup } from '@testing-library/svelte';
import { afterEach, expect, it, describe } from 'vitest';
import GoASkeleton from './Skeleton.svelte';

afterEach(cleanup);

describe('GoARadioGroup Component', () => {
  for (const type of ["image", "text", "title", "text-small", "avatar", "header", "paragraph", "thumbnail", "card", "profile"]) {
    it(`should render the ${type} type`, async () => {
      const baseElement = render(GoASkeleton, { type });

      expect(baseElement.container.querySelector('.skeleton')).toBeTruthy()
    });
  }

  describe("Margins", () => {
    it(`should add the margin`, async () => {
      const baseElement = render(GoASkeleton, {
        testid: "skeleton-test",
        type: "text",
        mt: "s",
        mr: "m",
        mb: "l",
        ml: "xl",
      });
      const el = await baseElement.findByTestId("skeleton-test");

      expect(el).toBeTruthy();
      expect(el.getAttribute("style")).toContain("margin-top:var(--goa-spacing-s)");
      expect(el.getAttribute("style")).toContain("margin-right:var(--goa-spacing-m)");
      expect(el.getAttribute("style")).toContain("margin-bottom:var(--goa-spacing-l)");
      expect(el.getAttribute("style")).toContain("margin-left:var(--goa-spacing-xl)")
    });
  });
});
