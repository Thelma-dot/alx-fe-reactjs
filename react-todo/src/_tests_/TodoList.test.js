import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

// ✅ Test 1: Check if component renders with initial todos
test("renders TodoList with initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Practice Jest")).toBeInTheDocument();
});

// ✅ Test 2: Check if a new todo can be added
test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

// ✅ Test 3: Check if a todo can be toggled
test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");

  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

// ✅ Test 4: Check if a todo can be deleted
test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getByText("Delete");

  fireEvent.click(deleteButton);
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
