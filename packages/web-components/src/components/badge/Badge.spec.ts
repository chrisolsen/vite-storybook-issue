import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import GoABadge from "./Badge.svelte";

describe("GoABadgeComponent", () => {

  const badgeTypes = [
    "success",
    "important",
    "error",
    "information",
    "emergency",
    "dark",
    "midtone",
    "light",
  ]

  describe("Badge Types", () => {
    badgeTypes.forEach(type => {
      it(`should render - ${type}`, async () => {
        const baseElement = render(GoABadge, {
          testid: "badge-test",
          type,
          content: "Content",
        });
        const badge = await baseElement.findByTestId("badge-test");

        expect(badge).toHaveClass(`badge-${type}`);
        expect(badge).toContainHTML("Content");
      });
    });
  });

  describe("Icons", () => {
    badgeTypes.forEach((type) => {
      it(`should render icon - ${type}`, async () => {
        const baseElement = render(GoABadge, {
          testid: "badge-test",
          type,
          icon: "true",
          content: "Content",
        });
        const badge = await baseElement.findByTestId("badge-test");

        expect(badge).toBeTruthy();
        expect(badge.childElementCount).toBe(2);
        expect(badge).toHaveClass(`badge-${type}`);
        expect(badge).toContainHTML("Content");
      });
    });
  });

  describe("Margins", () => {
    it(`should add the margin`, async () => {
      const baseElement = render(GoABadge, {
        testid: "badge-test",
        type: "success",
        content: "Content",
        mt: "s",
        mr: "m",
        mb: "l",
        ml: "xl",
      });
      const badge = await baseElement.findByTestId("badge-test");

      expect(badge).toBeTruthy();
      expect(badge).toHaveStyle("margin-top:var(--goa-spacing-s)");
      expect(badge).toHaveStyle("margin-right:var(--goa-spacing-m)");
      expect(badge).toHaveStyle("margin-bottom:var(--goa-spacing-l)");
      expect(badge).toHaveStyle("margin-left:var(--goa-spacing-xl)");
    });
  });
});
