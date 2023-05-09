import '../styles/index.scss'
import 'locomotive-scroll/src/locomotive-scroll.scss'
import { RootStoreProvider } from '../hooks/RootStoreProvider'
import { useEffect, useRef } from 'react'
import { changeLocale } from '../stores/GlobalState'
import Script from 'next/script'
import TagManager from 'react-gtm-module';
import Smartlook from 'smartlook-client'

function MyApp({ Component, pageProps }: any) {
  const ref = useRef<boolean>(false);
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

  useEffect(() => {
    if (ref.current) return;
      TagManager.initialize({ gtmId: 'G-CEP85Y6LPT' });
      Smartlook.init('c6979b19e937847ec821f16f18ccb70377e1355e', {
        region:'eu'
      });

    ref.current = true
  },[])

  useEffect(() => {
    let vh = window.innerHeight * 0.01
    const s = document.querySelector('html')
    if (!s) return
    ;(s as any).style.setProperty('--viewport-height', `${vh}px`)

    window.addEventListener('resize', function (e) {
      let vh = window.innerHeight * 0.01
      ;(s as any).style.setProperty('--viewport-height', `${vh}px`)
    })
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('locale')) {
      const locale = JSON.parse(sessionStorage.getItem('locale')!)
      if (locale.country) {
        changeLocale()
      }
    }
  }, [])

  return (
    <RootStoreProvider hydrationData={pageProps?.hydrationData}>
      <Component {...pageProps} />
    </RootStoreProvider>
  )
}

export default MyApp
