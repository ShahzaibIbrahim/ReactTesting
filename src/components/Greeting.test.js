import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

 test('Renders Hello World Greeting', () => {
    // Arrange 
    render(<Greeting />);

    // Act 
    // nothing 


    // assert 
    const linkElement = screen.getByText('hello world', { exact: false} );
    expect(linkElement).toBeInTheDocument();
  });