// next.config.ts
import type { NextConfig } from 'next'

const nextConfig = (phase: string, { defaultConfig }: any) => {
  output: export,
  if (phase === 'phase-development-server') {
    return {
      // Development-only config options 
    }
  } else {
    // Production config options (including 'phase-production-build' and 'phase-export')
    return {
      basePath: '/blog-test', 
      // ... other production configurations ...
    }
  }
}

export default nextConfig;