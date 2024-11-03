import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatEther(wei: string) {
  return (parseInt(wei) / Math.pow(10, 18)).toFixed(4)
}