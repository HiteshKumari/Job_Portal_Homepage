async function getUsers() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await res.json();

        for (let i = 0; i < 5; i++) {
            console.log(data[i].name);
        }
    } catch (err) {
        console.log("Error:", err);
    }
}

getUsers();
