export function isValidEmail(email: string): boolean {
  // c. Pas d'espace
  if (email.includes(' ')) {
    return false;
  }

  // a. Contient au moins un @
  const atIndex = email.indexOf('@');
  if (atIndex === -1) {
    return false;
  }

  // d. texte avant et après @
  const beforeAt = email.substring(0, atIndex);
  const afterAt = email.substring(atIndex + 1);

  if (beforeAt.length === 0 || afterAt.length === 0) {
    return false;
  }

  // b. contient au moins un "." dans le nom de domaine
  const dotIndex = afterAt.indexOf('.');
  if (dotIndex === -1) {
    return false;
  }

  if (dotIndex === afterAt.length - 1) {
    return false;
  }

  return true;
}
