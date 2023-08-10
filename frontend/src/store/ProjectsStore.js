import {makeAutoObservable} from 'mobx'
export default class ProjectStore {
    constructor() {
        this._filters = {
            order: 'desc',
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
          };
        makeAutoObservable(this)
    }
    setFilters (filters) {
        this._filters = filters
    }
    get filters() {
        return this._filters
    }
}