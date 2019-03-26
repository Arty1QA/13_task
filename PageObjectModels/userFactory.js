// This Factory is not used in the framework, this is just an example of possible implementation

const LoginComp = require('./loginComponent');
const SearchComp = require('./searchComponent');

const constructors = {
    login: LoginComp,
    search: SearchComp
}

const userFactory = {
    currentPage: null,
    getPage(name){
        const Page = constructors[name];
        const page = new Page();
        this.currentPage = page;
        return this.currentPage;
    }
}

module.exports = userFactory;