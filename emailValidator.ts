export function isValidEmail(email: string): boolean {

    if (email.includes(" ")) {
    return false;
  }
  return true;
}
