import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import GoAIconButton from './IconButton.svelte'

describe("IconButton", () => {
  describe("Margins", () => {
    it(`should add the margin`, async () => {
      const baseElement = render(GoAIconButton, {
        testid: "iconButton-test",
        icon: "ellipsis",
        mt: "s",
        mr: "m",
        mb: "l",
        ml: "xl",
      });
      const iconButton = await baseElement.findByTestId("iconButton-test");

      expect(iconButton).toBeTruthy();
      expect(iconButton).toHaveStyle("margin-top:var(--goa-spacing-s)");
      expect(iconButton).toHaveStyle("margin-right:var(--goa-spacing-m)");
      expect(iconButton).toHaveStyle("margin-bottom:var(--goa-spacing-l)");
      expect(iconButton).toHaveStyle("margin-left:var(--goa-spacing-xl)");
    });
  });
})
