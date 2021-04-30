import {Card, Badge} from 'react-bootstrap'
import {RiRadioButtonLine} from 'react-icons/ri'

export const UserList = ({users}) => {
    const usersArr = Object.entries(users)
    return (
        <Card>
            <Card.Body>
                {usersArr.map(([userId, obj]) => (
                    <Badge className='custom-badge' eventKey='0' key={userId}>
                        <Card.Body>
                            <RiRadioButtonLine
                                className={`mb-1 mr-1 ${
                                    obj.online ? 'text-success' : 'text-secondary'
                                }`}
                            />
                            {obj.username}
                        </Card.Body>
                    </Badge>
                ))}
            </Card.Body>
        </Card>
    )
}
