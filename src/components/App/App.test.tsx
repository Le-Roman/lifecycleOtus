import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import axios from 'axios'


test('renders App component', async () => {
  const { findByTestId } = render(<App />)
  const posts = await findByTestId('posts')
  expect(posts).toBeInTheDocument()
})
