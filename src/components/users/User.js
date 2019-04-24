import React, { Component } from 'react'
import { Table, Container } from 'semantic-ui-react'

class User extends Component{
    constructor(){
        super();
        this.state = {
            users : [
                {nit:"1234567890", nombre: "William", apellido: "Puerta", edad: 21},
                {nit:"0987654321", nombre: "Alex", apellido: "Rivera", edad: 46},
                {nit:"6543217890", nombre: "María", apellido: "Motato", edad: 42}
            ]
        }
    }
    
    render(){
        const { users } = this.state;
        
        return(
            <Container>
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
                    {users.map(user => 
                        <Table.Row>
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