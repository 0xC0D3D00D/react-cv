
export default class Utils {
    static isAlphaNumeric(str: string): boolean {
        return /^[a-z0-9]+$/i.test(str);
    }

    static isValidGithubUsername(str: string): boolean {
        return /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(str);
    }

    static isValidGitlabUsername(str: string): boolean {
        return /^[a-z\d.](?:[a-z\d.]|-(?=[a-z\d])){0,255}$/i.test(str);
    }

    static unifyArray(a) {
        let onlyUnique = function(value, index, self) { 
            return self.indexOf(value) === index;
        }

        return a.filter( onlyUnique ); 
    }

}
