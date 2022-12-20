import { render, waitFor } from "@testing-library/svelte";
import { expect, it, describe } from "vitest";
import GoACard from "./Card.svelte";

describe("GoACardComponent", () => {
  it("should render - success with elevation", async () => {
    const baseElement = render(GoACard, {
      testid: "card-test",
      width: "500px",
      elevation: 1,
    });
    const card = await baseElement.findByTestId("card-test");
    expect(card).toBeTruthy();

    await waitFor(() => {
      expect(card.style.getPropertyValue("--width")).toContain("500px");
      expect(card.style.getPropertyValue("box-shadow")).toContain("var(--shadow-1)");
    });
  });

  describe("Margins", () => {
    it(`should add the margin`, async () => {
      const baseElement = render(GoACard, {
        testid: "card-test",
        mt: "s",
        mr: "m",
        mb: "l",
        ml: "xl",
      });
      const el = await baseElement.findByTestId("card-test");

      expect(el).toBeTruthy();
      expect(el.getAttribute("style")).toContain("margin-top:var(--goa-spacing-s)");
      expect(el.getAttribute("style")).toContain("margin-right:var(--goa-spacing-m)");
      expect(el.getAttribute("style")).toContain("margin-bottom:var(--goa-spacing-l)");
      expect(el.getAttribute("style")).toContain("margin-left:var(--goa-spacing-xl)")
    });
  });
});
