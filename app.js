const btn = document.querySelector("button"),
      searchInput = document.querySelector('#search-input')

btn.addEventListener('click' , ()=>{
    const serachItem = searchInput.value
    const find = encodeURIComponent(serachItem)
    fetch(`https://pixabay.com/api/?key=23584368-f3a94be7dd4c0bc54d6da92cb&q=${find}&image_type=photo&pretty=true` , {
        method : "GET"
    })
    .then((response)=> {
        return response.json()
    })
    .then((data)=>{
        const pics = data.hits
        let html = ``;
        for (const pic of pics) { 
            html += `
            <figure>
                <img src="${pic.largeImageURL}" />
            </figure>`
        }
        document.querySelector('.main').innerHTML = html
    })
})