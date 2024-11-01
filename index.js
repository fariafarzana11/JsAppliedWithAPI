 const randomUser = ()=>{
     fetch('https://randomuser.me/api/?results=50')
     .then(res=>res.json())
     .then(data=>showUser(data.results))
 }

 const showUser = (values) =>{
    // for(const value of values){
    //     console.log(value.gender)
    // }
    const mainDiv = document.getElementById('main-div')
    const result = values.forEach(value=>{
        console.log(value)

        const div = document.createElement('div')
        div.style.border = '2px solid black'
        div.innerHTML = `
        <p>${value.name.title} ${value.name.first} ${value.name.last}</p>
        <img src="${value.picture.thumbnail}" alt=""> <br>
        <button onclick ="anotherFunction(${value.login.uuid})">Click Me</button>
        `
        mainDiv.appendChild(div)
    })
 }

const anotherFunction=(value)=>{
    console.log(value)
}

 randomUser()
 