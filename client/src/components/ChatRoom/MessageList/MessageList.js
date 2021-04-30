import {useRef, useEffect} from 'react'
import {ListGroup} from 'react-bootstrap'
import {MessageListItem} from './MessageListItem'

export const MessageList = ({messages, removeMessage}) => {
    const messagesEndRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior:'smooth'
        })
    }, [messages])

    return (
        <ListGroup variant='flush' style={{height:'60vh', overflowY:'scroll', borderRadius:'20px'}}>
            {messages.map((msg) => (
                <MessageListItem
                    key={msg.messageId}
                    msg={msg}
                    removeMessage={removeMessage}
                />
            ))}
            <span ref={messagesEndRef}></span>
        </ListGroup>
    )
}
