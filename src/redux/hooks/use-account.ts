import { useAppSelector } from '../store'

export const useAccount = () => {
  const account = useAppSelector((state) => state.account)

  return { account }
}
