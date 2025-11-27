document.addEventListener('DOMContentLoaded', function() {
    
    // Check if this is the first visit
    const isFirstVisit = !localStorage.getItem('bm_visited');
    
    if (isFirstVisit) {
        // Show loader only on first visit
        initializeLoader();
        localStorage.setItem('bm_visited', 'true');
    } else {
        // Hide loader immediately on subsequent visits
        document.getElementById('loader').style.display = 'none';
        initializeApp();
    }

    // Creative loading sequence (only for first visit)
    function initializeLoader() {
        const loader = document.getElementById('loader');
        const progressBar = document.getElementById('loaderProgress');
        const progressPercent = document.getElementById('progressPercent');
        const details = document.querySelectorAll('.loader-detail');
        
        let progress = 0;
        const totalTime = 5000; // 5 seconds
        const interval = 50;
        const steps = totalTime / interval;
        const increment = 100 / steps;
        
        const progressInterval = setInterval(() => {
            progress += increment;
            if (progress >= 100) {
                progress = 100;
                clearInterval(progressInterval);
                
                // Final completion
                progressBar.style.width = '100%';
                progressPercent.textContent = '100%';
                
                // Hide loader and show content
                setTimeout(() => {
                    loader.style.opacity = '0';
                    setTimeout(() => {
                        loader.style.display = 'none';
                        initializeApp();
                    }, 500);
                }, 500);
                
            } else {
                progressBar.style.width = progress + '%';
                progressPercent.textContent = Math.floor(progress) + '%';
                
                // Update loading details at certain percentages
                if (Math.floor(progress) === 25) {
                    details[0].textContent = 'Loading movie database...';
                } else if (Math.floor(progress) === 50) {
                    details[1].textContent = 'Processing featured content...';
                } else if (Math.floor(progress) === 75) {
                    details[2].textContent = 'Finalizing experience...';
                }
            }
        }, interval);
    }
    
    // Initialize the app after loading
    function initializeApp() {
        // Movie data
        const moviesData = {
            "Action": [
                {
                    title: "Mad Max: Fury Road",
                    year: 2015,
                    rating: 8.1,
                    overview: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
                    description: "Mad Max: Fury Road is a visually stunning post-apocalyptic action film directed by George Miller. The movie features incredible practical effects, insane car chases, and a powerful feminist theme. Charlize Theron as Imperator Furiosa creates one of the most memorable characters in cinema history.",
                    poster: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
                },
                {
                    title: "John Wick",
                    year: 2014,
                    rating: 7.4,
                    overview: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
                    description: "John Wick is a stylish neo-noir action thriller that revitalized Keanu Reeves' career and spawned an entire cinematic universe. Known for its innovative fight choreography and detailed world-building of assassins.",
                    poster: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg"
                },
                {
                    title: "Die Hard",
                    year: 1988,
                    rating: 8.2,
                    overview: "A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a Christmas party.",
                    description: "Die Hard is the quintessential Christmas action movie that set the standard for the entire genre. Bruce Willis as John McClane created the archetype of the everyman anti-hero.",
                    poster: "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
                }
            ],
            "Drama": [
                {
                    title: "The Shawshank Redemption",
                    year: 1994,
                    rating: 9.3,
                    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                    description: "The Shawshank Redemption is an epic drama about hope, friendship, and human dignity in the most inhumane conditions. Based on a Stephen King novella.",
                    poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
                },
                {
                    title: "The Green Mile",
                    year: 1999,
                    rating: 8.6,
                    overview: "The lives of guards on Death Row are affected by one of their charges: a black man accused of murder, who has a mysterious gift.",
                    description: "The Green Mile is magical realism at its finest from Frank Darabont. The film explores themes of miracles, injustice, and human cruelty.",
                    poster: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg"
                },
                {
                    title: "Fight Club",
                    year: 1999,
                    rating: 8.8,
                    overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                    description: "Fight Club is a cult satire of consumer society and the crisis of masculinity. David Fincher created a dark, provocative film.",
                    poster: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg"
                }
            ],
            "Sci-Fi": [
                {
                    title: "Interstellar",
                    year: 2014,
                    rating: 8.6,
                    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                    description: "Interstellar is epic science fiction from Christopher Nolan that combines hard scientific accuracy with deep human emotion.",
                    poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
                },
                {
                    title: "Blade Runner 2049",
                    year: 2017,
                    rating: 8.0,
                    overview: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.",
                    description: "Blade Runner 2049 is a visually stunning sequel to Ridley Scott's classic. Denis Villeneuve created a melancholic, philosophical film.",
                    poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UX1000_.jpg"
                },
                {
                    title: "The Matrix",
                    year: 1999,
                    rating: 8.7,
                    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
                    description: "The Matrix is a revolutionary sci-fi action film that changed the visual language of cinema.",
                    poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
                }
            ],
            "Comedy": [
                {
                    title: "The Mask",
                    year: 1994,
                    rating: 6.9,
                    overview: "Bank clerk Stanley Ipkiss is transformed into a manic superhero when he wears a mysterious mask.",
                    description: "The Mask is a wildly inventive comedy starring Jim Carrey at the peak of his physical comedy talents.",
                    poster: "https://m.media-amazon.com/images/M/MV5BOWExYjI5MzktNTRhNi00Nzg2LThkZmQtYWVkYjRlYWI2MDQ4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg"
                },
                {
                    title: "Superbad",
                    year: 2007,
                    rating: 7.6,
                    overview: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
                    description: "Superbad is a cult classic teen comedy that accurately and humorously depicts all the horrors and joys of senior year.",
                    poster: "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_FMjpg_UX1000_.jpg"
                },
                {
                    title: "Home Alone",
                    year: 1990,
                    rating: 7.7,
                    overview: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family.",
                    description: "Home Alone is a classic Christmas comedy that has become beloved across multiple generations.",
                    poster: "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
                }
            ]
        };

        // Featured movies data
        const featuredMovies = {
            "madmax": {
                title: "Mad Max: Fury Road",
                year: 2015,
                rating: 8.1,
                description: "A post-apocalyptic action masterpiece directed by George Miller. In a stark desert landscape where humanity is broken, two rebels just might be able to restore order.",
                poster: "https://m.media-amazon.com/images/S/pv-target-images/e629b804d2a22f8dff121cc0d251d2d23f0689c83a0af9941fbd127a250c10eb._SX1080_FMjpg_.jpg",
                genre: "Action"
            },
            "shawshank": {
                title: "The Shawshank Redemption",
                year: 1994,
                rating: 9.3,
                description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. This timeless classic explores hope and friendship.",
                poster: "https://haryantosatria.wordpress.com/wp-content/uploads/2013/06/shawshank.jpg",
                genre: "Drama"
            },
            "interstellar": {
                title: "Interstellar",
                year: 2014,
                rating: 8.6,
                description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. This epic sci-fi adventure explores love, time, and human survival.",
                poster: "https://n1s1.hsmedia.ru/d5/dd/88/d5dd8844f16b3217d32fdb68babb826d/5000x2312_0xXG9AwvEa_2935154968444919576.jpg",
                genre: "Sci-Fi"
            },
            "matrix": {
                title: "The Matrix",
                year: 1999,
                rating: 8.7,
                description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. This revolutionary film changed action cinema.",
                poster: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRS_jUYOWbmjz_3_glacL1IarASWYAztOFzX0njqwwp95OXcnPWms-8MHRv2YZh2FOFU0M0KFUI1L4NKpC15MRUTnQN8nMxQc7CH.jpg?r=032",
                genre: "Sci-Fi"
            }
        };

        // State
        let likes = JSON.parse(localStorage.getItem('bm_likes') || '[]');
        let favorites = JSON.parse(localStorage.getItem('bm_favs') || '[]');
        let currentGenre = "Action";
        let currentFeatured = null;
        
        // Global rating (reset to zero)
        let globalRatings = {
            total: 0,
            sum: 0,
            average: 0
        };
        let userHasRated = false;

        // DOM elements
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modalImg');
        const modalTitle = document.getElementById('modalTitle');
        const modalMeta = document.getElementById('modalMeta');
        const modalDesc = document.getElementById('modalDesc');
        const carousel = document.getElementById('carousel');
        const viewport = document.getElementById('viewport');
        const segButtons = document.querySelectorAll('#seg button');
        const heroTitle = document.getElementById('heroTitle');
        const heroTag = document.getElementById('heroTag');
        const heroPoster = document.getElementById('heroPoster');
        const playHeroBtn = document.getElementById('playHero');
        const randomBtn = document.getElementById('randomBtn');
        const featuredBtns = document.querySelectorAll('.featured-btn');
        const stars = document.querySelectorAll('.star');
        const ratingResult = document.getElementById('ratingResult');
        const ratingMessage = document.getElementById('ratingMessage');
        const globalAvg = document.getElementById('globalAvg');
        const globalTotal = document.getElementById('globalTotal');
        const searchInput = document.getElementById('search');
        const sortSelect = document.getElementById('sort');
        const submitPoll = document.getElementById('submitPoll');
        const pollResult = document.getElementById('pollResult');

        // Mobile device detection
        function isMobileDevice() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                   window.innerWidth <= 768;
        }

        // Set mobile view
        function setMobileView(isMobile) {
            if (isMobile) {
                document.body.classList.add('mobile-view');
            } else {
                document.body.classList.remove('mobile-view');
            }
        }

        // Generate unique user ID
        function getUserId() {
            let userId = localStorage.getItem('bm_userId');
            if (!userId) {
                userId = 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
                localStorage.setItem('bm_userId', userId);
            }
            return userId;
        }

        // Check if user has voted
        function checkUserVote() {
            const userId = getUserId();
            userHasRated = localStorage.getItem('bm_userRated') === 'true';
            if (userHasRated) {
                ratingMessage.textContent = "You have already rated our portal. Thank you!";
                stars.forEach(star => {
                    star.classList.add('rated');
                    star.style.cursor = 'not-allowed';
                });
            } else {
                ratingMessage.textContent = "Please rate your experience (one-time rating)";
            }
        }

        // Initialize rating
        function initializeRating() {
            globalAvg.textContent = globalRatings.average.toFixed(1);
            globalTotal.textContent = globalRatings.total.toLocaleString();
            checkUserVote();
        }

        // Sort movies
        function sortMovies(movies, sortBy) {
            const sortedMovies = [...movies];
            switch(sortBy) {
                case 'name':
                    return sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
                case 'year':
                    return sortedMovies.sort((a, b) => b.year - a.year);
                case 'rating':
                    return sortedMovies.sort((a, b) => b.rating - a.rating);
                default:
                    return sortedMovies;
            }
        }

        // Search movies
        function searchMovies(movies, query) {
            if (!query) return movies;
            
            const lowerQuery = query.toLowerCase();
            return movies.filter(movie => 
                movie.title.toLowerCase().includes(lowerQuery) ||
                movie.overview.toLowerCase().includes(lowerQuery) ||
                movie.description.toLowerCase().includes(lowerQuery)
            );
        }

        // Create movie cards for genre
        function createMovieCardsForGenre(genre, movies = null) {
            let moviesToShow = movies || moviesData[genre] || [];
            const sortBy = sortSelect.value;
            const searchQuery = searchInput.value;
            
            // Apply search and sort
            moviesToShow = searchMovies(moviesToShow, searchQuery);
            moviesToShow = sortMovies(moviesToShow, sortBy);
            
            if (moviesToShow.length === 0) {
                return `<div style="padding:30px;color:var(--muted);text-align:center">No movies found matching your search</div>`;
            }
            
            return moviesToShow.map(movie => `
                <div class="card show" data-movie='${JSON.stringify(movie).replace(/'/g, "&#39;")}'>
                    <div class="posterSmall">
                        <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'450\'><rect width=\'100%\' height=\'100%\' fill=\'%230f1724\'/><text x=\'50%\' y=\'50%\' font-family=\'Arial\' font-size=\'20\' fill=\'white\' text-anchor=\'middle\'>${movie.title}</text></svg>'">
                    </div>
                    <div class="titleRow">
                        <div class="title">${movie.title}</div>
                        <div class="metaSmall">${movie.year} • ${movie.rating}</div>
                    </div>
                    <div class="desc">${movie.overview}</div>
                    <div class="rowBtns">
                        <div class="pill">${genre}</div>
                        <button class="like ${likes.includes(movie.title) ? 'active' : ''}" onclick="event.stopPropagation(); toggleLike('${movie.title.replace(/'/g, "\\'")}', this)">
                            ${likes.includes(movie.title) ? '❤️ Liked' : '🤍 Like'}
                        </button>
                        <button class="fav ${favorites.includes(movie.title) ? 'active' : ''}" onclick="event.stopPropagation(); toggleFav('${movie.title.replace(/'/g, "\\'")}', this)">
                            ${favorites.includes(movie.title) ? '⭐ In Favorites' : '☆ Add to Favorites'}
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Show genre
        function showGenre(genre) {
            const genreIndex = Array.from(segButtons).findIndex(btn => btn.dataset.genre === genre);
            if (genreIndex === -1) return;

            // Update active button
            segButtons.forEach(btn => btn.classList.remove('active'));
            segButtons[genreIndex].classList.add('active');

            // Scroll carousel
            const viewportWidth = viewport.clientWidth;
            carousel.style.transform = `translateX(-${genreIndex * viewportWidth}px)`;
            currentGenre = genre;
        }

        // Update movie cards
        function updateMovieCards() {
            const genreSections = document.querySelectorAll('.panel-col');
            
            genreSections.forEach(section => {
                const genre = section.querySelector('.grid').dataset.genre;
                if (genre !== 'Favorites') {
                    const grid = section.querySelector('.grid');
                    grid.innerHTML = createMovieCardsForGenre(genre);
                }
            });
            
            // Add click handlers to cards
            document.querySelectorAll('.card').forEach(card => {
                card.addEventListener('click', function(e) {
                    if (!e.target.classList.contains('like') && !e.target.classList.contains('fav')) {
                        const movieData = JSON.parse(this.getAttribute('data-movie'));
                        openModal(movieData);
                    }
                });
            });
        }

        // Initialize carousel
        function initializeCarousel() {
            carousel.innerHTML = '';
            
            Object.keys(moviesData).forEach(genre => {
                const genreSection = document.createElement('div');
                genreSection.className = 'panel-col';
                genreSection.innerHTML = `
                    <div style="padding:8px">
                        <h3 class="genreTitle">${genre}</h3>
                        <div class="grid" data-genre="${genre}">
                            ${createMovieCardsForGenre(genre)}
                        </div>
                    </div>
                `;
                carousel.appendChild(genreSection);
            });

            // Add favorites section
            const favoritesSection = document.createElement('div');
            favoritesSection.className = 'panel-col';
            favoritesSection.innerHTML = `
                <div style="padding:8px">
                    <h3 class="genreTitle">Favorites</h3>
                    <div class="grid" data-genre="Favorites">
                        ${favorites.length === 0 ? '<div style="padding:30px;color:var(--muted);text-align:center">No favorites yet</div>' : 
                          favorites.map(title => {
                              const movie = Object.values(moviesData).flat().find(m => m.title === title);
                              return movie ? `
                                <div class="card show" data-movie='${JSON.stringify(movie).replace(/'/g, "&#39;")}'>
                                    <div class="posterSmall">
                                        <img src="${movie.poster}" alt="${movie.title}">
                                    </div>
                                    <div class="titleRow">
                                        <div class="title">${movie.title}</div>
                                        <div class="metaSmall">${movie.year} • ${movie.rating}</div>
                                    </div>
                                    <div class="desc">${movie.overview}</div>
                                    <div class="rowBtns">
                                        <div class="pill">Favorite</div>
                                        <button class="like active" onclick="event.stopPropagation(); toggleLike('${movie.title.replace(/'/g, "\\'")}', this)">❤️ Liked</button>
                                        <button class="fav active" onclick="event.stopPropagation(); toggleFav('${movie.title.replace(/'/g, "\\'")}', this)">⭐ In Favorites</button>
                                    </div>
                                </div>
                              ` : '';
                          }).join('')}
                    </div>
                </div>
            `;
            carousel.appendChild(favoritesSection);

            // Add click handlers to cards
            document.querySelectorAll('.card').forEach(card => {
                card.addEventListener('click', function(e) {
                    if (!e.target.classList.contains('like') && !e.target.classList.contains('fav')) {
                        const movieData = JSON.parse(this.getAttribute('data-movie'));
                        openModal(movieData);
                    }
                });
            });
        }

        // Set featured movie
        function setFeaturedMovie(movieKey) {
            const movie = featuredMovies[movieKey];
            if (!movie) return;

            currentFeatured = movie;
            heroTitle.textContent = movie.title;
            heroTag.textContent = movie.description;
            heroPoster.innerHTML = `<img src="${movie.poster}" alt="${movie.title}" style="width: 100%; height: 100%; object-fit: cover;">`;

            // Update active button
            featuredBtns.forEach(btn => btn.classList.remove('active'));
            document.querySelector(`.featured-btn[data-movie="${movieKey}"]`).classList.add('active');
        }

        // Set random featured movie
        function setRandomFeatured() {
            const keys = Object.keys(featuredMovies);
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            setFeaturedMovie(randomKey);
        }

        // Open modal
        function openModal(movie) {
            modalImg.src = movie.poster;
            modalTitle.textContent = movie.title;
            modalMeta.textContent = `${movie.year} • ${movie.rating}`;
            modalDesc.textContent = movie.description;
            
            // Update button states
            const modalLikeBtn = document.getElementById('modalLike');
            const modalFavBtn = document.getElementById('modalFav');
            
            modalLikeBtn.innerHTML = likes.includes(movie.title) ? '❤️ Liked' : '🤍 Like';
            modalLikeBtn.className = `iconBtn small ${likes.includes(movie.title) ? 'active' : ''}`;
            
            modalFavBtn.innerHTML = favorites.includes(movie.title) ? '⭐ In Favorites' : '☆ Add to Favorites';
            modalFavBtn.className = `iconBtn small ${favorites.includes(movie.title) ? 'active' : ''}`;
            
            // Save current movie in data attribute
            modal.setAttribute('data-current-movie', JSON.stringify(movie));
            
            modal.classList.add('show');
            
            // Prevent background scrolling
            document.body.style.overflow = 'hidden';
        }

        // Close modal
        function closeModal() {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }

        // Toggle like
        function toggleLike(title, element) {
            if (likes.includes(title)) {
                likes = likes.filter(t => t !== title);
                element.innerHTML = '🤍 Like';
                element.classList.remove('active');
            } else {
                likes.push(title);
                element.innerHTML = '❤️ Liked';
                element.classList.add('active');
            }
            localStorage.setItem('bm_likes', JSON.stringify(likes));
            
            // Update button in modal if open
            const modalLikeBtn = document.getElementById('modalLike');
            if (modal.classList.contains('show')) {
                const currentMovie = JSON.parse(modal.getAttribute('data-current-movie'));
                if (currentMovie.title === title) {
                    modalLikeBtn.innerHTML = likes.includes(title) ? '❤️ Liked' : '🤍 Like';
                    modalLikeBtn.classList.toggle('active', likes.includes(title));
                }
            }
        }

        // Toggle favorite
        function toggleFav(title, element) {
            if (favorites.includes(title)) {
                favorites = favorites.filter(t => t !== title);
                element.innerHTML = '☆ Add to Favorites';
                element.classList.remove('active');
            } else {
                favorites.push(title);
                element.innerHTML = '⭐ In Favorites';
                element.classList.add('active');
            }
            localStorage.setItem('bm_favs', JSON.stringify(favorites));
            
            // Update button in modal if open
            const modalFavBtn = document.getElementById('modalFav');
            if (modal.classList.contains('show')) {
                const currentMovie = JSON.parse(modal.getAttribute('data-current-movie'));
                if (currentMovie.title === title) {
                    modalFavBtn.innerHTML = favorites.includes(title) ? '⭐ In Favorites' : '☆ Add to Favorites';
                    modalFavBtn.classList.toggle('active', favorites.includes(title));
                }
            }
            
            // Reload carousel to update favorites section
            if (currentGenre === 'Favorites') {
                initializeCarousel();
                showGenre('Favorites');
            }
        }

        // Set rating
        function setRating(rating) {
            if (userHasRated) {
                ratingResult.textContent = "You have already rated our portal. Thank you!";
                return;
            }

            // Update stars
            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.add('active', 'rated');
                    star.textContent = '★';
                } else {
                    star.classList.remove('active');
                    star.textContent = '☆';
                }
                star.style.cursor = 'not-allowed';
            });
            
            // Update global rating
            globalRatings.total += 1;
            globalRatings.sum += rating;
            globalRatings.average = globalRatings.sum / globalRatings.total;
            
            // Save voter information
            localStorage.setItem('bm_userRated', 'true');
            
            // Show result
            ratingResult.textContent = `Thank you for your ${rating} star rating!`;
            ratingMessage.textContent = "Thank you for contributing to our global community!";
            userHasRated = true;
            
            // Update statistics
            initializeRating();
        }

        // Handle poll submission
        function handlePollSubmission() {
            const selectedOptions = document.querySelectorAll('.q:checked');
            
            if (selectedOptions.length === 0) {
                pollResult.textContent = "Please select at least one preference to get recommendations.";
                return;
            }

            const selectedGenres = Array.from(selectedOptions).map(option => option.dataset.map);
            const uniqueGenres = [...new Set(selectedGenres)];
            
            let recommendations = [];
            uniqueGenres.forEach(genre => {
                if (moviesData[genre]) {
                    recommendations = recommendations.concat(moviesData[genre]);
                }
            });

            // Remove duplicates
            recommendations = recommendations.filter((movie, index, self) => 
                index === self.findIndex(m => m.title === movie.title)
            );

            if (recommendations.length > 0) {
                const movieList = recommendations.slice(0, 3).map(movie => 
                    `<div style="margin: 8px 0; padding: 8px; background: rgba(255,255,255,0.05); border-radius: 6px;">
                        <strong>${movie.title}</strong> (${movie.year}) - ${movie.rating}⭐
                    </div>`
                ).join('');
                
                pollResult.innerHTML = `<div>Based on your preferences, we recommend:</div>${movieList}`;
                
                // Show achievement
                const achievements = document.getElementById('achievements');
                achievements.innerHTML = `<div class="badge">🎯 Movie Matchmaker</div>`;
            } else {
                pollResult.textContent = "No specific recommendations found. Try selecting different preferences.";
            }
        }

        // Event handlers for modal
        document.getElementById('modalClose').addEventListener('click', closeModal);
        document.getElementById('modalLike').addEventListener('click', function() {
            const currentMovie = JSON.parse(modal.getAttribute('data-current-movie'));
            if (currentMovie) {
                toggleLike(currentMovie.title, this);
            }
        });
        document.getElementById('modalFav').addEventListener('click', function() {
            const currentMovie = JSON.parse(modal.getAttribute('data-current-movie'));
            if (currentMovie) {
                toggleFav(currentMovie.title, this);
            }
        });
        document.getElementById('modalTrailer').addEventListener('click', function() {
            const currentMovie = JSON.parse(modal.getAttribute('data-current-movie'));
            if (currentMovie) {
                const query = encodeURIComponent(currentMovie.title + ' trailer');
                window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
            }
        });

        // Event handlers for featured movies
        featuredBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                setFeaturedMovie(this.dataset.movie);
            });
        });

        // Event handler for opening featured movie
        playHeroBtn.addEventListener('click', function() {
            if (currentFeatured) {
                openModal(currentFeatured);
            } else {
                setRandomFeatured();
                if (currentFeatured) {
                    openModal(currentFeatured);
                }
            }
        });

        // Event handler for random featured movie
        randomBtn.addEventListener('click', setRandomFeatured);

        // Event handlers for rating
        stars.forEach(star => {
            star.addEventListener('click', function() {
                if (!userHasRated) {
                    setRating(parseInt(this.dataset.rating));
                }
            });
        });

        // Event handlers for search and sort
        searchInput.addEventListener('input', updateMovieCards);
        sortSelect.addEventListener('change', updateMovieCards);

        // Event handler for poll
        submitPoll.addEventListener('click', handlePollSubmission);

        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Event handlers for genre buttons
        segButtons.forEach(button => {
            button.addEventListener('click', function() {
                showGenre(this.dataset.genre);
            });
        });

        // Initialize
        initializeCarousel();
        showGenre('Action');
        initializeRating();
        
        // Set random featured movie on load
        setRandomFeatured();
        
        // Auto-detect mobile device
        const isMobile = isMobileDevice();
        setMobileView(isMobile);

        // Make functions global for HTML handlers
        window.toggleLike = toggleLike;
        window.toggleFav = toggleFav;
    }
});