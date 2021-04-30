import TimeAgo from 'react-timeago'
import {ListGroup, Card, Button} from 'react-bootstrap'
import {MdDelete} from 'react-icons/md'

export const MessageListItem = ({msg, removeMessage}) => {
    const handleRemoveMessage = (id) => {
        removeMessage(id)
    }

    const {messageId, messageText, senderName, createdAt, currentUser} = msg
    return (
        <ListGroup.Item
            className={`d-flex ${currentUser ? 'justify-content-end' : ''}`}
        >
            <Card
                className={`${currentUser ? 'custom-card bg-queue' : 'custom-card'}`}
                style={{maxWidth:'55%'}}
            >
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <Card.Text>{senderName}</Card.Text>
                    <Card.Text as={TimeAgo} date={createdAt} className='ml-5'/>
                </Card.Header>
                <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Text>{messageText}</Card.Text>
                    {currentUser && (
                        <Button
                            variant='none'
                            className='text-danger custom-btn icon-btn'
                            onClick={() => handleRemoveMessage(messageId)}
                        >
                            <MdDelete/>
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )
}
