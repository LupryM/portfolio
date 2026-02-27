"use client";

import dynamic from "next/dynamic";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground").then((mod) => mod.ParticleBackground),
  { ssr: false }
);

export default function ParticleBackgroundWrapper() {
  return <ParticleBackground />;
}
