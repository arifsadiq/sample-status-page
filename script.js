const APP_STATUS = {
    '0': 'Down',
    '1': 'Up and Running',
    '2': 'Operational',
}

class AppStatus extends HTMLElement {
    constructor() {
        super();
        const el = document.createElement('p');
        el.innerText = this.getAttribute('name');
        this.appendChild(el);
        const status = document.createElement('p');
        status.textContent = `${APP_STATUS[this.getAttribute('status')]}`;
        this.appendChild(status);
    }
}
customElements.define('app-status', AppStatus, { extends: 'article'} );