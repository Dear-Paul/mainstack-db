import { render, screen } from '@testing-library/react';
import StateHandler from '../components/StateHandler';
import '@testing-library/jest-dom';

describe('StateHandler Component', () => {
  test('renders loading state when isLoading is true', () => {
    render(
      <StateHandler
        isLoading={true}
        isEmpty={false}
        loadingMessage="Loading data..."
      >
        <div>Content</div>
      </StateHandler>
    );

    expect(screen.getByText('Loading data...')).toBeInTheDocument();
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  test('renders empty state when isEmpty is true', () => {
    render(
      <StateHandler
        isLoading={false}
        isEmpty={true}
        emptyMessage="No items found."
      >
        <div>Content</div>
      </StateHandler>
    );

    expect(screen.getByText('No items found.')).toBeInTheDocument();
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  test('renders children when neither isLoading nor isEmpty is true', () => {
    render(
      <StateHandler isLoading={false} isEmpty={false}>
        <div>Content</div>
      </StateHandler>
    );

    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.queryByText('No data available.')).not.toBeInTheDocument();
  });
});
