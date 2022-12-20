import { render } from '@testing-library/svelte';
import { expect, describe, it } from 'vitest';
import GoAMicrositeHeader from './MicrositeHeader.svelte'

describe('GoAMicrositeHeader', () => {

  it('should render with version', async () => {
    const { queryByTestId } = render(GoAMicrositeHeader, { type: "alpha", version: "1.2.3" });
    const type = queryByTestId('type');
    const version = queryByTestId('version');

    expect(type.innerHTML).toContain("Alpha");
    expect(version.innerHTML).toContain("1.2.3");
  });

  it('should render without a version', async () => {
    const { queryByTestId } = render(GoAMicrositeHeader, { type: "alpha" });
    const type = queryByTestId('type');
    const version = queryByTestId('version');

    expect(type.innerHTML).toContain("Alpha");
    expect(version).toBeNull();
  });

  it(`should render version number`, async () => {
    const { queryByTestId } = render(GoAMicrositeHeader, { type: 'alpha', version: "1.2.3" });
    const version = queryByTestId('version');

    expect(version.innerHTML).toContain("1.2.3");
  });

  ['Alpha', 'Beta'].forEach(type => {
    it(`should show the type for ${type}`, async () => {
      const { queryByTestId } = render(GoAMicrositeHeader, { type: type.toLowerCase() });
      const version = queryByTestId('type');

      expect(version.innerHTML).toContain(type);
    });
  });

  it(`should not show the type for live`, async () => {
    const { queryByTestId } = render(GoAMicrositeHeader, { type: 'live' });
    const version = queryByTestId('type');

    expect(version.innerHTML).not.toContain('live');
  });

  it(`should show a feedback url if provided`, async () => {
    const { queryByTestId } = render(GoAMicrositeHeader, { type: 'alpha', feedbackurl: 'http://example.com' });
    const feedback = queryByTestId('feedback');

    expect(feedback.innerHTML).toContain('http://example.com');
  });

  it(`should not show a feedback section if one isn't provided`, async () => {
    const { queryByTestId } = render(GoAMicrositeHeader, { type: 'alpha' });
    const feedback = queryByTestId('feedback');

    expect(feedback).toBeNull();
  });
});
