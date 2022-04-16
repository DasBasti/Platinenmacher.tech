import React from 'react';
import { render, screen } from '@testing-library/react';
import LED from '.';

test('LED with data but old last_seen', () => {
    render(<LED id={2} owner="Tester" animation="test" color={16711680} last_seen="2022-03-09 21:55:59" highlight={false} />);
    const element = screen.getByTitle(/Tester/)
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("led");
    expect(element).toHaveStyle("background-color: rgb(0,0,0);");
});

test('LED with data with current last_seen', () => {
    render(<LED id={2} owner="Tester" animation="test" color={16711680} last_seen={new Date().toUTCString()} highlight={false} />);
    const element = screen.getByTitle(/Tester/)
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("led");
    expect(element).toHaveStyle("background-color: rgb(255,0,0);");
});

test('LED highlighted with data with current last_seen', () => {
    render(<LED id={2} owner="Tester" animation="test" color={16711680} last_seen={new Date().toUTCString()} highlight={true} />);
    const element = screen.getByTitle(/Tester/)
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("alerts-border");
    expect(element).toHaveStyle("background-color: rgb(255,0,0);");
});

test('LED without owner with current last_seen', () => {
    render(<LED id={2} owner={null} animation="test" color={16711680} last_seen={new Date().toUTCString()} highlight={false} />);
    const element = screen.getByTitle(/zuletzt/);
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("led");
    expect(element).toHaveStyle("background-color: rgb(0,0,0);");
});

test('LED without owner without date', () => {
    render(<LED id={2} owner={null} animation="test" color={16711680} last_seen="" highlight={false} />);
    const element = screen.getByTitle(/zuletzt/);
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("led");
    expect(element).toHaveStyle("background-color: rgb(0,0,0);");
});

test('LED without owner without color', () => {
    render(<LED id={2} owner={null} animation="test" color="" last_seen="" highlight={false} />);
    const element = screen.getByTitle(/zuletzt/);
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("led");
    expect(element).toHaveStyle("background-color: rgb(0,0,0);");
});
