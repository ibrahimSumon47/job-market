import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const {id} = useParams();
    const [data, setData] = useState({});
    console.log(data);

    const details = useLoaderData();
    useEffect(() => {
        if (details) {
            let viewDetails = details.find((details) => details.id === id);
            setData(viewDetails);
        }
    }, [details, id]);
    return (
        <div>
            <h2>Hello</h2>
        </div>
    );
};

export default JobDetails;