import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <ul className="list-group">
            {device.types.map(type =>
                <li
                    style={{cursor: "pointer"}}
                    className={`list-group-item ${type.id === device.selectedType.id ? 'active' : ''}`}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </li>
            )}
        </ul>
    );
});

export default TypeBar;
