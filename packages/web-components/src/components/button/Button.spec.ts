import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from '@testing-library/svelte';
import { expect, it, describe, vi, SpyInstance, beforeEach, afterEach } from 'vitest';
import GoAButton from './Button.svelte'

describe('GoAButtonComponent', () => {

  it('should render', async () => {
    const baseElement = render(GoAButton);
    const button = await baseElement.findByRole('button');

    expect(button).toBeTruthy();
  });

  describe("events", () => {
    it('should handle the click event', async () => {
      const onClick = vi.fn();
      const results = render(GoAButton, { testid: 'button-test' });
      const button = await results.findByTestId('button-test');

      button.addEventListener('_click', onClick)
      expect(button).not.toBeNull();

      await fireEvent.click(button);
      expect(onClick).toBeCalled();
    });
  })

  describe("size", () => {
    ["compact", "normal"].forEach(size => {
      it(`should render ${size} size`, async () => {
        const { findByRole } = render(GoAButton, { size });
        const button = await findByRole("button");

        expect(button).toBeTruthy();
        expect(button.className).toContain(size);
      });
    });

    it("should not allow for invalid size", async () => {
      const mock = vi.spyOn(console, "error")
      render(GoAButton, { size: "huuuuuuge" });
      await waitFor(() => {
        expect(console.error["mock"].calls.length).toBeGreaterThan(0);
      })
      mock.mockRestore();
    });
  });

  describe("type", () => {
    ["primary", "submit", "secondary", "tertiary", "start"].forEach(type => {
      it(`should render ${type} type`, async () => {
        const baseElement = render(GoAButton, { type });
        const button = await baseElement.findByRole("button");

        expect(button).toBeTruthy();
        expect(button.className).toContain(type);
      });
    });
  });

  describe("variant", () => {
    ["normal", "destructive"].forEach(variant => {
      it(`should render ${variant} variant`, async () => {
        const baseElement = render(GoAButton, { variant });
        const button = await baseElement.findByRole("button");

        expect(button).toBeTruthy();
        expect(button.className).toContain(variant);
      });
    });
  });

  describe("Invalid attrs", () => {
    it("invalid type", async () => {
      vi.spyOn(console, "error")
      render(GoAButton, { type: "foobar" });
      await waitFor(() => {
        expect(console.error["mock"].calls.length).toBeGreaterThan(0);
      })
    });

    it("invalid size", async () => {
      vi.spyOn(console, "error")
      render(GoAButton, { size: "verybig" });
      await waitFor(() => {
        expect(console.error["mock"].calls.length).toBeGreaterThan(0);
      })
    });
    it("invalid variant", async () => {
      vi.spyOn(console, "error")
      render(GoAButton, { variant: "sweet" });
      await waitFor(() => {
        expect(console.error["mock"].calls.length).toBeGreaterThan(0);
      })
    });
  })

  describe("Margins", () => {
    it(`should add the margin`, async () => {
      const baseElement = render(GoAButton, {
        testid: "button-test",
        mt: "s",
        mr: "m",
        mb: "l",
        ml: "xl",
      });
      const button = await baseElement.findByTestId("button-test");

      expect(button).toBeTruthy();
      expect(button.getAttribute("style")).toContain("margin-top:var(--goa-spacing-s)");
      expect(button.getAttribute("style")).toContain("margin-right:var(--goa-spacing-m)");
      expect(button.getAttribute("style")).toContain("margin-bottom:var(--goa-spacing-l)");
      expect(button.getAttribute("style")).toContain("margin-left:var(--goa-spacing-xl)");
    });
  });
});
