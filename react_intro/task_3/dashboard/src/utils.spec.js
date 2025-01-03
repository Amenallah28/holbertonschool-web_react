import "./utils"
import { getCurrentYear, getFooterCopy, getLatestNotification } from "./utils"

test ("getCurrentYear should return the current year", () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
});

test("getFooterCopy should return 'Holberton School' when argument is true", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });
  
  test("getFooterCopy should return 'Holberton School main dashboard' when argument is false", () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });
  
  test("getLatestNotification should return the correct notification string", () => {
    const expectedString = "<strong>Urgent requirement</strong> - complete by EOD";
    expect(getLatestNotification()).toBe(expectedString);
  });
  