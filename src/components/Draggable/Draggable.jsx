/* Draggable 元件：提供可拖曳容器，讓子元素可以在畫面上移動 */
import { useEffect, useRef, useState } from 'react'
import './Draggable.css'

function getSavedPosition(storageKey) {
  if (!storageKey) {
    return { x: 0, y: 0 }
  }

  try {
    const savedPosition = window.localStorage.getItem(storageKey)

    if (!savedPosition) {
      return { x: 0, y: 0 }
    }

    const parsedPosition = JSON.parse(savedPosition)

    return {
      x: Number(parsedPosition.x) || 0,
      y: Number(parsedPosition.y) || 0,
    }
  } catch {
    return { x: 0, y: 0 }
  }
}

/* 讓包在裡面的內容可以用滑鼠拖曳移動 */
function Draggable({ children, className = '', storageKey = '' }) {
  /* DOM ref 用來設定與確認 pointer capture */
  const elementRef = useRef(null)

  /* 記錄按下滑鼠當下的位置，後面用來計算移動距離 */
  const startPointer = useRef({ x: 0, y: 0 })
  const startPosition = useRef({ x: 0, y: 0 })

  /* position 會被轉成 CSS 變數，交給 CSS 做 transform */
  const [position, setPosition] = useState(() => getSavedPosition(storageKey))
  const [isDragging, setIsDragging] = useState(false)

  /* 有提供 storageKey 時，拖曳後的位置會在重整後保留 */
  useEffect(() => {
    if (!storageKey) {
      return
    }

    window.localStorage.setItem(storageKey, JSON.stringify(position))
  }, [position, storageKey])

  function handlePointerDown(event) {
    /* 只接受滑鼠左鍵 */
    if (event.button !== 0) return

    event.preventDefault()

    startPointer.current = {
      x: event.clientX,
      y: event.clientY,
    }

    startPosition.current = position
    setIsDragging(true)

    /* pointer capture 可以讓滑鼠移出元素後仍持續收到拖曳事件 */
    elementRef.current?.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event) {
    /* 沒有 capture 代表目前不是拖曳狀態 */
    if (!elementRef.current?.hasPointerCapture(event.pointerId)) {
      return
    }

    /* 用目前滑鼠位置扣掉起點，得到拖曳位移 */
    const moveX = event.clientX - startPointer.current.x
    const moveY = event.clientY - startPointer.current.y

    setPosition({
      x: startPosition.current.x + moveX,
      y: startPosition.current.y + moveY,
    })
  }

  function handlePointerUp(event) {
    if (elementRef.current?.hasPointerCapture(event.pointerId)) {
      elementRef.current.releasePointerCapture(event.pointerId)
    }

    setIsDragging(false)
  }

  return (
    <div
      ref={elementRef}
      className={`draggable ${isDragging ? 'draggable--active' : ''} ${className}`}
      style={{
        /* CSS 會用這兩個變數控制 translate3d 位移 */
        '--drag-x': `${position.x}px`,
        '--drag-y': `${position.y}px`,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div className="draggable__content">{children}</div>
    </div>
  )
}

export default Draggable
