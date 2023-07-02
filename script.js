

const APIKEY = "04c35731a5ee918f014970082a0088b1";
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const searchIcon = document.querySelector('.search-icon')
const searchInput = document.querySelector('.search-input')
const trending = document.querySelector('.trending')
const latest = document.querySelector('.latest')



getMovies(APIURL)

  async function getMovies(url){
    const resp = await fetch (url)
    const respData = await resp.json()
    const feature = respData.results.splice(0, 4)
    const latest = respData.results.splice(0, 20)
    featuredMovies(feature)
    latestMovies(latest)
  }

  function featuredMovies(movies){
    trending.innerHTML = ''
    movies.forEach(movie=>{
        const {poster_path, release_date, title, vote_average} = movie
        const year = parseInt(release_date.substr(0,4))
        const moviesEl = document.createElement('div')
        moviesEl.classList.add('movie')
        moviesEl.innerHTML = `

        <img src="${IMGPATH + poster_path}" alt="${title}" class="poster">
        <h4 class="title">${title}</h4>
        <h4 class="year">${year}</h4>

        <div className="overlay"></div>

        <div class="rating">
            <i class="fa-solid fa-star rating-star"></i>
            <p class="rating-text">${vote_average}</p>
        </div>

        <div class="download">
            <i class="fa-solid fa-download"></i>
            <p class="download-text">Download</p>
        </div>
        `
        
        trending.appendChild(moviesEl)
    })
  }

  function latestMovies(movies){
    latest.innerHTML = ''
    movies.forEach(movie=>{
        const {poster_path, release_date, title, vote_average} = movie
        const year = parseInt(release_date.substr(0,4))
        const moviesEl = document.createElement('div')
        moviesEl.classList.add('movie')
        moviesEl.innerHTML = `
        
        <img src="${IMGPATH + poster_path}" alt="${title}" class="poster">
        <h4 class="title">${title}</h4>
        <h4 class="year">${year}</h4>
        <p class="resolution">1080p</p>

        <div class="rating">
            <i class="fa-solid fa-star rating-star"></i>
            <p class="rating-text">${vote_average}</p>
        </div>

        <div class="download">
            <i class="fa-solid fa-download"></i>
            <p class="download-text">Download</p>
        </div>

        `
        
        latest.appendChild(moviesEl)
    })
  }