import { render } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import GoACallout from './Callout.svelte'
import GoACalloutWrapper from './CalloutWrapper.test.svelte'

describe('GoACalloutComponent', () => {
  it('should render - emergency', async () => {
    const baseElement = render(GoACallout, { testid: "callout-test", type: "emergency", heading: 'Complete' });
    const callout = await baseElement.findByTestId('callout-test');
    const span = callout.firstElementChild;
    const icon = span.firstElementChild;

    expect(callout).toBeTruthy();
    expect(span).toBeTruthy();
    expect(span.classList.contains("emergency")).toBeTruthy();
    expect(icon.getAttribute("type")).toBe("warning");
    expect(callout.innerHTML).toContain("Complete")
  });

  it('should render - important', async () => {
    const baseElement = render(GoACallout, { testid: "callout-test", type: "important", heading: 'Complete' });
    const callout = await baseElement.findByTestId('callout-test');
    const span = callout.firstElementChild;
    const icon = span.firstElementChild;

    expect(callout).toBeTruthy();
    expect(span).toBeTruthy();
    expect(span.classList.contains("important")).toBeTruthy();
    expect(icon.getAttribute("type")).toBe("alert-circle");
    expect(callout.innerHTML).toContain("Complete")
  });

  it('should render - information', async () => {
    const baseElement = render(GoACallout, { testid: "callout-test", type: "information", heading: 'Complete' });
    const callout = await baseElement.findByTestId('callout-test');
    const span = callout.firstElementChild;
    const icon = span.firstElementChild;

    expect(callout).toBeTruthy();
    expect(span).toBeTruthy();
    expect(span.classList.contains("information")).toBeTruthy();
    expect(icon.getAttribute("type")).toBe("information-circle");
    expect(callout.innerHTML).toContain("Complete")
  });

  it('should render - success', async () => {
    const baseElement = render(GoACallout, { testid: "callout-test", type: "success", heading: 'Complete' });
    const callout = await baseElement.findByTestId('callout-test');
    const span = callout.firstElementChild;
    const icon = span.firstElementChild;

    expect(callout).toBeTruthy();
    expect(span).toBeTruthy();
    expect(span.classList.contains("success")).toBeTruthy();
    expect(icon.getAttribute("type")).toBe("checkmark-circle");
    expect(callout.innerHTML).toContain("Complete")
  });


  it('should render - emergency', async () => {
    const baseElement = render(GoACallout, { testid: "callout-test", type: "emergency", heading: 'Complete' });
    const callout = await baseElement.findByTestId('callout-test');
    const span = callout.firstElementChild;
    const icon = span.firstElementChild;

    expect(callout).toBeTruthy();
    expect(span).toBeTruthy();
    expect(span.classList.contains("emergency")).toBeTruthy();
    expect(icon.getAttribute("type")).toBe("warning");
    expect(callout.innerHTML).toContain("Complete")
  });

  it('should render - the content', async () => {
    const baseElement = render(GoACalloutWrapper, { type: "emergency", heading: 'Complete', content: 'This is the content' });
    const callout = baseElement.container.querySelector('goa-callout');
    expect(callout.innerHTML).toContain("This is the content")
  });

  it('should render - without the heading', async () => {
    const baseElement = render(GoACallout, { type: "emergency", testid: "testid" });
    const el = baseElement.queryByTestId("testid");
    const heading = el.querySelector('h3');
    expect(heading).toBeNull();
  });

  describe("Margins", () => {
    it(`should add the margin`, async () => {
      const baseElement = render(GoACallout, {
        testid: "callout-test",
        type: "important",
        mt: "s",
        mr: "m",
        mb: "l",
        ml: "xl",
      });
      const el = await baseElement.findByTestId("callout-test");

      expect(el).toBeTruthy();
      expect(el.getAttribute("style")).toContain("margin-top:var(--goa-spacing-s)");
      expect(el.getAttribute("style")).toContain("margin-right:var(--goa-spacing-m)");
      expect(el.getAttribute("style")).toContain("margin-bottom:var(--goa-spacing-l)");
      expect(el.getAttribute("style")).toContain("margin-left:var(--goa-spacing-xl)")
    });
  });
});
