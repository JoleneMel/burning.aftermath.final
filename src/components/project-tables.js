//table for the requirenments of the project to be displayed on the homepage
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


export default class ProjectTables extends React.Component {
    render () {
        return(
            <Container><br></br>
        <Table>
            <thead>
                <tr>
                <th><h5>Color</h5></th>
                <th><h5>Meaning</h5></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td id="requirenment"></td>
                <td>Requirement Data</td>
                </tr>
                <tr>
                <td id="completed"></td>
                <td >Completed</td>
                </tr>
                <tr>
                <td id="analysising"></td>
                <td>Analysising</td>
                </tr>
                <tr>
                <td id="debugging"></td>
                <td>Debugging Phase</td>
                </tr>
                <tr>
                <td id="planning"></td>
                <td>Planning Phase</td>
                </tr>
            </tbody>
            </Table><br></br>

            <Table>
            <thead>
                <tr>
                <th><h5>#</h5></th>
                <th><h5>Project's Requirement</h5></th>
                <th><h5>Data</h5></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td id="completed">Use an Api or multiple Apis to create a react app</td>
                <td id="requirenment">https://crudcrud.com/api/9808c8e15bf34de8bf4c2c652aa1133c/burningaftermath
                https://crudcrud.com/api/9808c8e15bf34de8bf4c2c652aa1133c/campaigns</td>
                </tr>
                <tr>
                <td>2</td>
                <td id="completed">Use React Router and have at least 3 pages</td>
                <td id="requirenment">It also has dropdowns!</td>
                </tr>
                <tr>
                <td>3</td>
                <td id="completed">Use React Bootstrap or an alternative styling library</td>
                <td id="requirenment">It uses React-Bootstrap</td>
                </tr>
                <tr>
                <td>4</td>
                <td id="completed">Contain at least 10 components</td>
                <td id="requirenment">Total Components created 18 completed components, 3 are still under development </td>
                </tr>
                <tr>
                <td>5</td>
                <td id="completed">Allow for all CRUD operations</td>
                <td id="requirenment">You can do that with your character creation and campaign creation!</td>
                </tr>
            </tbody>
            </Table>
            </Container>

        );
    }
}
