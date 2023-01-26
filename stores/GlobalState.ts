import { observable, runInAction } from 'mobx'

const GlobalState: any = observable({
  locoScroll: null,
  currentLocale: {
    country: 'Germany',
    code: 'de',
  },
  isMenuOpen: false,
  menuTab: 0,
  footer: null,
  menu: null,
  cursorRefs: Array(),
  isCountryOpen: false,
  isTimePop: false,
  cardTime: null,
  isCalendar: false,
  isSmallOpen: false,
  isSearchOpen: false,
  isRetailerOpen: false,
  isTouch: false,
})

export default GlobalState

export const changeRetailerState = () => {
  runInAction(() => {
    GlobalState.isRetailerOpen = !GlobalState.isRetailerOpen
  })
}

export const changeSearchState = () => {
  runInAction(() => {
    GlobalState.isSearchOpen = !GlobalState.isSearchOpen
  })
}

export const changeSmallPopState = () => {
  runInAction(() => {
    GlobalState.isSmallOpen = !GlobalState.isSmallOpen
  })
}

export const changeMenuState = () => {
  runInAction(() => {
    GlobalState.isMenuOpen = !GlobalState.isMenuOpen
  })
}
export const changeCountryState = () => {
  runInAction(() => {
    GlobalState.isCountryOpen = !GlobalState.isCountryOpen
  })
}

export const changeTimeState = (item: any) => {
  runInAction(() => {
    GlobalState.isTimePop = !GlobalState.isTimePop
    GlobalState.cardTime = item
  })
}

export const changeCalendarState = () => {
  runInAction(() => {
    GlobalState.isCalendar = !GlobalState.isCalendar
  })
}
