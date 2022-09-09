
let is_true = true;

    let customFetch = (time, task) => {
        return new Promise((resolve, reject) => {
            if (is_true) {
                setTimeout(() => {
                    resolve(task)}, time);
            } else {
                reject('error');
            }       
            });
    }

export default customFetch;