import React from "react";
import './addModal.scss';

import { useDispatch } from 'react-redux';
import { useState } from "react";
import { addNewProject, openAddModal } from "../../actions/index";


const AddModal = ({ isActive }) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const dispatch = useDispatch()

    return (
        <div className={isActive ? "modal active" : "modal"} onClick={()=>dispatch(openAddModal())}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <input
                    type="text"
                    placeholder="Enter project name..."
                    className="input"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Cost($) per hour..."
                    className="input"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
                <div className="btn">
                    <button className="button" onClick={() => {
                        dispatch(openAddModal())
                        setName('')
                        setPrice('')
                        dispatch(addNewProject(name, price))
                    }}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddModal