import { render, cleanup, waitFor } from '@testing-library/svelte'
import PageBlock from './PageBlock.svelte'
import { afterEach, expect, vi, it, describe } from 'vitest'

afterEach(cleanup);

describe('PageBlock', () => {
  it("informs user of invalid width", async () => {
    const mock = vi.spyOn(console, "error")
    expect(mock).not.toHaveBeenCalled()
    render(PageBlock, { width: "200miles" })

    await waitFor(() => {
      expect(console.error["mock"].calls.length).toBeGreaterThan(0);
    })

   mock.mockRestore();
  })
})
