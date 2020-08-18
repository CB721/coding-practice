import React from 'react';
import Button from '../Button';
import './style.scss';

function Form({ inputs, label, handleInputChange, error, handleFormSubmit }) {
    return (
        <form className="form">
            {error ? (
                <label style={{ color: "red" }}>{error}</label>
            ) : (<div />)}
            {inputs ? (
                <div>
                    <label>{label}</label>
                    {inputs.map((input, index) => (
                        <input
                            key={index}
                            value={input.value}
                            className="input"
                            placeholder={input.placeholder}
                            name={input.name}
                            type={input.type}
                            onChange={handleInputChange}
                        />
                    ))}
                </div>
            ) : (<div />)}
            <Button
                bgColor="rgba(62,7,104,1)"
                textColor="rgb(235, 232, 232)"
                content="Continue"
                action={handleFormSubmit}
            />
        </form>
    )
}

export default Form;