// Map ASCII digits 0–9 to Gurmukhi numerals ੦–੯ (other characters pass through).
export function toGurmukhi(str) {
    const d = ['੦', '੧', '੨', '੩', '੪', '੫', '੬', '੭', '੮', '੯'];
    return String(str).replace(/[0-9]/g, c => d[+c]);
}
