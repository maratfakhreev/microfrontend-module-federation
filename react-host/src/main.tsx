import { lazy, useRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router'

// Lazy Load Vue Microfrontend
const MicrofrontendVue = lazy(async () => {
  const vueApp: any = await import('microfrontendVue/VueApp')

  return {
    default: props => <VueWrapper mount={vueApp.mount} navigate={vueApp.navigate} {...props} />,
  }
})

// Vue Wrapper Component
const VueWrapper = ({
  mount,
  navigate,
}: {
  mount: (element: HTMLElement) => void
  navigate: (path: string) => void
}) => {
  const ref = useRef(null)
  // Detect React Router URL changes
  const location = useLocation()

  useEffect(() => {
    if (ref.current) {
      mount(ref.current)
    }
  }, [mount])

  useEffect(() => {
    if (navigate) {
      // Notify Vue Router when React Router changes
      navigate(location.pathname)
    }
  }, [navigate, location.pathname])

  return <div ref={ref}></div>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  // Catch vue routes and render Vue Microfrontend
  { path: '*', element: <MicrofrontendVue /> },
])

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
