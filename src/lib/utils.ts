import { twMerge } from "tailwind-merge";

export type ClassValue = string | number | boolean | null | undefined;

/**
 * 組合 `className` 用：略過 `null`／`false`／`undefined`，再用 tailwind-merge 合併。
 * 多個互斥的 Tailwind class（例如同時出現 `mt-4` 與 `mt-6`）會只保留應生效的那一個。
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(inputs.filter(Boolean).join(" "));
}
