import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import Button from '../Button';
import { ReactComponent as Trash } from "../../assets/images/trash.svg";
import './style.scss';

function ListItem({ job, deleteJob }) {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [background, setBackground] = useState("rgb(235, 232, 232)");
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        let milliseconds = Date.now() - job.time;
        let diff = new Date(milliseconds);
        setElapsedTime(diff.getMinutes());
        setTimeout(() => {
            milliseconds = Date.now() - job.time;
            diff = new Date(milliseconds);
            setElapsedTime(diff.getMinutes());
        }, 60000);

        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 175);
        const b = Math.floor(Math.random() * 95);
        setBackground(`rgb(${r},${g},${b})`);
    }, [job.time]);

    function deleteItem(event) {
        event.preventDefault();
        setShowDeleteModal(false);
        deleteJob(event, job);
    }
    function toggleModal(event) {
        event.preventDefault();
        setShowDeleteModal(true);
    }

    return (
        <li className="list-item shadow" style={{ backgroundColor: background }}>
            {showDeleteModal ? (
                <Modal
                    close={() => setShowDeleteModal(false)}
                    form={<div className="delete-form">
                        <div className="row head">
                            <h1>
                                <strong className="bold">
                                    Delete Job
                                </strong>
                            </h1>
                        </div>
                        <div className="row head">
                            <p>
                                Are you sure you want to delete this job?
                            </p>
                        </div>
                        <div className="row head">
                            <Button
                                bgColor="rgba(62,7,104,1)"
                                textColor="rgb(235, 232, 232)"
                                content="Delete"
                                action={(event) => deleteItem(event, job)}
                            />
                            <Button
                                bgColor="rgb(97, 97, 97)"
                                textColor="rgb(235, 232, 232)"
                                content="No"
                                action={() => setShowDeleteModal(false)}
                            />
                        </div>
                    </div>}
                />
            ) : (<div />)}
            <div className="row head">
                <div style={{ width: "15%" }}>
                    <div className="company-icon" style={{ backgroundColor: background, boxShadow: "0px 0px 3px 0px white" }}>
                        {job.company.split(" ")[0][0]}
                    </div>
                </div>
                <h3 style={{ width: "70%" }}>{job.company}</h3>
                <div style={{ width: "15%", display: "flex", justifyContent: "flex-end" }}>
                    <Trash
                        className="trash-icon"
                        onClick={(event) => toggleModal(event)}
                    />
                </div>
            </div>
            <div className="row">
                <h5>{job.title}</h5>
            </div>
            <div className="row elapsed-time">
                <em>
                    added {elapsedTime} minutes ago
                </em>
            </div>
        </li>
    )
}

export default ListItem;