import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Col} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Col className="d-flex">
            {
                device.brands.map(brand =>
                    <Card
                        style={{cursor: "pointer"}}
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                        className="p-3"
                        onClick={() => device.setSelectedBrand(brand)}
                        key={brand.id}
                    >
                        {brand.name}
                    </Card>
                )
            }
        </Col>
    );
});

export default BrandBar;
