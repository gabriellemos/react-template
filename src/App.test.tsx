import { render, screen } from '@testing-library/react'

import App from 'App'

describe('Sample test', () => {
  it('renders a welcoming message', () => {
    render(<App />)

    expect(screen.getByRole('heading')).toHaveTextContent('Hello World')
  })
})
