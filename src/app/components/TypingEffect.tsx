import { useState, useEffect } from 'react'

interface Props {
  words: string[]
  speed?: number
}

const colorList = [
  'red',
  'orange',
  'amber',
  // 'yellow',
  // 'lime',
  'green',
  // 'emerald',
  'teal',
  // 'cyan',
  'sky',
  // 'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]

const getColorClass = (color: string) => {
  if (colorList.includes(color)) {
    return `text-${color}-500`
  }
  return 'text-black' // default color if the provided color is not in the list
}

const aOrAn = (word: string) => {
  const aList = ['a', 'e', 'i', 'o', 'u']
  if (aList.includes(word.toLowerCase()[0])) {
    return 'an'
  } else {
    return 'a'
  }
}

const TypingEffect: React.FC<Props> = ({ words, speed = 100 }) => {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typeSpeed, setTypeSpeed] = useState(speed)
  const [color, setColor] = useState(colorList[0])

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
        setWordIndex((prevWordIndex) => {
          const newIndex = (prevWordIndex + 1) % words.length
          setColor(colorList[newIndex]) // Update the color
          return newIndex
        })
      } else {
        setTypeSpeed(speed)
      }
    }

    const timer = setTimeout(type, typeSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex])

  // return <span className={getColorClass(color)}>{text}</span>
  return (
    <>
      <span>{aOrAn(text)} </span>
      <span style={{ color }}>{text}</span>
    </>
  )
}

export default TypingEffect
