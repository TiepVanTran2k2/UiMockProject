import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Table } from 'reactstrap';

function ListAuditResult() {
    const [list, setList] = useState([])
    Axios.get('https://localhost:5001/api/AuditResult/GetPlanAudit')
        .then(res => {
            setList(res.data)
        })
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Class Name
                        </th>
                        <th>
                            Class Code
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                </thead>
            {list.map((filterItem, index) => {
                return (                       
                    <tbody>
                        <tr>
                            <th scope="row">
                                {index + 1}
                            </th>
                            <td>
                                {filterItem.className}
                            </td>
                            <td>
                                {filterItem.classCode}
                            </td>
                            <td>
                                <Button color='success'>Open</Button>
                            </td>
                        </tr>
                    </tbody>                         
                );
            })
            }
            </Table>           
        </div>
    );
}

export default ListAuditResult;
