// Small generators that produce dot-matrix "bitmaps" as [col, row] cells.

const key = (c, r) => `${c},${r}`
const uniq = (cells) => {
  const seen = new Set()
  return cells.filter(([c, r]) => (seen.has(key(c, r)) ? false : seen.add(key(c, r))))
}

/** React-style atom: three rotated ellipses snapped to a grid, plus a nucleus. */
export function atomCells(size = 27) {
  const cx = (size - 1) / 2
  const cy = (size - 1) / 2
  const a = size * 0.46
  const b = size * 0.17
  const cells = []
  for (const deg of [0, 60, 120]) {
    const th = (deg * Math.PI) / 180
    for (let t = 0; t < Math.PI * 2; t += 0.035) {
      const x = a * Math.cos(t)
      const y = b * Math.sin(t)
      const xr = x * Math.cos(th) - y * Math.sin(th)
      const yr = x * Math.sin(th) + y * Math.cos(th)
      cells.push([Math.round(cx + xr), Math.round(cy + yr)])
    }
  }
  for (let dc = -1; dc <= 1; dc++)
    for (let dr = -1; dr <= 1; dr++)
      if (Math.abs(dc) + Math.abs(dr) < 2) cells.push([Math.round(cx) + dc, Math.round(cy) + dr])
  return uniq(cells)
}

/** Two stacked waves, a nod to the Tailwind mark. */
export function waveCells(cols = 24) {
  const cells = []
  for (let c = 0; c < cols; c++) {
    const phase = (c / cols) * Math.PI * 2
    const y1 = Math.round(4 + 2.4 * Math.sin(phase))
    const y2 = Math.round(10 + 2.4 * Math.sin(phase))
    cells.push([c, y1], [c, y1 + 1], [c, y2], [c, y2 + 1])
  }
  return uniq(cells)
}

// 5x7 glyphs
const GLYPHS = {
  J: ['00111', '00010', '00010', '00010', '10010', '10010', '01100'],
  S: ['01111', '10000', '10000', '01110', '00001', '00001', '11110'],
}

export function textCells(text, gap = 1) {
  const cells = []
  let offset = 0
  for (const ch of text) {
    const g = GLYPHS[ch]
    if (!g) { offset += 3; continue }
    g.forEach((row, r) => [...row].forEach((bit, c) => bit === '1' && cells.push([offset + c, r])))
    offset += 5 + gap
  }
  return cells
}

/** Deterministic scattered cluster used as corner decoration. */
export function clusterCells(cols = 8, rows = 8, seed = 7) {
  let s = seed
  const rand = () => ((s = (s * 9301 + 49297) % 233280) / 233280)
  const cells = []
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) {
      // density falls away from the top-right corner
      const d = Math.hypot(cols - 1 - c, r) / Math.hypot(cols, rows)
      if (rand() > d * 1.25) cells.push([c, r])
    }
  return cells
}

/** Three stacked server units, each with a status light. */
export function serverCells(cols = 22) {
  const cells = []
  const lights = []
  for (let u = 0; u < 3; u++) {
    const top = u * 7
    for (let c = 0; c < cols; c++) { cells.push([c, top]); cells.push([c, top + 5]) }
    for (let r = top + 1; r < top + 5; r++) { cells.push([0, r]); cells.push([cols - 1, r]) }
    for (let c = 3; c < 11; c += 2) cells.push([c, top + 2], [c, top + 3])
    lights.push([cols - 4, top + 2], [cols - 4, top + 3], [cols - 5, top + 2], [cols - 5, top + 3])
  }
  return { cells: uniq([...cells, ...lights]), accent: lights.slice(0, 4) }
}

/** Database cylinder: elliptical top, two bands and a base. */
export function dbCells(cols = 22, rows = 26) {
  const cx = (cols - 1) / 2
  const a = cx
  const b = 3
  const cells = []
  const ellipse = (cy, full) => {
    for (let t = 0; t < Math.PI * 2; t += 0.04) {
      if (!full && Math.sin(t) < 0) continue
      cells.push([Math.round(cx + a * Math.cos(t)), Math.round(cy + b * Math.sin(t))])
    }
  }
  ellipse(b, true)
  ellipse(b + 7, false)
  ellipse(b + 14, false)
  ellipse(rows - 1 - b, false)
  for (let r = b; r <= rows - 1 - b; r++) { cells.push([0, r]); cells.push([cols - 1, r]) }
  return uniq(cells)
}
