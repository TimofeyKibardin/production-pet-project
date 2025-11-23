import {classNames} from "./classNames";

describe("className", () => {
    test("with only first param", () => {
        expect(classNames("someClass")).toBe("someClass");
    });

    test("with additional class", () => {
        const expected = "someClass class1 class2 hovered scrollable";
        expect(classNames(
            "someClass",
            {hovered: true, scrollable: true},
            ["class1", "class2"]
        )).toBe(expected);
    });

    test("with additional class and 1 false mod", () => {
        const expected = "someClass class1 class2 hovered";
        expect(classNames(
            "someClass",
            {hovered: true, scrollable: undefined},
            ["class1", "class2"]
        )).toBe(expected);
    });
});