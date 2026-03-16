import { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

/**
 * VideoPlayer — estilo premium com glow e controles customizados.
 *
 * Props:
 *  - src: caminho de vídeo local (ex: "/videos/video.mp4")
 *  - className: classes extras no container
 *  - variant: "dark" (padrão) ou "light" — ajusta borda/sombra
 */
export default function VideoPlayer({ src, className = '', variant = 'dark' }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(true)
  const [progress, setProgress] = useState(0)
  const hideTimer = useRef(null)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setIsPlaying(true)
      if (v.muted) {
        v.muted = false
        setIsMuted(false)
      }
    } else {
      v.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setIsMuted(v.muted)
  }

  const handleTimeUpdate = () => {
    const v = videoRef.current
    if (!v || !v.duration) return
    setProgress((v.currentTime / v.duration) * 100)
  }

  const handleMouseMove = () => {
    setShowControls(true)
    clearTimeout(hideTimer.current)
    if (isPlaying) {
      hideTimer.current = setTimeout(() => setShowControls(false), 2500)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setShowControls(true)
  }

  const borderClass = variant === 'light'
    ? 'border-[var(--color-cinza-200)] shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
    : 'border-white/10 shadow-[0_0_60px_rgba(46,222,240,0.12)]'

  const glowClass = variant === 'light'
    ? 'from-[var(--color-accent)]/10 via-transparent to-[var(--color-accent)]/5'
    : 'from-[var(--color-cyan)]/20 via-transparent to-[var(--color-cyan)]/10'

  return (
    <div
      className={`group relative mx-auto w-full max-w-[320px] cursor-pointer overflow-hidden rounded-2xl border sm:max-w-[380px] md:max-w-[406px] ${borderClass} ${className}`}
      onClick={togglePlay}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <div className={`pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-b ${glowClass}`} aria-hidden />

      <video
        ref={videoRef}
        src={src}
        className="relative z-10 block w-full"
        playsInline
        muted
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      {!isPlaying && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 transition-opacity duration-300">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-cyan)]/90 shadow-[0_0_40px_rgba(46,222,240,0.5)] transition-transform duration-300 hover:scale-110 sm:h-24 sm:w-24">
            <Play className="ml-1 h-8 w-8 text-[var(--color-charcoal)] sm:h-10 sm:w-10" fill="currentColor" />
          </div>
        </div>
      )}

      <div
        className={`absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/80 to-transparent px-4 pt-8 pb-3 transition-opacity duration-300 ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mb-3 h-1 w-full overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-[var(--color-cyan)] transition-[width] duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={togglePlay}
            className="flex items-center gap-2 bg-transparent p-0 text-sm font-medium text-white/80"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" fill="currentColor" />}
            {isPlaying ? 'Pausar' : 'Assistir'}
          </button>

          <button
            type="button"
            onClick={toggleMute}
            className="bg-transparent p-0 text-white/80 transition-colors hover:text-white"
            aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}
