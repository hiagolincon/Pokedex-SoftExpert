import { fireEvent, render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ListPokemons } from '../../pages/ListPokemons'

const mockFetchNextPage = jest.fn()

jest.mock('src/services/pokemonApi', () => {
  return {
    getAllPokemons: () => ({
      pageParam: '',
      search: '',
    }),
  }
})

jest.mock('react-query', () => {
  return {
    useInfiniteQuery: () => ({
      isLoading: false,
      isFetchingNextPage: false,
      hasNextPage: false,
      fetchNextPage: mockFetchNextPage,
    }),
    QueryClient: jest.fn(),
    QueryClientProvider: ({ children }: { children: React.ReactNode }) =>
      children,
  }
})

describe('ListPokemons', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: jest.fn().mockReturnValue(null),
      unobserve: jest.fn().mockReturnValue(null),
      disconnect: jest.fn().mockReturnValue(null),
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  it('should be able to list pokemons', () => {
    const queryClient = new QueryClient()
    const defaultRender = (component: any) => {
      return render(
        <QueryClientProvider client={queryClient}>
          {component}
        </QueryClientProvider>,
      )
    }

    const { getByPlaceholderText, getByTestId } = defaultRender(
      <ListPokemons />,
    )

    const searchElement = getByPlaceholderText('Busque pokemons')
    const buttonElement = getByTestId('button-load')

    fireEvent.change(searchElement, { target: { value: 'pikashu' } })
    fireEvent.click(buttonElement)
  })
})
