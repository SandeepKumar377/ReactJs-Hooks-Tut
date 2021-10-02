import React, {useState} from "react";

const FunctionCounterThree = () => {
    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    })
    return (
        <div>
            <form>
                <input type="text" value={name.firstName} onChange={e =>setName({...name, firstName: e.target.value})} />
                <input type="text" value={name.lastName} onChange={e =>setName({...name, lastName: e.target.value})} />
            </form>
            <h1>Your FirstName is {name.firstName}</h1>
            <h1>Your LastName is {name.lastName}</h1>
            <h1>{JSON.stringify(name)}</h1>
        </div>
    )
}
export default FunctionCounterThree