import { Provider } from 'react-redux'
import { rootReducer } from 'store'
import { renderHook as reactRenderHook } from '@testing-library/react-hooks'
import { configureStore } from '@reduxjs/toolkit'

const renderHook = (hook: any) => {
  const preloadedState = {}
  const wrapper = ({ children }: { children: any }) => (
    <Provider store={configureStore({ reducer: rootReducer, preloadedState })}>
      {children}
    </Provider>
  )

  return reactRenderHook(() => hook(), { wrapper })
}

// re-export everything
export * from '@testing-library/react-hooks'
// override renderHook method
export { renderHook }
