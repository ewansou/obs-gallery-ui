import { useCallback, useState } from 'react'

const ANIMATION_DURATION = 300
const useZoomImage = () => {
  const [open, setOpen] = useState(false)
  const [transition, setTransition] = useState(false)
  const toggleModal = useCallback(
    (state: boolean) => () => {
      if (state) {
        setOpen(state)
        document?.body.classList.add('overflow-hidden')

        return
      }
      setTransition(false)
      document?.body.classList.remove('overflow-hidden')
      setTimeout(() => {
        setOpen(state)
      }, ANIMATION_DURATION)
    },
    [],
  )

  return { open, transition, toggleModal, setTransition }
}

export default useZoomImage
