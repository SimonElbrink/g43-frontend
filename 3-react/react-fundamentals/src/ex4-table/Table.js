import React from 'react';
import './table.css'; {/* Don't forget to import css file.*/}



const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>1</td>
                <td>Mehrdad Javan</td>
                <td>mehrdad@lexicon.se</td>
                <td>
                    <TableAction />
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Simon Elbrink</td>
                <td>simon@lexicon.se</td>
                <td>
                    <TableAction />
                </td>
            </tr>
        </tbody>
    );
}

{/* Styling by Classes*/}
const TableAction = () => {
    return (
        <>
            <button className='details-btn' >Details</button>
            <button className='delete-btn'>Delete</button>
            <button className='edit-btn'>Edit</button>
        </>
    );
}




const Table = () => {
    return (
        <div>
            <table border="1">
                <TableHeader />
                <TableBody />
            </table>
        </div>
    );
};

export default Table;