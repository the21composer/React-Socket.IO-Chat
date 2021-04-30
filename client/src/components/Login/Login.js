import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useLocalStorage} from 'hooks'
import {Form, Button, Container} from 'react-bootstrap'

export function Login() {
    const [username, setUsername] = useLocalStorage('username', 'anonymous')
    const [roomId, setRoomId] = useState('free')

    const handleChangeName = (e) => {
        setUsername(e.target.value)
    }

    const handleChangeRoom = (e) => {
        setRoomId(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const trimmed = username.trim()

    return (
        <Container className='col-12 m-0 p-0'>
            <Form
                style={{margin:'0 auto'}}
                onSubmit={handleSubmit}
                className='custom-paper mt-3 p-4 col-lg-4 col-md-6 col-sm-11'
            >
                <h3 className='m-2 text-center'>Welcome to React chat!</h3>
                <Form.Group>
                    <Form.Label>Set your nickname:</Form.Label>
                    <Form.Control className='custom-textform' value={username} onChange={handleChangeName}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Choose your room:</Form.Label>
                    <Form.Control as='select' className='custom-select' value={roomId} onChange={handleChangeRoom}>
                        <option value='free'>Free</option>
                        <option value='job'>Job</option>
                    </Form.Control>
                </Form.Group>
                {trimmed && (
                    <Container className='col-12 d-flex justify-content-center'>
                        <Button className='custom-btn' variant='success' as={Link} to={`/${roomId}`}>
                            Join!
                        </Button>
                    </Container>
                )}
            </Form>
        </Container>
    )
}
