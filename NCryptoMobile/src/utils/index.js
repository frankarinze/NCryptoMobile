export const capitalize = s => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  export function truncateString(string = '', maxLen = 25) {
    return string.length > maxLen ? string.substring(0, maxLen - 3) + '...' : string
}