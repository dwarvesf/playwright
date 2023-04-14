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

    // getJWTTokenForLoginCredential() {
    //     const b64Header = toBase64(testData.header);
    //     const jwtB64Header = replaceSpecialChars(b64Header);
    //     const b64Payload = toBase64(testData.payload);
    //     const jwtB64Payload = replaceSpecialChars(b64Payload);
    //     const jwt = `${jwtB64Header}.${jwtB64Payload}.${process.env.SIGNATURE}`;
    //     console.log ("the jwt token is: ", jwt);
    //     return jwt;
    // }
    
    // toBase64(obj) {
    //     // converts the obj to a string
    //     const str = JSON.stringify (obj);
    //     // returns string converted to base64
    //     return Buffer.from(str).toString ('base64');
    // }

    // replaceSpecialChars(b64string) {
    //     // create a regex to match any of the characters =,+ or / and replace them with their // substitutes
    //     return b64string.replace (/[=+/]/g, charToBeReplaced => {
    //         switch (charToBeReplaced) {
    //             case '=':
    //             return '';
    //             case '+':
    //             return '-';
    //             case '/':
    //             return '_';
    //         }
    //     });
    // }
}

module.exports = Utils