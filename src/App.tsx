import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()

  return (
    <div className='App'>
      <h1>{t('home.greetings')}</h1>
    </div>
  )
}

export default App
