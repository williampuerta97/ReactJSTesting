import React, { Component } from 'react'
import { Table, Container, Form } from 'semantic-ui-react'

class User extends Component{
    constructor(){
        super();
        this.handleAddClick = this.handleAddClick.bind(this);
        this.state = {
            users : [
                {nit:"1234567890", nombre: "William", apellido: "Puerta", edad: 21},
                {nit:"0987654321", nombre: "Alex", apellido: "Rivera", edad: 46},
                {nit:"6543217890", nombre: "María", apellido: "Motato", edad: 42}
            ]
        }
    }
    
    handleAddClick(){
        //this.state.users.push({nit:"111111111", nombre: "Brandon", apellido: "Puerta", edad: 20})
        this.setState({users : [...this.state.users, {nit:"111111111", nombre: "Brandon", apellido: "Puerta", edad: 20}]})
        console.log(this.state.users)
        //.push({nit:"111111111", nombre: "Brandon", apellido: "Puerta", edad: 20})}
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
                <Form.Button onClick={this.handleAddClick}>Agregar</Form.Button>
            </Container>
        );
    }
}

export default User