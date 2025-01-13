function getBrowserData() {
    const token = localStorage.getItem('INTEGRATOKEN') || null;
    const tokenEval = localStorage.getItem('INTEGRATOKENVAL') || null;
    const user = window.localStorage.getItem('INTEGRAUSER') || null;
    
    let auth = false;

    if (tokenEval) {
        const tokenEvalAsDate = new Date(Number(tokenEval));
        const currentDate = new Date();

        auth = tokenEvalAsDate > currentDate;
    }

    return {
        token: token,
        tokenEval: tokenEval,
        user: user,
        auth: auth
    };
}

export default getBrowserData;
