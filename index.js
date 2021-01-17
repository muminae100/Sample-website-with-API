function deliveryStatus(){
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json()
    )
    .then(json =>{
        document.querySelector("#loader").className = "loader";
        json.forEach(element => {
            document.getElementById("users-details").innerHTML += `
            <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.email}</td>
            <td>${element.item}</td>
            <td>${element.dateOfOrder}</td>
            <td><form> 
            <input type="checkbox" id="delivered" name="delivered" value="delivered" checked></form>
            </td>
            </tr>
            `
            
        });

    })

}