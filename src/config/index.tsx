import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import queryClient from 'config/react-query'

type Props = {
  children: React.ReactNode
}

function AppConfiguration({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default AppConfiguration
