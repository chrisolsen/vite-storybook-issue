import { calculateMargin } from "./styling";
import { expect, it, describe } from 'vitest';

describe("Styling", () => {
  it("should create margins", () => {
    const val = calculateMargin("s", "m", "l", "xl");

    expect(val).toContain("margin-top:var(--goa-spacing-s);");
    expect(val).toContain("margin-right:var(--goa-spacing-m);");
    expect(val).toContain("margin-bottom:var(--goa-spacing-l);");
    expect(val).toContain("margin-left:var(--goa-spacing-xl);");
  });

  it("should create one margin", () => {
    const val = calculateMargin("s", null, null, null);

    expect(val).toContain("margin-top:var(--goa-spacing-s);");
    expect(val).not.toContain("margin-right");
    expect(val).not.toContain("margin-bottom");
    expect(val).not.toContain("margin-left");
  });

  it("should not create margins if not set", () => {
    const val = calculateMargin(null, null, null, null);

    expect(val).not.toContain("margin-top");
    expect(val).not.toContain("margin-right");
    expect(val).not.toContain("margin-bottom");
    expect(val).not.toContain("margin-left");
  });
});
