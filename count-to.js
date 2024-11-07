function countTo(limit) {
    let container = [];
    for (let i = 1; i <= limit; i++) {
        container.push(i);
    }
    return console.log(container);
}

let count = countTo(100);