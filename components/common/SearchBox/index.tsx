import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useContentState } from '../../../hooks/RootStoreProvider'
import GlobalState from '../../../stores/GlobalState'
import Button from '../Button'
import { IconComponent } from '../IconComponent'
import Input from '../Input'

const SearchBox = observer(() => {
  const { header } = useContentState()
  const [value, setValue] = useState('')
  const [isFocus, setFocus] = useState(false)
  const search = (e: any) => {
    e.preventDefault()

    sessionStorage.setItem('search-value', value)
    window.location.href = '/search'
  }

  useEffect(() => {
    if (!GlobalState.isSearchOpen) {
      setValue('')
      document.querySelector('.header.fixed')?.classList.remove('header-bg')

      setFocus(false)
    } else {
      document.querySelector('.header.fixed')?.classList.add('header-bg')
      setTimeout(() => {
        setFocus(true)
      }, 300)
    }
  }, [GlobalState.isSearchOpen])
  return (
    <section
      className={classNames('searchbox', GlobalState.isSearchOpen && 'show')}
    >
      <div className="searchbox__container">
        <form action="/search" onSubmit={(e) => search(e)}>
          <Input
            placeHolder=""
            value={value}
            type="search"
            setValue={setValue}
            isFocus={isFocus}
          />
        </form>
        <Button
          isLink={false}
          action={search}
          classStr="beige button-arrow button-svg p20p40"
          inner={
            <>
              {header.searchbuttonTitle}
              <IconComponent name={'arrow'} />
            </>
          }
        />
      </div>
    </section>
  )
})

export default SearchBox
