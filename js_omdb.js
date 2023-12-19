const api_key = "f488dce1"
let dv= document.getElementById("sb")
let btn = document.getElementById("scrhbt")
let sch = document.getElementById("search")
let inpsc=document.getElementById("scrh")
let info= document.getElementById("info")
let rec= document.getAnimations("recomd")
btn.addEventListener('click',function(e){
    e.preventDefault()
 {

    fetch(`http://www.omdbapi.com/?apikey=${api_key}&s=${inpsc.value}&plot=${info.value}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        sdata(res.Search)
    })
}
function sdata(mlist){
    sch.innerHTML=""
    if (!mlist || mlist.length === 0) {
        let notf = document.createElement("div")
        console.log("something went wrong");
        let titleE = document.createElement("h1")
        titleE.textContent="Something Went Wrong"
        notf.appendChild(titleE)
        sch.appendChild(notf)
      } else {
        mlist.map((movie) => {
          let mCard = document.createElement("div")
          mCard.className = "card"

          let posterE = document.createElement("img")
          posterE.src = movie.Poster

          let titleE = document.createElement("p")
          titleE.textContent = `Title :  ${ movie.Title}`

          let yearE = document.createElement("p")
          yearE.textContent = `Year :   ${movie.Year}`
    
          let idE = document.createElement("p")
          idE.textContent = `IMDB-ID :   ${movie.imdbID}`
    
          let typeE = document.createElement("p")
          typeE.textContent = `Type :  ${movie.Type}`
    
          mCard.append(
            posterE,
            titleE,
            yearE,
            idE,
            typeE,
          )
    
          mCard.addEventListener("click", function (e) {
            localStorage.setItem("imdbID", movie.imdbID)
            localStorage.setItem("plot",info.value)
            location.href = "movied.html"
          })
    
          sch.append(mCard)
        })
      }
    }
})
