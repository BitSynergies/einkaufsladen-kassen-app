export function playBeep() {
  try {
    const ctx = new AudioContext()
    const beepTone = (freq, start, duration) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.frequency.value = freq
      osc.type = 'sine'
      gain.gain.setValueAtTime(0.3, ctx.currentTime + start)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration)
      osc.start(ctx.currentTime + start)
      osc.stop(ctx.currentTime + start + duration)
    }
    beepTone(880, 0, 0.15)
    beepTone(1100, 0.18, 0.2)
    setTimeout(() => ctx.close(), 1000)
  } catch {
    // AudioContext not available — silently skip
  }
}
