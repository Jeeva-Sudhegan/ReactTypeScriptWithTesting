import { renderHook, act, cleanup } from "@testing-library/react-hooks";
import { useCounter } from "../CustomHooks/useCounter";

describe("useCounter custom hooks", () => {
    afterEach( () => cleanup() )
    test("returns initial value", () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0);
        act( () => {
            result.current.changeCount()
        });
        expect(result.current.count).toBe(1);
    });
})

test("check",() => {
    expect(true).toBe(true);
})