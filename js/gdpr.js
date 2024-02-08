class GDPR {

    constructor() {
        debugger;
        this.showStatus();
        this.showContent();
        this.bindEvents();

        if(this.cookieStatus() !== 'accept') this.showGDPR();
    }

    bindEvents() {
        let buttonAccept = document.querySelector('.gdpr-consent__button--accept');
        buttonAccept.addEventListener('click', () => {
            this.cookieStatus('accept');
            this.showStatus();
            this.showContent();
            this.hideGDPR();
        });
        let buttonReject = document.querySelector('.gdpr-consent__button--reject');
        buttonReject.addEventListener('click', () => {
            this.cookieStatus('reject');
            this.showStatus();
            this.showContent();
            this.hideGDPR();
        });
    }

    showContent() {
        this.resetContent();
        const status = this.cookieStatus() == null ? 'not-chosen' : this.cookieStatus();
        const element = document.querySelector(`.content-gdpr-${status}`);
        element.classList.add('show');

    }

    resetContent(){
        const classes = [
            '.content-gdpr-accept',
            '.content-gdpr-reject',
            '.content-gdpr-not-chosen'];

        for(const c of classes){
            document.querySelector(c).classList.add('hide');
            document.querySelector(c).classList.remove('show');
        }
    }

    showStatus() {
        document.getElementById('content-gpdr-consent-status').innerHTML =
            this.cookieStatus() == null ? 'Niet gekozen' : this.cookieStatus();
    }

    cookieStatus(status) {

        if (status) localStorage.setItem('gdpr-consent-choice', status);
        const date = new Date();
        let Month = date.getMonth() + 1;
        let Day = date.getDate();
        let Year = date.getFullYear();
        let Hour = date.getHours();
        let Minute = date.getMinutes();
        let DateToday = `${Day}/${Month}/${Year}`;
        let TimeNow = `${Hour}:${Minute}`; 
        localStorage.setItem('Date', DateToday.toString());
        localStorage.setItem('Time', TimeNow.toString());
        return localStorage.getItem('gdpr-consent-choice');
    }

//student uitwerking


    hideGDPR(){
        document.querySelector(`.gdpr-consent`).classList.add('hide');
        document.querySelector(`.gdpr-consent`).classList.remove('show');
    }

    showGDPR(){
        document.querySelector(`.gdpr-consent`).classList.add('show');
    }

}

const gdpr = new GDPR();

