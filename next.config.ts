// next.config.ts
import type { NextConfig } from 'next'

const nextConfig = (phase: string, { defaultConfig }: any) => {
  if (phase === 'phase-development-server') {
    return {
      // Development-only config options 
      output: "export",
    }
  } else {
    // Production config options (including 'phase-production-build' and 'phase-export')
    return {
      basePath: '/blog-test',
      output: "export",
      // ... other production configurations ...
    }
  }
}

export default nextConfig;