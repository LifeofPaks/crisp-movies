

const APIKEY = "04c35731a5ee918f014970082a0088b1";
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const search = document.querySelector('form')
const searchInput = document.querySelector('.search-input')
const trending = document.querySelector('.trending')
const latest = document.querySelector('.latest')



// ===============================GET MOVIES FUNCTION======================

getMovies(APIURL)

  async function getMovies(url){
    const resp = await fetch (url)
    const respData = await resp.json()

    
    const feature = respData.results.slice(0, 4)
    const latest = respData.results.slice(4)

    featuredMovies(feature)
    latestMovies(latest)
  }


  // ===============================TRENDING MOVIES FUNCTION======================

  function featuredMovies(movies){
    trending.innerHTML = ''
    movies.forEach(movie=>{
        const {poster_path, release_date, title, vote_average, overview} = movie
        const year = parseInt(release_date.substr(0,4))

        const vote = vote_average.toFixed(1)
        const moviesEl = document.createElement('div')
        moviesEl.classList.add('movie')
        moviesEl.innerHTML = `
        
        <div class="img-wrapper">            
            <img src="${IMGPATH + poster_path}" alt="${title}" class="poster">

            <div class="overlay">
                 <div class="rating">
                    <i class="fa-solid fa-star rating-star"></i>
                    <p class="rating-text">${vote}</p>
                </div>
                <div class="review">
                    <h3 class="overlay-title">Overview:</h3>
                    <small class="review-text">${overview}</small>
                </div>
            </div>
        </div>

        <h4 class="title">${title}</h4>
        <h4 class="year">${year}</h4>

        <div class="download">
          <i class="fa-solid fa-download"></i>
          <p class="download-text">Download</p>
        </div>
        `
        
        trending.appendChild(moviesEl)
    })
  }




  // ===============================LATEST MOVIES FUNCTION======================

  function latestMovies(movies){
    latest.innerHTML = ''
    movies.forEach(movie=>{
        const {poster_path, release_date, title, vote_average} = movie
        const year = parseInt(release_date.substr(0,4))
        const vote = vote_average.toFixed(1)
        const moviesEl = document.createElement('div')
        moviesEl.classList.add('movie')
        moviesEl.innerHTML = `
        
        <img src="${IMGPATH + poster_path}" alt="${title}" class="poster">
        <h4 class="title">${title}</h4>
        <h4 class="year">${year}</h4>
        <p class="resolution">1080p</p>

        <div class="rating">
            <i class="fa-solid fa-star rating-star"></i>
            <p class="rating-text">${vote}</p>
        </div>

        <div class="download">
            <i class="fa-solid fa-download"></i>
            <p class="download-text">Download</p>
        </div>

        `
        
        latest.appendChild(moviesEl)
    })
  }





// ===============================SEARCH EVENT LISTENER======================
  search.addEventListener('submit', (e)=>{
    e.preventDefault()
    const searchTerm = searchInput.value

    if (searchTerm){
        getMovies(SEARCHAPI + searchTerm)
        searchInput.value = ''
    }
  })