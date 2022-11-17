import React from 'react';

const Table = (props) => {


    const TableHeader = () => {
        return (
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">ACTION</th>
                </tr>
            </thead>
        )
    }

    const TableRow = () => {
        return (
            <tbody>
                {props.data.map((person) => {
                    return (
                        <tr key={person.id}>
                            <th scope="row">{person.id}</th>
                            <td>{`${person.firstName} ${person.lastName}`}</td>
                            <td>{person.email}</td>
                            <td><TableAction /></td>
                        </tr>
                    )
                })}

            </tbody>
        )
    }

    const TableAction = () => {
        return (
            <div>
                <button type="button" className='btn btn-primary'>Details</button>
                <button type="button" className='btn btn-danger mx-1'>Delete</button>
                <button type="button" className='btn btn-warning'>Edit</button>
            </div>
        )
    }

    return (
        <div className="container">
            <table className="table table-striped">
                <TableHeader/>
                <TableRow/>
            </table>
        </div>
    );
};


export default Table;