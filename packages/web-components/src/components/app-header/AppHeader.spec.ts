import { render } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import GoAAppHeader from './AppHeader.svelte'

describe('GoAAppHeader', () => {
  it('should render', async () => {
    const baseElement = render(GoAAppHeader, { testid: "app-header-test", url: "www.test.com", heading: 'Complete' });
    const appHeader = await baseElement.findByTestId('app-header-test');
    const link = appHeader.querySelector("a");

    expect(appHeader).toBeTruthy();
    expect(link).toBeTruthy();
    expect(link.getAttribute("href")).toBe("www.test.com");
    expect(appHeader.innerHTML).toContain("Complete")
  });
});
