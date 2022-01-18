import React from 'react';
import { render, screen } from '@testing-library/react';
import PCBListElement from '.';

test('renders list element with 1 upvote', () => {
  render(<PCBListElement 
    upvotes={1} 
    voted={0}
    username={"tester"}
    str={"testImage"}
    name={"TestImage"}
    counter={123}
    last_seen={"2022-01-08T22:08:20"}
    fav={false}
    hidden={false} 
    animation={true}/>);
  
  expect(screen.getByText(/tester/)).toBeInTheDocument();
  expect(screen.getByText(/TestImage/)).toBeInTheDocument();
  expect(screen.getByText(/2022-01-08T22:08:20/)).toBeInTheDocument();

});

test('renders loged-in list element with 1 upvote', () => {
    render(<PCBListElement 
      upvotes={1} 
      voted={1}
      username={"tester"}
      str={"testImage"}
      name={"TestImage"}
      counter={123}
      last_seen={"2022-01-08T22:08:20"}
      fav={true}
      hidden={false} 
      animation={true}/>);
    
    expect(screen.getByText(/tester/)).toBeInTheDocument();
    expect(screen.getByText(/TestImage/)).toBeInTheDocument();
    expect(screen.getByText(/2022-01-08T22:08:20/)).toBeInTheDocument();
  
  });
  