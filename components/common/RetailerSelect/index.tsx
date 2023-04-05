import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import useClickOutSide from '../../../hooks/ClickOutSide'
import { useWindowDimensions } from '../../../hooks/getWindowDimensions'
import { retailerSearch } from '../../../stores/ContentState'
import GlobalState from '../../../stores/GlobalState'
import Button from '../Button'
import { IconComponent } from '../IconComponent'

const RetailerSelect = observer(
  ({
    placeholder,
    getValue,
  }: {
    placeholder: string
    getValue: (value: any) => void
  }) => {
    const [userLocation, setLocation] = useState<any>(null)
    const ref = useRef<HTMLElement | null>(null)
    const outside = useClickOutSide(ref)
    const [val, setVal] = useState('')
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState<any>(null)
    const [list, setList] = useState(null)
    const { width, height } = useWindowDimensions()

    useEffect(() => {
      if (outside) {
        setOpen(false)
      }
    }, [outside])

    useEffect(() => {
      if (!open) {
        setList(null)
        GlobalState.locoScroll && GlobalState.locoScroll.start()
      }
    }, [open])

    useEffect(() => {
      if (val?.length && val != selected?.title) {
        retailerSearch(val).then((r) => {
          if (!r.length) {
            setList(r)
            setOpen(false)
            return
          }
          let res = r.map((c: any) => {
            return {
              title: c.post_title,
              text: c.post_content,
              id: c.ID,
            }
          })
          if (res.length) {
            setList(res)
            setOpen(true)
          }
        })
      } else {
        setOpen(false)
        setList(null)

        if (!val.length) {
          setSelected(null)
          getValue(null)
        }
      }
    }, [val])

    return (
      <section className={classNames('loc-select', open && 'open')} ref={ref}>
        <div className="loc-select__top">
          <input
            value={val}
            placeholder={placeholder}
            className="loc-select__input"
            onChange={(e) => {
              setVal(e.target.value)
              setSelected(null)
            }}
            autoFocus={open}
          />

          <Button
            inner={
              <>
                <IconComponent name={'Search'} />
              </>
            }
            classStr={classNames('beige button-search', 'search-btn')}
            isLink={false}
            action={() => {
              getValue(selected ? selected : val)
              setOpen(false)
            }}
          />
        </div>
        {list && (
          <div
            className="loc-select__list"
            onScroll={() => {
              GlobalState.locoScroll && GlobalState.locoScroll.stop()
            }}
            onMouseLeave={() =>
              GlobalState.locoScroll && GlobalState.locoScroll.start()
            }
          >
            {list && (
              <>
                {(list as any)
                  ?.sort((a: any, b: any) => a.title.localeCompare(b.title))
                  .map((li: any, id: number) => (
                    <div
                      className="loc-select__subitem"
                      key={id}
                      onClick={() => {
                        setOpen(false)
                        setSelected(li)
                        setVal(li?.title)
                      }}
                    >
                      {li.title}
                    </div>
                  ))}
              </>
            )}
          </div>
        )}
      </section>
    )
  },
)

export default RetailerSelect
