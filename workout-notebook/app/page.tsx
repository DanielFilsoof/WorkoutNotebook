/* Components */
import { Counter } from './components/Counter/Counter'

export default function IndexPage() {
  return <Counter />
}

export const metadata = {
  title: 'Lift Log',
  name: 'viewport',
  content: 'initial-scale=1',
  width: 'device-width'
}

// <meta name="viewport" content="initial-scale=1, width=device-width" />
