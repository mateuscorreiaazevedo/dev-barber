import { RootNavigation } from '@/presentation/navigation'
import { HttpClientProvider } from '@/presentation/providers'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <HttpClientProvider>
      <StatusBar style="light" />
      <RootNavigation />
    </HttpClientProvider>
  )
}
