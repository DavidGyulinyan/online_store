import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {
                id: 15,
                name: "Laptops"
            },
            {
                id: 12,
                name: "Smartphones"
            },
            {
                id: 13,
                name: "Refrigerators"
            }
        ]

        this._brands = [

            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
        ]

        this._devices = [

            [
                {
                    id: 14,
                    name: "IPhone 12 pro",
                    price: 1599,
                    rating: 0,
                    img: "ed8b5fe3-d71e-4eeb-8d3e-b6d023b416d1.jpg",
                },
                {
                    id: 15,
                    name: "IPhone 13 pro",
                    price: 1899,
                    rating: 0,
                    img: "14cbc271-60dc-436d-bb76-c7ae6cb2b314.jpg",
                },
                {
                    id: 16,
                    name: "IPhone 14 pro",
                    price: 1999,
                    rating: 0,
                    img: "0cada5f5-b3da-4595-a35b-9d4e3bd5b51a.jpg",
                },
                {
                    id: 17,
                    name: "Samsung Galaxy S23 Ultra",
                    price: 1999,
                    rating: 0,
                    img: "85e1fc27-a024-45ed-b21e-ba25a97c3068.jpg",
                },
                {
                    id: 19,
                    name: "Samsung Galaxy S23",
                    price: 1399,
                    rating: 0,
                    img: "c25dc0d2-8c51-4ac7-b556-fc571eff6a49.jpg",
                }
            ]
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevice(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}
