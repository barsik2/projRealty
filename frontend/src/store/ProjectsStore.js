import {makeAutoObservable} from 'mobx'
export default class ProjectStore {
    constructor() {
        this._filters = {
            order: '',
            orderBy: '',
            garage: '',
            floors: '',
            tent: '',
            style: '',
            rooms: '',
            price_min: '',
            price_max: '',
            size_min: '',
            size_max: '',
            name: '',
            additional:'',
          };

          this._selectedSize = {}
        makeAutoObservable(this)
    }
    setFilters (filters) {
        this._filters = filters
    }
    setSelectedSize(selectedSize) {
        this._selectedSize = selectedSize
    }

    get filters() {
        return this._filters
    }

    get selectedSize() {
        return this._selectedSize
    }

}