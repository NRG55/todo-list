
// TODO: Component example
export default class ProjectButton {
    #name = '';
    #icon = ''
    #number = 0
    #filter = (element) => {};
    #canBeRenamed = false


    constructor(name, icon = '', number = 0, filter = (element) => {}, canBeRenamed = false) {
        this.#name = name;
        this.#icon = icon;
        this.#number = number;
        this.#filter = filter;
        this.#canBeRenamed = canBeRenamed
    };



    render() {
        return `
            <button> 
                <span class="material-symbols-outlined all-tasks-icon-span">${this.#icon}</span>
                <span>${this.#name}</span>
                <span>${this.#number}</span>
                <span>OPEN</span>
            </button>
        `
    }

    getPopUpData() {
        return ``
    }


    getFilteredData(data) {
        return data.filter(this.#filter)
    }

}
