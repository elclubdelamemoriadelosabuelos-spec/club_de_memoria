import type { InstagramPost } from "./InstagramFeed.types"
import { INSTAGRAM } from "@/lib/constants"

/**
 * Instagram account URL
 */
export const INSTAGRAM_URL = INSTAGRAM.url

/**
 * Instagram posts to display
 */
export const INSTAGRAM_POSTS: InstagramPost[] = INSTAGRAM.posts

/**
 * Generate embed URL for Instagram post
 */
export function getEmbedUrl(postUrl: string): string {
  return `${postUrl}embed/`
}
