// import api from './api'
import { calcSizeWithZoom } from './calcZoom'

export const getCanvasItems = (db, activeImageIndexes) => {
  const images = db.images
  return db.sections
    .filter(s => Boolean(s.canvas))
    .map(({ id, imageIds, width, height, posx, posy }) => ({
      id,
      img: images.find(
        im => im.id === imageIds[activeImageIndexes[id] !== undefined ? activeImageIndexes[id] : imageIds.length - 1], 
      ),
      width,
      height,
      posx,
      posy
    }))
}

export const getSectionById = (db, sectionId) => db.sections.find(s => s.id === sectionId)

export const calcInitialScroll = db => {
  const mapped = db.sections.filter(s => Boolean(s.canvas)).map(s => s.canvas)
  if (!mapped || !mapped.length) return { top: 0, left: 0 }
  const xMin = mapped.map(data => data.x).sort(sortNumberAsc)[0]
  const yMin = mapped.map(data => data.y).sort(sortNumberAsc)[0]
  return { left: xMin, top: yMin, behavior: 'smooth' }
}

export const calcScrollToSection = (canvas, zoom) => {
  return { left: calcSizeWithZoom(canvas.posx, zoom), top: calcSizeWithZoom(canvas.posy, zoom), behavior: 'smooth' }
}

export const calcCanvasSize = (sections, zoom) => {
  const mapped = sections.filter(s => Boolean(s.canvas)).map(s => s.canvas)
  if (!mapped || !mapped.length) return { height: '100%', width: '100%' }
  const widths = mapped
    .map(data => calcSizeWithZoom(data.x, zoom) + calcSizeWithZoom(data.width, zoom))
    .sort(sortNumberAsc)
    .reverse()
  const heights = mapped
    .map(data => calcSizeWithZoom(data.y, zoom) + calcSizeWithZoom(data.height, zoom))
    .sort(sortNumberAsc)
    .reverse()
  return { height: heights[0] * 1.1 + 'px', width: widths[0] * 1.1 + 'px' }
}

function sortNumberAsc(a, b) {
  return a < b ? -1 : 1
}
