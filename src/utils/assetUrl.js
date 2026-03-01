const cdnBase = (import.meta.env.VITE_ASSET_CDN_URL || '').replace(/\/$/, '')

export function assetUrl(path) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return cdnBase ? `${cdnBase}${normalizedPath}` : normalizedPath
}
