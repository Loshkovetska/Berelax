import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import HomeState from '../../../../stores/ContentState'
import { ServiceCatType } from '../../../../types'
import { IconComponent } from '../../../common/IconComponent'
import ServiceCat from '../../../common/ServiceCat'

const Services = observer(() => {
  const {
    content: { services, servicesBtn },
  } = useContentState()
  useEffect(() => {
    if (services) {
      const items = document.querySelectorAll('.services__block')
      if (items) {
        items.forEach((i, id) => {
          if (i) {
            ;(i as HTMLElement).style.transitionDelay = `${id * 0.1}s`
          }
        })
      }
    }
  }, [services])

  return (
    <section className="services">
      <div className="services__container">
        {services?.map((se: ServiceCatType, i: number) => (
          <ServiceCat
            se={se}
            key={i}
            servicesBtn={servicesBtn}
            isBig={!i || (i + 1) % 4 == 0}
          />
        ))}
      </div>
    </section>
  )
})

export default Services
