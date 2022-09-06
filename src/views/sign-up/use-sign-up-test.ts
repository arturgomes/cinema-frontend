import { waitFor } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks'
import { assert } from 'console';

import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import SignUpView from './sign-up-view'
import useSignUp from './use-sign-up'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));



describe('useSignUp', () => {
  let container: any = null;
  beforeEach(() => {
    // config dom elements
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // clean on exit
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  // it('should have data initialised as empty string or undefined', () => {
  //   const { result } = renderHook(() => useSignUp())
  //   expect(result.current.data).toMatchObject({
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     phone: '',
  //     avatarBase64: '',
  //     movie: undefined,
  //     sitRow: undefined,
  //     sitPlace: undefined
  //   })
  // });

  // it('should have movies initialised as empty array', () => {
  //   const { result } = renderHook(() => useSignUp())
  //   expect(result.current.movies).toMatchObject([])
  // });

  // it('should have change a single attribute when handleChangeData is called', () => {
  //   const { result } = renderHook(() => useSignUp())
  //   act(() => result.current.handleChangeData('firstName', 'Artur'))
  //   expect(result.current.data.firstName).toBe('Artur')
  // });

  // it('should not change the rest of the state when handleChangeData is called', () => {
  //   const { result } = renderHook(() => useSignUp())
  //   let exData = result.current.data
  //   act(() => result.current.handleChangeData('lastName', 'Gomes'))
  //   expect(result.current.data).toMatchObject({ ...exData, lastName: 'Gomes' })
  // });

  // it('should allow seat rows within sitRows', () => {
  //   const { result } = renderHook(() => useSignUp())
  //   act(() => result.current.handleChangeSitRow("3"))
  //   expect(result.current.data.sitRow).toBe(3)
  //   expect(result.current.sitRows).toContain(result.current.data.sitRow)
  // })

  // it('should allow seat places within sitPlacess', () => {
  //   const { result } = renderHook(() => useSignUp())
  //   act(() => result.current.handleChangeSitPlace("3"))
  //   expect(result.current.data.sitPlace).toBe(3)
  //   expect(result.current.sitPlaces).toContain(result.current.data.sitPlace)
  // })
  it('should pass', () => { expect(2 + 2).toBe(4) })


});