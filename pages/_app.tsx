import '../styles/index.scss'
import 'locomotive-scroll/src/locomotive-scroll.scss'
import { RootStoreProvider } from '../hooks/RootStoreProvider'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    function get_browser() {
      var ua = navigator.userAgent,
        tem,
        M =
          ua.match(
            /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i,
          ) || []
      if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || []
        return { name: 'IE', version: tem[1] || '' }
      }
      if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR|Edge\/(\d+)/)
        if (tem != null) {
          return { name: 'Opera', version: tem[1] }
        }
      }
      M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?']
      if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1])
      }
      return {
        name: M[0],
        version: M[1],
      }
    }
    if (
      (get_browser().version <= '83' && get_browser().name == 'Chrome') ||
      (get_browser().version <= '14' && get_browser().name == 'Safari') ||
      (get_browser().version <= '62' && get_browser().name == 'Firefox') ||
      (get_browser().version <= '69' && get_browser().name == 'Opera')
    ) {
      document.querySelector('body')?.classList.add('old-device')
    }
  }, [])

  return (
    <RootStoreProvider hydrationData={pageProps?.hydrationData}>
      <Component {...pageProps} />
    </RootStoreProvider>
  )
}

export default MyApp
