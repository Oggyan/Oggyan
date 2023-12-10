

const fs = require("fs");
const http = require("http");
const url = require("url");


http.createServer((req, res) => {

    let products = JSON.parse(fs.readFileSync("./products.json", { encoding: "utf-8" }));
    let parseURL = url.parse(req.url, true);

    res.writeHead(200, {
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET,DELETE,POST,PUT",
        "access-control-allow-headers": "*"
    })

    if (req.method === "OPTIONAL") {
        res.end();
    }

    else if (req.method === "GET" && parseURL.pathname === "/products") {

        let id = parseURL.query.id;

        if (id === undefined) {
            res.write(JSON.stringify(products));
            res.end();
        }
        else {
            let product = products.find((product, index) => {
                return Number(product.id) === Number(id);
            })
            if (product !== undefined) {

                res.write(JSON.stringify(product));
                res.end();
            }
            else {
                res.write(JSON.stringify({ message: "invalid input id" }));
                res.end();
            }
        }
    }
    // else if(req.method === "POST"){

    //     res.write ("POST request incoming");
    // } 
    else if (req.method === "DELETE" && parseURL.pathname === "/products") {

        let id = parseURL.query.id;
        if (id !== undefined) {
            let indexToDelete = products.findIndex((product, index) => {
                return Number(product.id) === Number(id);
            })
            products.splice(indexToDelete, 1);

            fs.writeFile("./products.json", JSON.stringify(products), (err) => {
                if (err === null) {
                    res.write(JSON.stringify({ message: "Product is Deleted" }));
                    res.end();
                }
                else {
                    res.write(JSON.stringify({ message: "Some Problem with deleting the product" }));
                    res.end();
                }
            })
        }
        else {
            res.write(JSON.stringify({ message: "Invalide Product ID" }));
            res.end();
        }

    }

    else if (req.method === "POST" && parseURL.pathname === "/products") {

        let data = "";
        req.on("data", (chunck) => {
            data += chunck;
        })
        req.on("end", () => {
            let dataOBJ = JSON.parse(data);
            products.push(dataOBJ);

            fs.writeFile("./products.json", JSON.stringify(products), (err) => {
                if (err === null) {
                    res.write(JSON.stringify({ message: "Product added" }));
                    res.end();
                }
                else {
                    res.write(JSON.stringify({ message: "Some Problem in adding the product" }))
                    res.end();
                }

            })
        })

    }
    else if (req.method === "PUT" && parseURL.pathname === "/products") {
        let id = parseURL.query.id;
        if (id !== undefined) {
            let data = "";
            req.on("data", (chunck) => {
                data += chunck;
            })
            req.on("end", () => {

                let indexToUpdate = products.findIndex((product, index) => {
                    return Number(product.id) === Number(id);
                })
                if (indexToUpdate !== -1) {
                    products[indexToUpdate] = JSON.parse(data);
                    fs.writeFile("./products.json", JSON.stringify(products), (err) => {
                        if (err === null) {

                            res.write(JSON.stringify({ message: "Product  is Updated successfully" }));
                            res.end();
                        }
                        else {
                            res.write(JSON.stringify({ message: "Some Problem in Updating the Product" }));
                            res.end();
                        }
                    })
                }
                else {
                    res.write(JSON.stringify({ message: "Invalid Product ID" }));
                    res.end();
                }
            })
        }
        else {
            res.writeContinue(JSON.stringify({ message: "plz provide id in url" }));
            res.end();
        }
    }
    else {
        res.end();
    }

}).listen(8000, () => {
    console.log("Server is up and running");
})