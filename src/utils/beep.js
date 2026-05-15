function playTones(ctx, tones) {
  tones.forEach(([freq, start, duration]) => {
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
  })
}

function createAndPlay(tones) {
  try {
    const ctx = new AudioContext()
    const play = () => { playTones(ctx, tones); setTimeout(() => ctx.close(), 1000) }
    if (ctx.state === 'suspended') {
      ctx.resume().then(play)
    } else {
      play()
    }
  } catch {
    // AudioContext not available — silently skip
  }
}

export function playBeep() {
  createAndPlay([[880, 0, 0.15], [1100, 0.18, 0.2]])
}

export function playClick() {
  createAndPlay([[660, 0, 0.08]])
}
