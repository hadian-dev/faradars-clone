import { useIntl } from 'react-intl'

export const useTranslation = () => {
  const { formatMessage } = useIntl()

  return { t: (key: string) => formatMessage({ id: key }) }
}
