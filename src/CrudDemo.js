import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from './Table';

const CrudDemo = () => {

    const API_URL = "http://localhost:8080/api/v1/person";

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = async () => {
        await axios.get(API_URL).then(
            (response) => {

                if (response.status === 200) {
                    console.log(`API: (All) Request was executed Successfully!`);

                    setPersons(response.data);
                    console.table(response.data);
                } else {
                    console.error(`API: Request was executed with status code ${response.status}`);
                }

            }
        ).catch((error) => {
            console.warn(`API: Request Encounter an Error ${error}`);
        })
    }


    return (
        <div>
            <Table data={persons} />

        </div>
    );
};

export default CrudDemo;