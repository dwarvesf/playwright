const Helper = require('@codeceptjs/helper');
const { I, testData } = inject();

class Utils extends Helper {
    /**
     * This function will replace the character before `@` of the email with `*`
     * @param {string} email is a email that need to hide
     * @returns hidden email e.g. `example@gmail.com` -> `*******@gmail.com`
     */
    async hideFullEmailWithRegex(email) {
        const pattern = '[a-zA-Z\\d\\s.+_-]';
        const emailSplit = email.split('@');
        const replaceString = emailSplit[0].replace(
            new RegExp(pattern, 'g'),
            '*',
        );
        return `${replaceString}@${emailSplit[1]}`;
    }
}

module.exports = Utils