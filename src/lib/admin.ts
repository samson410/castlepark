/**
 * Admin access.
 * Change ADMIN_PASSWORD to your own secret value.
 */
export const ADMIN_PASSWORD = "CastlePark2024!";

const KEY = "cp-admin";

export function isAdminUnlocked() {
  if (typeof window === "undefined") return false;
  return window.sessionStorage.getItem(KEY) === "yes";
}

export function unlockAdmin(password: string) {
  if (password !== ADMIN_PASSWORD) return false;
  window.sessionStorage.setItem(KEY, "yes");
  return true;
}

export function lockAdmin() {
  window.sessionStorage.removeItem(KEY);
}
