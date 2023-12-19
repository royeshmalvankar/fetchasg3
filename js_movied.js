const api_key = "f488dce1"
let dv= document.getElementById("sb")
let btn = document.getElementById("scrhbt")
let sch = document.getElementById("details")
btn.addEventListener('click',function(){
    window.location.href ="./omdb.html"
})

    let imdb=localStorage.getItem("imdbID")
    let info=localStorage.getItem("plot")

    fetch(`http://www.omdbapi.com/?apikey=${api_key}&&i=${imdb}&plot=${info}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        sdata(res)
    })

    if (imdb) 
        {
        } 
      else {
        let notf = document.createElement("div")
        console.log("something went wrong");
        let titleE = document.createElement("h1")
        titleE.textContent="Something Went Wrong"
        notf.appendChild(titleE)
        sch.appendChild(notf)   
      }
       
      function sdata(m) {
        sch.innerHTML = ""  
        let mCard = document.createElement("div")
        mCard.className = "card"

        let posterE = document.createElement("img")
        posterE.src = m.Poster

        let titleE = document.createElement("p")
        titleE.textContent = `Title :  ${ m.Title}`

        let yearE = document.createElement("p")
        yearE.textContent = `Year :   ${m.Year}`

        let typeE = document.createElement("p")
        typeE.textContent = `Type :  ${m.Type}`

        let ratedE = document.createElement("p")
        ratedE.textContent = `Rated :  ${m.Rated}`

        let releasedE = document.createElement("p")
        releasedE.textContent = `Released :  ${m.Released}`

        let runtimeE = document.createElement("p")
        runtimeE.textContent = `Runtime :  ${m.Runtime}`

        let genreE = document.createElement("p")
        genreE.textContent = `Genre :  ${m.Genre}`

        let directorE = document.createElement("p")
        directorE.textContent = `Director :  ${m.Director}`

        let writerE = document.createElement("p")
        writerE.textContent = `Writer :  ${m.Writer}`

        let plotE = document.createElement("p")
        plotE.textContent = `Plot :  ${m.Plot}`

        let languageE = document.createElement("p")
        languageE.textContent = `Language :  ${m.Language}`

        let countryE = document.createElement("p")
        countryE.textContent = `Country :  ${m.Country}`

        let awardsE = document.createElement("p")
        awardsE.textContent = `Awards :  ${m.Awards}`

        let metascoreE = document.createElement("p")
        metascoreE.textContent = `Metascore : ${m.Metascore}`

        let imdbRatingE = document.createElement("p")
        imdbRatingE.textContent = `IMDB Rating :  ${m.imdbRating}`

        let imdbVotesE = document.createElement("p")
        imdbVotesE.textContent = `IMDB Votes :  ${ m.imdbVotes}`

        let DVDE = document.createElement("p")
        DVDE.textContent = `DVD :  ${m.DVD}`

        let boxOfficeE = document.createElement("p")
        boxOfficeE.textContent = `Box Office  :  ${m.BoxOffice}`

        let productionE = document.createElement("p")
        productionE.textContent = `Production :  ${m.Production}`

        let websiteE = document.createElement("p")
        websiteE.textContent = `Website :  ${m.Website}`

        let responseE = document.createElement("p")
        responseE.textContent = `Response :  ${m.Response}`


  mCard.append(
    posterE,
    titleE,
    yearE,
    ratedE,
    releasedE,
    runtimeE,
    genreE,
    directorE,
    writerE,
    plotE,
    languageE,
    countryE,
    awardsE,
    metascoreE,
    imdbRatingE,
    imdbVotesE,
    typeE,
    DVDE,
    boxOfficeE,
    productionE,
    websiteE,
    responseE
  )

  sch.append(mCard)
}
          