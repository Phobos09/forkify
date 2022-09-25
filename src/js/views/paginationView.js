import View from './view.js'
import icons from 'url:../../img/icons.svg'

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination')
    _addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--inline')
            console.log(btn)
            if (!btn) return

            const goToPage =+ btn.dataset.goto
            console.log(goToPage)

            handler(goToPage)
        })
    }

    _generateMarkup() {
        const numPages = Math.ceil(this._data.result.length / this._data.resultsPerPage)
        console.log(numPages)

        if (this._data.page === 1 && numPages > 1) {
            return `
                <button data-goto="${this._data.page + 1}" class="btn--inline pagination__btn--next">
                    <span>Page ${this._data.page + 1}</span>
                    <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button>`
        }

        if (this._data.page !== 1 && this._data.page === numPages) {
            return `
                <button data-goto="${this._data.page - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${this._data.page - 1}</span>
                </button>`
        }

        if (this._data.page !== 1 && this._data.page > 1) {
            return `
                <button data-goto="${this._data.page - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${this._data.page - 1}</span>
                </button>
                <button data-goto="${this._data.page + 1}" class="btn--inline pagination__btn--next">
                    <span>Page ${this._data.page + 1}</span>
                    <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button>`
        }

        return ''
    }
}


export default new PaginationView()