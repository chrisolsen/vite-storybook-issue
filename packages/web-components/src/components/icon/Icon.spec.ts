import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import GoAIcon from './Icon.svelte'

describe("Icon", () => {
  describe("Margins", () => {
    it(`should add the margin`, async () => {
      const baseElement = render(GoAIcon, {
        testid: "icon-test",
        type: "ellipse",
        mt: "s",
        mr: "m",
        mb: "l",
        ml: "xl",
      });
      const icon = await baseElement.findByTestId("icon-test");

      expect(icon).toBeTruthy();
      expect(icon).toHaveStyle("margin-top:var(--goa-spacing-s)");
      expect(icon).toHaveStyle("margin-right:var(--goa-spacing-m)");
      expect(icon).toHaveStyle("margin-bottom:var(--goa-spacing-l)");
      expect(icon).toHaveStyle("margin-left:var(--goa-spacing-xl)");
    });
  });
})
