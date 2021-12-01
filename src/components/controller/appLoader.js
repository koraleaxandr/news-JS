import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'b50252b24da44fe583be960d6d2fd376', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
