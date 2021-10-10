import React from 'react'
import useForm from '../hooks/useForm'

const UseCustomHookWithForm = () => {

    const [firstName, bindFirstName, resetFirstName] = useForm('')
    const [lastName, bindLastName, resetLastName] = useForm('')


    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <lable>First Name</lable>
                    <input type="text" {...bindFirstName} />
                </div>
                <div>
                    <lable>Last Name</lable>
                    <input type="text" {...bindLastName} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UseCustomHookWithForm
