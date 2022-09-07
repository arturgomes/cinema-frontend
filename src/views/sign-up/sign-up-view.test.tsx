import { render, screen, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

import SignUpView from './sign-up-view'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));
describe('SignUpView', () => {
  afterEach(cleanup);
  it('expects to find an input for firstName', async () => {
    const props: any = {}
    await render(<MemoryRouter><SignUpView {...props} /></MemoryRouter>)
    const input = await screen.findByRole('input-firstName')
    expect(input).toBeValid()
  })


})