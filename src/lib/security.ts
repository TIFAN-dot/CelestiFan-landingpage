import { z } from "zod";

/**
 * Input Sanitization Utility
 * Strips potential HTML/script injections and trims excess whitespace.
 */
export const sanitizeInput = (input: string, maxLength: number = 255): string => {
  if (typeof input !== "string") return "";
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, ""); // Strip < and > to prevent basic HTML injection
};

/**
 * Zod Schema for Waitlist Submissions
 */
export const waitlistSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(100, { message: "Name must be less than 100 characters." })
    .transform((val) => sanitizeInput(val, 100)),
  email: z
    .string()
    .email({ message: "Invalid email address format." })
    .max(150, { message: "Email must be less than 150 characters." })
    .transform((val) => sanitizeInput(val.toLowerCase(), 150)),
  userType: z
    .enum(["artist", "fan", "general", ""])
    .optional()
    .transform((val) => sanitizeInput(val || "general", 20)),
  referredBy: z
    .string()
    .optional()
    .transform((val) => sanitizeInput(val || "", 50)),
});

/**
 * Zod Schema for Ambassador Submissions
 */
export const ambassadorSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(100, { message: "Name must be less than 100 characters." })
    .transform((val) => sanitizeInput(val, 100)),
  email: z
    .string()
    .email({ message: "Invalid email address format." })
    .max(150, { message: "Email must be less than 150 characters." })
    .transform((val) => sanitizeInput(val.toLowerCase(), 150)),
  tier: z
    .string()
    .min(1)
    .max(50)
    .transform((val) => sanitizeInput(val, 50)),
  userType: z
    .string()
    .min(1)
    .max(50)
    .transform((val) => sanitizeInput(val, 50)),
  referralCode: z
    .string()
    .max(50)
    .transform((val) => sanitizeInput(val, 50)),
  referredBy: z
    .string()
    .optional()
    .transform((val) => sanitizeInput(val || "", 50)),
});

/**
 * Client-Side Rate Limiter
 * Prevents rapid form submissions by IP/Session (max 5 requests per 1 minute per action key)
 */
const submissionTimestamps: Record<string, number[]> = {};

export const checkRateLimit = (actionKey: string, maxLimit = 5, windowMs = 60000): boolean => {
  const now = Date.now();
  if (!submissionTimestamps[actionKey]) {
    submissionTimestamps[actionKey] = [];
  }

  // Filter timestamps within window
  submissionTimestamps[actionKey] = submissionTimestamps[actionKey].filter(
    (timestamp) => now - timestamp < windowMs
  );

  if (submissionTimestamps[actionKey].length >= maxLimit) {
    return false; // Rate limit exceeded
  }

  submissionTimestamps[actionKey].push(now);
  return true; // Allowed
};

/**
 * Secure Config for Endpoint Webhook
 */
export const getSecureScriptUrl = (): string => {
  const envUrl = import.meta.env.VITE_SCRIPT_URL;
  if (envUrl && typeof envUrl === "string" && envUrl.startsWith("https://")) {
    return envUrl;
  }
  // Secure fallback
  return "https://script.google.com/macros/s/AKfycbzHtjBUTZrE0ML9SV0XvyOzAYFIOF3YXyXX3v0fJizvK0IgikyqF2dGrRUbw1nFNSyB/exec";
};
