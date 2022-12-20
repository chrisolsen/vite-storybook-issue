import { render, fireEvent, cleanup, waitFor } from '@testing-library/svelte';
import { afterEach, expect, vi, describe, it } from 'vitest';
import GoAModal from './Modal.svelte'
import GoAModalWrapper from './ModalWrapper.test.svelte'

afterEach(cleanup);

describe('Modal Component', () => {

  it("should open when the `open` attribute is set to true", async () => {
    const el = render(GoAModal, { open: "true" });
    expect(el.queryByTestId("modal")).toBeTruthy();
  });

  it("should close when the `open` attribute is set to false", async () => {
    const el = render(GoAModal, { open: "false" });
    expect(el.queryByTestId("modal")).toBeFalsy();
  })

  it("should show the heading", async () => {
    const el = render(GoAModal, { open: "true", heading: "Test heading" });
    expect(el.queryByTestId("modal-title").innerHTML).toContain("Test heading");
  })

  it("should close on icon click when made to be closable", async () => {
    const el = render(GoAModal, { open: "true", closable: "true" });
    const click = vi.fn();

    const closeIcon = el.queryByTestId("modal-close-button");
    closeIcon.addEventListener("_close", click);
    await fireEvent.click(closeIcon);
    expect(click).toBeCalled();
  })

  it("should close on background click when made to be closable", async () => {
    const el = render(GoAModal, { open: "true", closable: "true" });
    const click = vi.fn();

    const closeIcon = el.queryByTestId("modal-overlay");
    closeIcon.addEventListener("_close", click);
    await fireEvent.click(closeIcon);
    expect(click).toBeCalled();
  })

  it("should have a slot for the default content", async () => {
    const content = "This is the content";
    const el = render(GoAModalWrapper, { content });

    expect(el.container.innerHTML).toContain(content);
    expect(el.container.querySelector("[slot=content]").innerHTML).toContain(content);
  })

  it("should have a slot for actions", async () => {
    const actionContent = "This is the actionContent";
    const el = render(GoAModalWrapper, { actionContent });

    expect(el.container.querySelector("[slot=actions]").innerHTML).toContain(actionContent);
  });

  ["emergency", "important", "information", "success", "event"].forEach(calloutVariant => {
    it(`renders the ${calloutVariant} callout modal`, async () => {
      const el = render(GoAModal, { open: "true", heading: "Heading", "calloutvariant": calloutVariant });
      expect(el.queryByTestId("modal-title").innerHTML).toContain("Heading");
      expect(el.container.querySelector(`.${calloutVariant}`)).toBeTruthy();
    });
  });

  it("should not render an invalid calloutVariant", async () => {
    const mock = vi.spyOn(console, "error");
    render(GoAModal, { open: "true", heading: "Heading", calloutvariant: "importantttttt" });
    await waitFor(() => {
      expect(console.error["mock"].calls.length).toBeGreaterThan(0);
    })
    mock.mockRestore();
  });

});
