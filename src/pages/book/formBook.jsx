import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const FormBook = ( params ) => {
    return (
        <Container>
            <h2 className='mb-3'>Input Buku</h2>
            <Form onSubmit={ params.onInputSubmit }>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control
                        required
                        type='text' 
                        placeholder='ISBN' 
                        value={ params.isbn } 
                        onChange={ params.setIsbn } 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nama Buku</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='nama buku'
                        value={ params.title }
                        onChange={ params.setTitle } 
                    />
                </Form.Group>
                <Button type="submit">Simpan</Button>
            </Form>
        </Container>
    );
};

export default FormBook;