import { useRef, useState } from "react"

export const Form = () => {
  const [inputVal, setInputVal] = useState({
        username: '',
        password: '',
    });
    const [dataForm, setDataForm] = useState([]);
    

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInputVal({
            ...inputVal,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDataForm((preData) => [...preData, inputVal])
        setInputVal({
            username: '',
            password: '',
        })
    }

    const handleReset = () => {
        setDataForm([])
    }
    console.log(dataForm);
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>USERNAME
                <input type="text" name="username" value={inputVal.username} onChange={handleInput} />
            </label>
            <label>Password
                <input type="text" name="password" value={inputVal.password} onChange={handleInput} />
            </label>
            <button type="submit" disabled={inputVal.password && inputVal.username ? false : true}>Login</button>
            <button type="reset" onClick={handleReset} disabled={inputVal.password || inputVal.username ? false : true}>Reset</button>
        </form>
            <ul>
                { dataForm.map((val, index) => (
                    <li key={index}>
                        <p>username: {val.username}</p>
                        <p>password: {val.password}</p>
                    </li>
                ))
                }
            </ul>
    </div>
  )
}
