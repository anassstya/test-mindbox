import { render, fireEvent } from '@testing-library/react';
import InputTask from "../src/components/InputTask";
import React from "react";

describe('InputTask Component', () => {
  it('should render correctly', () => {
    const { getByPlaceholderText, getByRole } = render(<InputTask addTask={jest.fn()} />);
    expect(getByPlaceholderText("What needs to be done?")).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
  });

  it('should call addTask with correct task on submit', () => {
    const addTaskMock = jest.fn();
    const { getByPlaceholderText, getByRole } = render(
        <InputTask addTask={addTaskMock} />
    );

    fireEvent.change(getByPlaceholderText('What needs to be done?'), { target: { value: 'Test Task' } });
    fireEvent.click(getByRole('button'));

    expect(addTaskMock).toHaveBeenCalledWith('Test Task');
  });

  it('should not call addTask if input is empty', () => {
    const addTaskMock = jest.fn();
    const { getByRole } = render(<InputTask addTask={addTaskMock} />);

    fireEvent.click(getByRole('button'));
    expect(addTaskMock).not.toHaveBeenCalled();
  });
});