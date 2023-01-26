import * as React from 'react'

export const IconComponent = ({
  name,
  ...rest
}: {
  name: any
  className?: any
  onClick?: any
}) => {
  const ImportedIconRef = React.useRef()
  const [loading, setLoading] = React.useState(true)
  const importIcon = React.useCallback(async () => {
    try {
      ImportedIconRef.current = (
        await import(`../../../assets/${name}.svg`)
      ).ReactComponent
    } finally {
      setLoading(false)
    }
  }, [name])
  React.useEffect(() => {
    setLoading(true)
    importIcon()
    return () => {
      setLoading(false)
    }
  }, [importIcon, name])
  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef
    return React.createElement(ImportedIcon, {
      ...rest,
    })
  }
  return null
}
