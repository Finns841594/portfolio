import { useState, useEffect } from 'react'

interface Props {
  words: string[]
  speed?: number
}

const TypingEffect: React.FC<Props> = ({ words, speed = 100 }) => {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typeSpeed, setTypeSpeed] = useState(speed)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const type = () => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1))
      } else {
        setText(currentWord.substring(0, text.length + 1))
      }

      if (!isDeleting && text === currentWord) {
        setTypeSpeed(1500) // Pause for a while after typing a word
        setIsDeleting(true)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setTypeSpeed(speed)
        setWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length)
      } else {
        setTypeSpeed(speed)
      }
    }

    const timer = setTimeout(type, typeSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex])

  return <span>{text}</span>
}

export default TypingEffect
