"use client";

import Script from "next/script";

function extractVideoId(url: string) {
  const match = url.match(/video\/(\d+)/);
  return match?.[1];
}

export default function TikTokEmbed({ url }: { url: string }) {
  const videoId = extractVideoId(url);
  if (!videoId) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-paper">
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id={videoId}
        style={{ maxWidth: "100%", minWidth: 260 }}
      >
        <section />
      </blockquote>
      <Script async src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </div>
  );
}
