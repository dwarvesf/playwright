module.exports = {
    fortressUrl: `${process.env.SITE_URL}`,
    domain: '.develop--fortress-v2.netlify.app',
    header: {
        alg: `${process.env.ALG_HEADER}`,
        typ: `${process.env.TYP_HEADER}`,
    },
    payload: {
        exp: `${process.env.EXP}`,
        id: `${process.env.ID}`,
        email: `${process.env.EMAIL}`,
    },
    passPhrase: `${process.env.PASS_PHRASE}`,
    aesEncryptionToken: `${process.env.AES_ENCRYPTION_TOKEN}`,
}
