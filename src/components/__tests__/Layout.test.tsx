import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from '../Layout';

describe('Layout Component', () => {
  it('renders header, sidebar and footer', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    expect(screen.getByText('AI Agent Architect')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Agent Management')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByText(/© \d{4} AI Agent Architect/)).toBeInTheDocument();
  });
});