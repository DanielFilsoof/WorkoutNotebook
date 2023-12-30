/* Components */
import { APP_NAME } from '@/constants'
import LogsOverview from './components/LogsOverview/LogsOverview'

export default function IndexPage() {
  return <LogsOverview />
}

export const metadata = {
  title: `🏋️ ${APP_NAME}`,
  name: 'viewport',
  content: 'initial-scale=1',
  width: 'device-width'
}
