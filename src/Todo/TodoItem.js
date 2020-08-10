import React from "react";
import Checkbox from '@material-ui/core/Checkbox';

export default function TodoItem({todo, index}) {
    const [state, setState] = React.useState([
        {checked: false},
        {checked: true},
        {checked: true},
    ]);

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <li>
            <Checkbox checked={state[index].checked}
                      onChange={handleChange}
                      name='checked'
                      inputProps={{'aria-label': 'uncontrolled-checkbox'}}/>
            {todo.title}
        </li>
    )
}
