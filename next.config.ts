// next.config.ts
import type { NextConfig } from 'next'

const nextConfig = (phase: string, { defaultConfig }: any) => {
  output: export,
  if (phase === 'phase-development-server') {
    return {
      // Development-only config options
      basePath: '/blog-test', 
    }
  } 
}

export default nextConfig;