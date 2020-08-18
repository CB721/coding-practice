import React, { useState, useEffect } from 'react';
import { ReactComponent as Wand } from "./assets/images/magic-wand.svg";
import Button from './components/Button';
import Modal from './components/Modal';
import Form from './components/Form';
import List from './components/List';
import './App.scss';

function App() {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState({
    isDisplay: false,
    isAdd: true
  });
  const [formContent, setFormContent] = useState({});
  const [formError, setFormError] = useState("");

  useEffect(() => {
    getSavedJobs();
  }, []);

  useEffect(() => {
    if (showModal.isAdd) {
      setFormContent({
        inputs: [
          { type: "text", value: "", placeholder: "Company Name", name: "company" },
          { type: "text", value: "", placeholder: "Job Title", name: "title" }
        ],
        label: "Add a Job"
      });
    }
  }, [showModal.isAdd]);

  function toggleModal(event, isAdd) {
    event.preventDefault();
    setShowModal({
      isDisplay: !showModal.isDisplay,
      isAdd
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    let companyValue = formContent.inputs[0].value;
    let titleValue = formContent.inputs[1].value;
    if (name === "company") {
      setFormContent({
        inputs: [
          { type: "text", value, placeholder: "Company Name", name: "company" },
          { type: "text", value: titleValue, placeholder: "Job Title", name: "title" }
        ],
        label: "Add a Job"
      });
    } else {
      setFormContent({
        inputs: [
          { type: "text", value: companyValue, placeholder: "Company Name", name: "company" },
          { type: "text", value, placeholder: "Job Title", name: "title" }
        ],
        label: "Add a Job"
      });
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!formContent.inputs[0].value || !formContent.inputs[1].value) {
      setFormError("Please complete all fields to continue.");
    } else {
      setFormError("");
      const savedJob = { company: formContent.inputs[0].value, title: formContent.inputs[1].value, time: Date.now() }
      const completeJobList = [...jobs, savedJob];
      setJobs(completeJobList);
      localStorage.setItem("jobs", JSON.stringify(completeJobList));
      toggleModal(event, false);
      setFormContent({
        inputs: [
          { type: "text", value: "", placeholder: "Company Name", name: "company" },
          { type: "text", value: "", placeholder: "Job Title", name: "title" }
        ],
        label: "Add a Job"
      })
    }
  }
  function deleteJob(event, deleteJob) {
    event.preventDefault();
    const filteredJobs = jobs.filter(job => job.time !== deleteJob.time);
    localStorage.setItem("jobs", JSON.stringify(filteredJobs));
    getSavedJobs();
  }

  function getSavedJobs() {
    const savedJobs = JSON.parse(localStorage.getItem("jobs"));
    if (savedJobs) setJobs(savedJobs);
  }

  return (
    <div className="App">
      {showModal.isDisplay && formContent ? (
        <Modal
          close={toggleModal}
          form={<Form
            inputs={formContent.inputs}
            label={formContent.label}
            handleInputChange={handleInputChange}
            error={formError}
            handleFormSubmit={handleFormSubmit}
          />}
        />
      ) : (<div />)}
      <div className="row">
        <section>
          <Wand id="wand-icon" />
          <h1>
            <strong id="title" className="bold">
              WISHLIST
            </strong>
          </h1>
        </section>
      </div>
      <div className="row">
        <section>
          <h3 id="job-count">{jobs.length} Jobs</h3>
        </section>
      </div>
      <div className="row">
        <section>
          <Button
            bgColor="rgb(235, 232, 232)"
            textColor="rgb(97, 97, 97)"
            content="+"
            modal={true}
            action={toggleModal}
          />
        </section>
      </div>
      {jobs.length ? (
        <div className="row">
          <main>
            <List
              jobs={jobs}
              deleteJob={deleteJob}
            />
          </main>
        </div>
      ) : (<div />)}
    </div>
  );
}

export default App;
