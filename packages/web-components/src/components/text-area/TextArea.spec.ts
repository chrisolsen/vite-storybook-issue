import { fireEvent, render } from "@testing-library/svelte";
import GoATextArea from "./TextArea.svelte"
import { vi, it, describe, expect } from "vitest";

describe("GoATextArea", () => {

  it("should render", async () => {
    const result = render(GoATextArea, {
      name: "name",
      placeholder: "Enter text here",
      value: "foobar",
      rows: 42,
      disabled: "true",
      testid: "test-id",
    });

    const el = result.queryByTestId("test-id") as HTMLTextAreaElement;
    expect(el.name).toBe("name");
    expect(el.getAttribute("placeholder")).toEqual("Enter text here");
    expect(el.value).toBe("foobar");
    expect(el.disabled).toBe(true);
    expect(el.getAttribute("data-testid")).toBe("test-id");
    expect(el.getAttribute("rows")).toBe("42");
  });

  it("handles the change event", async () => {
    const onChange = vi.fn();
    const result = render(GoATextArea, {
      name: "name",
      value: "foo",
      testid: "test-id",
    });

    const textarea = result.queryByTestId("test-id");
    textarea.addEventListener("_change", (e: CustomEvent) => {
      expect(e.detail.name).toBe("name");
      expect(e.detail.value).toBe("bar");
      onChange();
    });

    expect(textarea.getAttribute("disabled")).toBeNull();
    await fireEvent.keyUp(textarea, { target: { value: 'bar' } });
    expect(onChange).toBeCalledTimes(1);
  })

  it("can be disabled", async () => {
    const onChange = vi.fn();
    const result = render(GoATextArea, {
      name: "name",
      value: "foo",
      testid: "test-id",
      disabled: "true",
    });

    const textarea = result.queryByTestId("test-id");
    textarea.addEventListener("_change", onChange);

    await fireEvent.keyUp(textarea, { target: { value: 'bar' } });
    expect(textarea.getAttribute("disabled")).toEqual("");
    expect(onChange).not.toBeCalled();
  })

  it("indicates an error state", async () => {
    const result = render(GoATextArea, {
      name: "name",
      value: "foo",
      testid: "test-id",
      error: "true",
    });

    const textarea = result.queryByTestId("test-id");
    expect(textarea.classList.contains("error")).toBeTruthy();
  })

  it("accepts an arialabel property", async () => {
    const el = render(GoATextArea, { testid: "input-test", name: "description", arialabel: "Description" });
    const root = el.container.querySelector('[aria-label="Description"]');
    expect(root).toBeTruthy();
  });

  it("defaults to the name property if arialabel is not supplied", async () => {
    const el = render(GoATextArea, { testid: "input-test", name: "about" });
    const root = el.container.querySelector('[aria-label="about"]');
    expect(root).toBeTruthy();
  });

  describe("Margins", () => {
    it(`should add the margin`, async () => {
      const baseElement = render(GoATextArea, {
        testid: "textarea-test",
        name: "test",
        mt: "s",
        mr: "m",
        mb: "l",
        ml: "xl",
      });
      const el = baseElement.container.querySelector(".container")

      expect(el).toBeTruthy();
      const style = el.getAttribute("style")
      expect(style).toBeTruthy();
      expect(style).toContain("margin-top:var(--goa-spacing-s)");
      expect(el.getAttribute("style")).toContain("margin-right:var(--goa-spacing-m)");
      expect(el.getAttribute("style")).toContain("margin-bottom:var(--goa-spacing-l)");
      expect(el.getAttribute("style")).toContain("margin-left:var(--goa-spacing-xl)")    
    });
  });
});
