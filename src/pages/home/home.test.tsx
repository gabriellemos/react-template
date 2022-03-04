import { render, screen } from '@testing-library/react'

import Home from 'pages/home'

describe('Sample test', () => {
  it('renders a welcoming message', () => {
    render(<Home />)

    expect(screen.getByRole('heading')).toHaveTextContent('Hello World')
  })
})
