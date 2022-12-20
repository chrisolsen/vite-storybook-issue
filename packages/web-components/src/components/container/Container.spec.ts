import { render } from "@testing-library/svelte";
import GoAContainerWrapper from "./ContainerWrapper.test.svelte"
import GoAContainer from "./Container.svelte"
import { expect, it, describe } from "vitest";

describe("GoA Container", () => {

  it("should render", async () => {
    render(GoAContainerWrapper, {
      title: "Test Title",
      content: "Test Content",
      actions: "Test Actions",
    });

    const title = document.querySelector(".title");
    expect(title.innerHTML).toContain("Test Title");

    const content = document.querySelector(".content");
    expect(content.innerHTML).toContain("Test Content");

    const actions = document.querySelector(".actions");
    expect(actions.innerHTML).toContain("Test Actions");
  });

  describe("Margins", () => {
    it(`should add the margin`, async () => {
      const baseElement = render(GoAContainer, {
        testid: "container-test",
        mt: "s",
        mr: "m",
        mb: "l",
        ml: "xl",
      });
      const el = await baseElement.findByTestId("container-test");

      expect(el).toBeTruthy();
      expect(el.getAttribute("style")).toContain("margin-top:var(--goa-spacing-s)");
      expect(el.getAttribute("style")).toContain("margin-right:var(--goa-spacing-m)");
      expect(el.getAttribute("style")).toContain("margin-bottom:var(--goa-spacing-l)");
      expect(el.getAttribute("style")).toContain("margin-left:var(--goa-spacing-xl)")
    });
  });
});
