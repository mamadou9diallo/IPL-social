import { isValidEmail } from "./emailValidator";

describe("Email validation", () => {

  test("valid email", () => {
    expect(isValidEmail("test@mail.com")).toBe(true);
  });

  test("invalid email without @", () => {
    expect(isValidEmail("testmail.com")).toBe(false);
  });

  test("invalid email without dot in domain", () => {
    expect(isValidEmail("test@mailcom")).toBe(false);
  });

  test("invalid email with dot as last character", () => {
    expect(isValidEmail("test@mail.")).toBe(false);
  });

  test("invalid email with space", () => {
    expect(isValidEmail("test @mail.com")).toBe(false);
  });

  test("invalid email without text before @", () => {
    expect(isValidEmail("@mail.com")).toBe(false);
  });

  test("invalid email without text after @", () => {
    expect(isValidEmail("test@")).toBe(false);
  });

});
