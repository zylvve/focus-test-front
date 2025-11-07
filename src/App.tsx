import { QueryClient } from "@tanstack/react-query"
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister"
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client"
import MainArea from "./components/MainArea"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, 
      refetchOnWindowFocus: true,
    },
  },
})

const persister = createAsyncStoragePersister({
  storage: window.localStorage,
})

function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <MainArea/>
    </PersistQueryClientProvider>
  )
}

export default App
