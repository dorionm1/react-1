import React, { useState } from 'react';

const MadLibsForm = ({ onFormSubmit }) => {
    let initialState = {
        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
      }

      const handleSubmit = e => {
        e.preventDefault();
        onFormSubmit(formData);
        setFormData(initialState);
      };

    return (
        <div id="formContainer">
            <form  id="form" onSubmit={handleSubmit}>
                <label for="noun"></label>
                <input onChange={handleChange} type="text" id="field" placeholder="Noun" name="noun" value={formData.noun} required/>
                <br />

                <label for="noun2"></label>
                <input onChange={handleChange} type="text" id="field" placeholder="Noun 2" name="noun2" value={formData.noun2} required/>
                <br />

                <label for="adjective"></label>
                <input onChange={handleChange} type="text" id="field" placeholder="Adjective" name="adjective" value={formData.adjective} required/>
                <br />

                <label for="color"></label>
                <input onChange={handleChange} type="text" id="field" placeholder="Color" name="color" value={formData.color} required/>
                <br />
                <button type="submit">Get Story</button>
            </form>
        </div>
    )
  }
  
  export default MadLibsForm;