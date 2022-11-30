import { Heading } from './index';
import { render as renderer, screen } from '@testing-library/react';

describe('Heading', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });

  it('renders the Heading component with default props', () => {
    const children = 'My title';
    renderer(<Heading>{children}</Heading>);
    expect(screen.getByText(children)).toMatchInlineSnapshot(`
      <h1>
        My title
      </h1>
    `);
  });

  it('renders the Heading component with defined tag', () => {
    const children = 'My title';
    renderer(<Heading as="h2">{children}</Heading>);
    expect(screen.getByText(children)).toMatchInlineSnapshot(`
      <h2>
        My title
      </h2>
    `);
  });

  it('renders the Heading component with margin styles', () => {
    const children = 'My title';
    renderer(<Heading mx="2">{children}</Heading>);
    expect(screen.getByText(children)).toMatchInlineSnapshot(`
      <h1
        style="margin-left: 2px; margin-right: 2px;"
      >
        My title
      </h1>
    `);
  });

  it('renders the Heading component with custom styles', () => {
    const children = 'My title';
    renderer(
      <Heading mx="2" style={{ border: '1px solid #000' }}>
        {children}
      </Heading>,
    );
    expect(screen.getByText(children)).toMatchInlineSnapshot(`
      <h1
        style="margin-left: 2px; margin-right: 2px; border: 1px solid #000;"
      >
        My title
      </h1>
    `);
  });
});
