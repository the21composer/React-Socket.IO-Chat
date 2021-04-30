import { useState } from 'react'
// styles
import { Form, Button } from 'react-bootstrap'
// emoji
import { Picker } from 'emoji-mart'
// icons
import { FiSend } from 'react-icons/fi'
import { GrEmoji } from 'react-icons/gr'

export const MessageForm = ({ username, sendMessage }) => {
  const [text, setText] = useState('')
  const [showEmoji, setShowEmoji] = useState(false)

  const handleChangeText = (e) => {
    setText(e.target.value)
  }

  const handleEmojiShow = () => {
    setShowEmoji((v) => !v)
  }

  const handleEmojiSelect = (e) => {
    setText((text) => (text += e.native))
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (trimmed) {
      sendMessage({ messageText: text, senderName: username })
      setText('')
    }
  }

  return (
    <>
      <Form onSubmit={handleSendMessage}>
        <Form.Group className='d-flex p-2'>
          <Button className='custom-btn icon-btn btn-info mr-2' variant='secondary' onClick={handleEmojiShow}>
            <GrEmoji />
          </Button>
          <Form.Control
            value={text}
            className='custom-textform mr-2'
            onChange={handleChangeText}
            type='text'
            placeholder='Message...'
          />
          <Button variant='success' type='submit' className='custom-btn'>
            <FiSend />
          </Button>
        </Form.Group>
      </Form>
      {showEmoji && <Picker onSelect={handleEmojiSelect} emojiSize={20} />}
    </>
  )
}
