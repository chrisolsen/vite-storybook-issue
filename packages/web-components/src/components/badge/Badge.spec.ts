import { render } from "@testing-library/svelte";
import { expect, it, describe } from "vitest";
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

        expect(badge.classList.contains(`badge-${type}`)).toBeTruthy();
        expect(badge.innerHTML).toContain("Content");
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
        expect(badge.classList.contains(`badge-${type}`)).toBeTruthy();
        expect(badge.innerHTML).toContain("Content");
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
      expect(badge.getAttribute("style")).toContain("margin-top:var(--goa-spacing-s)");
      expect(badge.getAttribute("style")).toContain("margin-right:var(--goa-spacing-m)");
      expect(badge.getAttribute("style")).toContain("margin-bottom:var(--goa-spacing-l)");
      expect(badge.getAttribute("style")).toContain("margin-left:var(--goa-spacing-xl)");
    });
  });
});
