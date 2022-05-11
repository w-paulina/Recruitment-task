import React, { useState } from 'react'

function UserForm(props) {

    const initialValues = {name: "", surname: "", age: "" , position: ""};
    const [formValues, setFormValues] = useState(initialValues);
    
    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit(
            {
                id: (new Date).getTime(),
                name: formValues.name,
                surname: formValues.surname,
                age: formValues.age,
                position: formValues.position,
            }
        )

        setFormValues(initialValues);
    }

  return (
    <div>
        <form className='user-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Imię:</label>
            <input type="text" value={formValues.name} 
            name="name" className='user-input' onChange={handleChange}/>
            <label htmlFor='surname'>Nazwisko:</label>
            <input type="text" value={formValues.surname} 
            name="surname" className='user-input' onChange={handleChange}/>
            <label htmlFor='age'>Wiek:</label>
            <input type="text" value={formValues.age} 
            name="age" className='user-input' onChange={handleChange}/>
            <label htmlFor='position'>Stanowisko:</label>
            <input type="text" value={formValues.position} 
            name="position" className='user-input' onChange={handleChange}/>
            
            <button className='user-button'>Dodaj użytkownika</button>
        </form>
    </div>
  )
}

export default UserForm;