import { render, cleanup, fireEvent } from '@testing-library/svelte';
import { afterEach, expect, describe, it } from 'vitest';
import FocusTrapTestComponent from './FocusTrapTestComponent.svelte';

afterEach(cleanup);

// This test is blocked due to JEST handling slot elements differently than web browser
// For details, please refer https://goa-dio.atlassian.net/browse/DDIDS-704
describe.skip('Focus Trap Component', () => {

  it("Trap the tab key", async () => {
    const el = render(FocusTrapTestComponent);
    fireEvent.keyUp(el.container.getElementsByClassName("email")[0], { key: 'Tab', keyCode: 9 });
    const focusedEl =  el.container?.getElementsByClassName("email")[0]    
    expect(document.activeElement).toBe(focusedEl);
  });

});
