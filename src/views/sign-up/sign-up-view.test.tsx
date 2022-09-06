import { render, screen, cleanup } from '@testing-library/react'
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import SignUpView from './sign-up-view'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));
describe('SignUpView', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(<MemoryRouter><SignUpView /></MemoryRouter>);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });

})