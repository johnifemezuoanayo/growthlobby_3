import type { Metadata } from "next";

export const SITE_NAME = "Growthlobby";

export const DEFAULT_DESCRIPTION =
  "We design high-converting websites that help businesses build trust, generate leads, and grow online.";

export function createPageMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  return { title, description };
}
