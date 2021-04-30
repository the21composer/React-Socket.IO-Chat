import {Link, useParams} from 'react-router-dom'
import {useLocalStorage, useChat} from 'hooks'
import {MessageForm} from './MessageForm'
import {MessageList} from './MessageList'
import {UserList} from './UserList'
import {Button, Container} from 'react-bootstrap'

export function ChatRoom() {
    // getting needed data & functions from useChat worker
    const {roomId} = useParams()
    const [username] = useLocalStorage('username')
    const {users, messages, sendMessage, removeMessage} = useChat(roomId)
    return (
        <Container className='col-12'>
            <div className='d-flex flex-row align-items-center justify-content-around'>
                <h5 className='mt-3'>
                    You are in {roomId} room
                </h5>
                <Button className='custom-btn btn-light ml-auto' as={Link} to={`/`}>
                    Homepage
                </Button>
            </div>
            <Container className='custom-paper col-12 p-3'>
                <UserList users={users}/>
                <MessageList messages={messages} removeMessage={removeMessage}/>
                <MessageForm username={username} sendMessage={sendMessage}/>
            </Container>
        </Container>
    )
}
