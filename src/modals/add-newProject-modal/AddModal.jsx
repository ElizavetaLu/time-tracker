import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addNewProject, openAddModal } from "../../redux/actions/index";
import './addModal.scss';


const AddModal = ({ isActive }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [err, setErr] = useState({
        name: false,
        price: false,
    });

    const date = new Date().toString();
    const crDate = `${date.slice(4, 10)}, ${date.slice(11, 16)}`;

    const dispatch = useDispatch();


    return (
        <div className={isActive ? "modal active" : "modal"} onClick={() => dispatch(openAddModal())}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <input
                    type="text"
                    placeholder="Enter project name..."
                    className="input f"
                    value={name}
                    onChange={e => {
                        if (err.name) setErr({ ...err, name: !err.name });
                        setName(e.target.value);
                    }
                    }
                    style={{ borderBottom: err.name && '2px solid #D63301' }}
                />
                <input
                    type="number"
                    placeholder="Cost($) per hour..."
                    className="input"
                    value={price}
                    onChange={e => {
                        if (err.price) setErr({ ...err, price: !err.price });
                        setPrice(e.target.value)
                    }
                    }
                    style={{ borderBottom: err.price && '2px solid #D63301' }}
                />
                <div className="btn">
                    <button className="button" onClick={() => {
                        if (!price.trim()) return setErr({ ...err, price: true });
                        if (!name.trim()) return setErr({ ...err, name: true });
                        dispatch(openAddModal());
                        setName('');
                        setPrice('');
                        dispatch(addNewProject(name, price, crDate));
                    }}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddModal