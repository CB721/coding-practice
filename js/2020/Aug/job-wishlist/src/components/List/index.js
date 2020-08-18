import React from 'react';
import ListItem from '../ListItem';
import './style.scss';

function List({ jobs, deleteJob }) {
    return (
        <ul className="list">
            {jobs && jobs.length ? (
                <div>
                    {jobs.map((job, index) => (
                        <ListItem
                            key={index}
                            job={job}
                            deleteJob={deleteJob}
                        />
                    ))}
                </div>
            ) : (<div />)}
        </ul>
    )
}

export default List;