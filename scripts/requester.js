class Requester {
    get(url) {
        var promise = new Promise(function (resolve, reject) {
            $.ajax({
                url,
                method: "GET",
                success(response) {
                    resolve(response);
                }
            });
        });

        return promise;
    }

    putJSON(url, body, options) {
        var promise = new Promise(function (resolve, reject) {
            var headers = options || {};
            $.ajax({
                url,
                headers,
                method: "PUT",
                contentType: "application/json",
                data: JSON.stringify(body),
                success(response) {
                    resolve(response);
                },
                error(err) {
                    reject(err);
                }
            });
        });

        return promise;
    }

    postJSON(url, body, options) {
        var promise = new Promise(function (resolve, reject) {
            var headers = options || {};
            $.ajax({
                url,
                headers,
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(body),
                success(response) {
                    resolve(response);
                },
                error(err) {
                    reject(err);
                }
            });
        });

        return promise;
    }

    getJSON(url, options) {
        var promise = new Promise(function (resolve, reject) {
            var headers = options || {};
            $.ajax({
                url,
                method: "GET",
                headers: headers,
                contentType: "application/json",
                success(response) {
                    resolve(response);
                }
            });
        });

        return promise;
    }
}

let requester = new Requester();
export { requester };