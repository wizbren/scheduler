import { renderHook } from "@testing-library/react";
import { act } from "react";
import useVisualMode from "../../hooks/useVisualMode";


test("Initial test", () => {
  expect(true).toBe(true);
});


const FIRST = "FIRST";

test("useVisualMode should initialize with default value", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  expect(result.current.mode).toBe(FIRST);
});


const SECOND = "SECOND";

test("useVisualMode should transition to another mode", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  act(() => result.current.transition(SECOND));

  expect(result.current.mode).toBe(SECOND);
});


const THIRD = "THIRD";

test("useVisualMode should return to previous mode", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  act(() => {
    result.current.transition(SECOND);
    result.current.transition(THIRD, true);
    result.current.back();
  })

  expect(result.current.mode).toBe(SECOND);

  act(() => result.current.back())
  expect(result.current.mode).toBe(FIRST)
});