import { ThemeProvider } from 'styled-components'

import { Header } from './components/Header'
import { Information } from './components/Information'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { List } from './components/List'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Information />
      <List />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
