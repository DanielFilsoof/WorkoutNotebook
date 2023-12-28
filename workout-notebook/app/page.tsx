/* Components */
import { APP_NAME } from '@/constants'
import { Counter } from './components/Counter/Counter'

export default function IndexPage() {
  return <Counter />
}

export const metadata = {
  title: `🏋️ ${APP_NAME}`,
  name: 'viewport',
  content: 'initial-scale=1',
  width: 'device-width'
}
