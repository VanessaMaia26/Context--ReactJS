import React, { useContext, userState } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../contexts/Context';

export const SignUp = () => {
    const { state, dispatch } = useContext(Context);

    const handleChangeName = () => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: 'Antonella'
            }
        });
    }

    const handleNameChange = (e: React.ChangeEvent) => {
        setNameInput(e.target.value);
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: e.target.value;
            }
        });
    }

    const handleAgeChange = (e: React.ChangeEvent) => {
        setAgeInput(parseInt(e.target.value));
        dispatch({
            type: 'CHANGE_AGE',
            payload: {
                name: parseInt(e.target.value);
            }
        });
    }

    const handleSave = () => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: nameInput
            }
        });
        const handleSave = () => {
            dispatch({
                type: 'CHANGE_AGE',
                payload: {
                    name: ageInput
                }
            });
    }

    return (
        <div>
            <h3>Tela SignUp (Tema: {state.theme.status})</h3> 
            <input
            type="text"
            placeholder='Digite um nome'
            value={state.user.name}
            onChange={handleNameChange}
            />
            <input
            type="text"
            placeholder='Digite uma idade'
            value={state.user.age}
            onChange={handleAgeChange}
            />
            <br />
            <Link to="/exibir">Ir para ShowData</Link>
        </div>
    );
}