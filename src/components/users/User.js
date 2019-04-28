import React, { Component } from 'react'
import { Table, Container, Form, Button } from 'semantic-ui-react'

class User extends Component{
    constructor(){
        super();
        this.handleAddUser = this.handleAddUser.bind(this);
        this.state = {
            users : []
        }
         
    }

    handleAddUser(e){
        e.preventDefault()
        let u = {
            nit: e.target.nit.value,
            nombre: e.target.nombre.value,
            apellido: e.target.apellido.value,
            edad: e.target.edad.value,
        }
        this.setState({
            users: this.state.users.concat([u])
        })
    }
    
    render(){
        const { users } = this.state;
        
        return(
            <Container>
                <Form onSubmit={this.handleAddUser}>
                    <Form.Field>
                        <label>NIT</label>
                        <input type='number' name='nit'/>
                    </Form.Field>
                    <Form.Field>
                        <label>NOMBRE</label>
                        <input type='text' name='nombre'/>
                    </Form.Field>
                    <Form.Field>
                        <label>APELLIDO</label>
                        <input type='text' name='apellido'/>
                    </Form.Field>
                    <Form.Field>
                        <label>EDAD</label>
                        <input type='number' name='edad'/>
                    </Form.Field>
                    <Button primary type='submit'>AGREGAR</Button>
                </Form>

                <Table striped>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>NIT</Table.HeaderCell>
                        <Table.HeaderCell>NOMBRE</Table.HeaderCell>
                        <Table.HeaderCell>APELLIDO</Table.HeaderCell>
                        <Table.HeaderCell>EDAD</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    {users.map((user, i) => 
                        <Table.Row key={i}>
                            <Table.Cell>{user.nit}</Table.Cell>
                            <Table.Cell>{user.nombre}</Table.Cell>
                            <Table.Cell>{user.apellido}</Table.Cell>
                            <Table.Cell>{user.edad}</Table.Cell>
                        </Table.Row>
                    )}
                    </Table.Body>
                </Table>
            </Container>
        );
    }
}

export default User