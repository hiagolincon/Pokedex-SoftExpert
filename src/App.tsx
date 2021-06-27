import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Routes } from './routes/Routes'

import GlobalStyle from './styles/global'

export const App = () => {
  const queryClient = new QueryClient()

  return (
    <Router>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </Router>
  )
}
