import React from "react"
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import { GoADropdown } from "./dropdown";
import { GoADropdownItem, GoADropdownOption } from "./dropdown-item";

afterEach(cleanup);

describe("GoADropdown", () => {
  it("should inform the user that GoADropdownOption is deprecated", async () => {
    const spy = vi.spyOn(console, "warn");
    render(
      <GoADropdown onChange={() => {}}>
        <GoADropdownOption value="foo" />
      </GoADropdown>
    );

    await waitFor(() => {
      expect(spy).toHaveBeenCalledOnce()
    });
  });

  it("should bind all web-component attributes", async () => {
    const { baseElement } = render(
      <GoADropdown
        leadingIcon="color-wand"
        name="favColor"
        value={[""]}
        maxHeight="100px"
        placeholder="Select..."
        disabled={true}
        error={true}
        testId="foo"
        width="200px"
        mt="s"
        mr="m"
        mb="l"
        ml="xl"
        onChange={() => {}}
      >
        <GoADropdownItem name="favColor" label="Red" value="red" />
        <GoADropdownItem name="favColor" label="Blue" value="blue" />
        <GoADropdownItem name="favColor" label="Yellow" value="yellow" />
      </GoADropdown>
    );

    const el = baseElement.querySelector("goa-dropdown");
    expect(el).toBeTruthy();
    expect(el?.getAttribute("leadingicon")).toBe("color-wand");
    expect(el?.getAttribute("mt")).toBe("s");
    expect(el?.getAttribute("mr")).toBe("m");
    expect(el?.getAttribute("mb")).toBe("l");
    expect(el?.getAttribute("ml")).toBe("xl");
  });

  it("should allow for a single selection", async () => {
    const fn = vi.fn();

    const { baseElement } = render(
      <GoADropdown name="favColor" value="yellow" onChange={fn} native={true}>
        <GoADropdownItem name="favColor" label="Red" value="red" />
        <GoADropdownItem name="favColor" label="Blue" value="blue" />
        <GoADropdownItem name="favColor" label="Yellow" value="yellow" />
      </GoADropdown>
    );

    const el = baseElement.querySelector("goa-dropdown");
    el && fireEvent(
      el,
      new CustomEvent("_change", {
        detail: { name: "favColor", value: "blue" },
      })
    );
    await waitFor(() => {
      expect(fn).toBeCalledWith("favColor", "blue");
    });
  });
});
