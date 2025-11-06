import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import TaskList from "./components/TaskList/TaskList"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TaskList/>
    </QueryClientProvider>
  )
}

export default App
