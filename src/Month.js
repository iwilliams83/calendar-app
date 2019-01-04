import React, { Component } from 'react'
import { Icon, Table } from 'semantic-ui-react'

class Month extends Component {
  render(){
    return   <div className="calendar-table">
    <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='7' textAlign='center'>January</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
            <Table.Cell textAlign='center'>X</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  }
}



export default Month
