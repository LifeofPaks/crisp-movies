

const APIKEY = "04c35731a5ee918f014970082a0088b1";
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const search = document.querySelector('form')
const searchInput = document.querySelector('.search-input')

const browseMoreSearchForm = document.querySelector('.browse-more.form')
const browseMoreSearchInput = document.querySelector('.browse-more.search-input')

const browseMore = document.querySelector('.browse-more-movies')


// ===============================GET MOVIES FUNCTION======================

getMovies(APIURL)

async function getMovies(url){
  const resp = await fetch (url)
  const respData = await resp.json()

  const browseData = respData.results.slice(4)

  browseMovies(browseData)

}


// ===============================BROWSE MOVIES FUNCTION======================
function browseMovies(movies){
    browseMore.innerHTML = ''
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
        
        browseMore.appendChild(moviesEl)
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


  // ===============================BROWSE MORE SEARCH EVENT LISTENER======================
  browseMoreSearchForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const searchTerm = browseMoreSearchInput.value

    if (searchTerm){
        getMovies(SEARCHAPI + searchTerm)
        browseMoreSearchInput.value = ''
    }
  })
