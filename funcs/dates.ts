export const getDate = (date: string) => {
  const dt = new Date(date)
  return dt.toLocaleDateString('en', {
    dateStyle: 'long',
  })
}

export const getDateShortMonth = (date: string) => {
  const dt = new Date(date)
  return dt.toLocaleDateString('en', {
    dateStyle: 'medium',
  })
}
