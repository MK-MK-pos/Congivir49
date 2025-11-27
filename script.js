document.addEventListener('DOMContentLoaded', function() {
    
    // Полные данные фильмов
    const moviesData = {
        "Action": [
            {
                title: "Mad Max: Fury Road",
                year: 2015,
                rating: 8.1,
                overview: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
                description: "Mad Max: Fury Road is a visually stunning post-apocalyptic action film directed by George Miller. The movie features incredible practical effects, insane car chases, and a powerful feminist theme. Charlize Theron as Imperator Furiosa creates one of the most memorable characters in cinema history. The film is renowned for its minimal dialogue and maximum action approach.",
                poster: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
            },
            {
                title: "John Wick",
                year: 2014,
                rating: 7.4,
                overview: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
                description: "John Wick is a stylish neo-noir action thriller that revitalized Keanu Reeves' career and spawned an entire cinematic universe. Known for its innovative fight choreography, minimal dialogue, and detailed world-building of assassins. Each fight scene is meticulously crafted and feels incredibly realistic. The film established the 'gun-fu' style that has been widely imitated since.",
                poster: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg"
            },
            {
                title: "Die Hard",
                year: 1988,
                rating: 8.2,
                overview: "A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a Christmas party.",
                description: "Die Hard is the quintessential Christmas action movie that set the standard for the entire genre. Bruce Willis as John McClane created the archetype of the everyman anti-hero who uses wit and resourcefulness to battle highly organized terrorists. Alan Rickman's portrayal of Hans Gruber remains one of the most charismatic villains in film history. The film perfectly balances intense action with clever humor.",
                poster: "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
            }
        ],
        "Drama": [
            {
                title: "The Shawshank Redemption",
                year: 1994,
                rating: 9.3,
                overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                description: "The Shawshank Redemption is an epic drama about hope, friendship, and human dignity in the most inhumane conditions. Based on a Stephen King novella, it tells the story of Andy Dufresne, a banker wrongly convicted of murdering his wife. His friendship with Ellis Boyd 'Red' Redding forms the emotional core of this deeply moving story. The film's message about maintaining hope in dark times has resonated with audiences worldwide.",
                poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
            },
            {
                title: "The Green Mile",
                year: 1999,
                rating: 8.6,
                overview: "The lives of guards on Death Row are affected by one of their charges: a black man accused of murder, who has a mysterious gift.",
                description: "The Green Mile is magical realism at its finest from Frank Darabont. The film explores themes of miracles, injustice, and human cruelty through the story of John Coffey, a prisoner with supernatural healing abilities. Tom Hanks as prison guard Paul Edgecomb and Michael Clarke Duncan as Coffey create unforgettable performances that stay with viewers long after watching. The film masterfully blends fantasy elements with hard-hitting drama.",
                poster: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg"
            },
            {
                title: "Fight Club",
                year: 1999,
                rating: 8.8,
                overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                description: "Fight Club is a cult satire of consumer society and the crisis of masculinity. David Fincher created a dark, provocative film that became the voice of a generation. Brad Pitt as Tyler Durden and Edward Norton as the unnamed narrator create one of cinema's most memorable duos. Known for its philosophical monologues and shocking plot twist, the film continues to spark discussion about modern society and personal identity.",
                poster: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg"
            }
        ],
        "Sci-Fi": [
            {
                title: "Interstellar",
                year: 2014,
                rating: 8.6,
                overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                description: "Interstellar is epic science fiction from Christopher Nolan that combines hard scientific accuracy with deep human emotion. The film explores themes of love, time, gravity, and human survival. The visual effects, particularly the depiction of the black hole Gargantua, were created using real physics equations and received high praise from the scientific community. Hans Zimmer's soundtrack has become iconic in its own right.",
                poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
            },
            {
                title: "Blade Runner 2049",
                year: 2017,
                rating: 8.0,
                overview: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.",
                description: "Blade Runner 2049 is a visually stunning sequel to Ridley Scott's classic. Denis Villeneuve created a melancholic, philosophical film that explores the nature of humanity, memory, and identity. Roger Deakins earned a well-deserved Oscar for his cinematography work. The film expands Philip K. Dick's universe while asking complex questions about what makes us human in an increasingly artificial world.",
                poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UX1000_.jpg"
            },
            {
                title: "The Matrix",
                year: 1999,
                rating: 8.7,
                overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
                description: "The Matrix is a revolutionary sci-fi action film that changed the visual language of cinema. The Wachowskis created a complex philosophical parable inspired by Baudrillard's works and Eastern philosophy. The film is famous for its innovative 'bullet time' effects, martial arts choreography, and iconic quotes. Keanu Reeves as Neo created one of pop culture's most recognizable characters, and the film's exploration of reality versus simulation remains profoundly relevant.",
                poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
            }
        ],
        "Comedy": [
            {
                title: "The Mask",
                year: 1994,
                rating: 6.9,
                overview: "Bank clerk Stanley Ipkiss is transformed into a manic superhero when he wears a mysterious mask.",
                description: "The Mask is a wildly inventive comedy starring Jim Carrey at the peak of his physical comedy talents. Carrey demonstrates his unique facial flexibility and comedic genius, transforming from a shy bank clerk into a charismatic superhero. The film combines animation, special effects, and physical comedy to create a unique style. Cameron Diaz made her debut in this film and instantly became a star. The Mask remains one of the most rewatchable comedies of the 90s.",
                poster: "https://m.media-amazon.com/images/M/MV5BOWExYjI5MzktNTRhNi00Nzg2LThkZmQtYWVkYjRlYWI2MDQ4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg"
            },
            {
                title: "Superbad",
                year: 2007,
                rating: 7.6,
                overview: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
                description: "Superbad is a cult classic teen comedy that accurately and humorously depicts all the horrors and joys of senior year. The screenplay was written by Seth Rogen and Evan Goldberg when they were just 13 years old. The film is known for its authentic dialogue, memorable characters, and situations that are both hilarious and touching. Michael Cera and Jonah Hill created one of the most heartfelt comedy duos in film history.",
                poster: "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_FMjpg_UX1000_.jpg"
            },
            {
                title: "Home Alone",
                year: 1990,
                rating: 7.7,
                overview: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family.",
                description: "Home Alone is a classic Christmas comedy that has become beloved across multiple generations. Macaulay Culkin as Kevin McCallister created one of the most recognizable child characters in film history. The film combines touching family drama with silent film-style physical gags as Kevin sets elaborate traps for burglars. John Hughes wrote the screenplay, which perfectly balances humor and heartwarming moments, making it a holiday staple worldwide.",
                poster: "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
            }
        ]
    };

    // Featured movies data with updated posters
    const featuredMovies = {
        "madmax": {
            title: "Mad Max: Fury Road",
            year: 2015,
            rating: 8.1,
            description: "A post-apocalyptic action masterpiece directed by George Miller. In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is desperate to make it back to her childhood homeland.",
            poster: "https://m.media-amazon.com/images/S/pv-target-images/e629b804d2a22f8dff121cc0d251d2d23f0689c83a0af9941fbd127a250c10eb._SX1080_FMjpg_.jpg",
            genre: "Action"
        },
        "shawshank": {
            title: "The Shawshank Redemption",
            year: 1994,
            rating: 9.3,
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. This timeless classic explores hope, friendship, and the resilience of the human spirit in the face of injustice.",
            poster: "https://haryantosatria.wordpress.com/wp-content/uploads/2013/06/shawshank.jpg",
            genre: "Drama"
        },
        "interstellar": {
            title: "Interstellar",
            year: 2014,
            rating: 8.6,
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. This epic sci-fi adventure explores love, time, and human survival across dimensions.",
            poster: "https://n1s1.hsmedia.ru/d5/dd/88/d5dd8844f16b3217d32fdb68babb826d/5000x2312_0xXG9AwvEa_2935154968444919576.jpg",
            genre: "Sci-Fi"
        },
        "matrix": {
            title: "The Matrix",
            year: 1999,
            rating: 8.7,
            description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. This revolutionary film changed action cinema forever.",
            poster: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRS_jUYOWbmjz_3_glacL1IarASWYAztOFzX0njqwwp95OXcnPWms-8MHRv2YZh2FOFU0M0KFUI1L4NKpC15MRUTnQN8nMxQc7CH.jpg?r=032",
            genre: "Sci-Fi"
        }
    };

    // Состояние
    let likes = JSON.parse(localStorage.getItem('bm_likes') || '[]');
    let favorites = JSON.parse(localStorage.getItem('bm_favs') || '[]');
    let currentGenre = "Action";
    let currentFeatured = null;
    
    // Рейтинг с отслеживанием по IP
    let ratings = JSON.parse(localStorage.getItem('bm_ratings') || '{"total": 0, "sum": 0, "average": 0, "voters": {}}');
    let userRating = 0;
    let userHasRated = false;

    // DOM элементы
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
    const avgRating = document.getElementById('avgRating');
    const totalRatings = document.getElementById('totalRatings');
    const searchInput = document.getElementById('search');
    const sortSelect = document.getElementById('sort');
    const submitPoll = document.getElementById('submitPoll');
    const pollResult = document.getElementById('pollResult');

    // Функция определения мобильного устройства
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
               window.innerWidth <= 768;
    }

    // Функция установки мобильного вида
    function setMobileView(isMobile) {
        if (isMobile) {
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
        }
    }

    // Генерация уникального ID пользователя (упрощенная версия)
    function getUserId() {
        let userId = localStorage.getItem('bm_userId');
        if (!userId) {
            userId = 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
            localStorage.setItem('bm_userId', userId);
        }
        return userId;
    }

    // Проверка, голосовал ли пользователь
    function checkUserVote() {
        const userId = getUserId();
        userHasRated = ratings.voters && ratings.voters[userId];
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

    // Инициализация рейтинга
    function initializeRating() {
        avgRating.textContent = ratings.average.toFixed(1);
        totalRatings.textContent = ratings.total;
        checkUserVote();
    }

    // Функция сортировки фильмов
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

    // Функция поиска фильмов
    function searchMovies(movies, query) {
        if (!query) return movies;
        
        const lowerQuery = query.toLowerCase();
        return movies.filter(movie => 
            movie.title.toLowerCase().includes(lowerQuery) ||
            movie.overview.toLowerCase().includes(lowerQuery) ||
            movie.description.toLowerCase().includes(lowerQuery)
        );
    }

    // Функция для создания карточек фильмов для определенного жанра
    function createMovieCardsForGenre(genre, movies = null) {
        let moviesToShow = movies || moviesData[genre] || [];
        const sortBy = sortSelect.value;
        const searchQuery = searchInput.value;
        
        // Применяем поиск и сортировку
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

    // Функция для показа жанра
    function showGenre(genre) {
        const genreIndex = Array.from(segButtons).findIndex(btn => btn.dataset.genre === genre);
        if (genreIndex === -1) return;

        // Обновляем активную кнопку
        segButtons.forEach(btn => btn.classList.remove('active'));
        segButtons[genreIndex].classList.add('active');

        // Прокручиваем карусель
        const viewportWidth = viewport.clientWidth;
        carousel.style.transform = `translateX(-${genreIndex * viewportWidth}px)`;
        currentGenre = genre;
    }

    // Функция обновления отображения карточек
    function updateMovieCards() {
        const genreSections = document.querySelectorAll('.panel-col');
        
        genreSections.forEach(section => {
            const genre = section.querySelector('.grid').dataset.genre;
            if (genre !== 'Favorites') {
                const grid = section.querySelector('.grid');
                grid.innerHTML = createMovieCardsForGenre(genre);
            }
        });
        
        // Добавляем обработчики клика на карточки
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.classList.contains('like') && !e.target.classList.contains('fav')) {
                    const movieData = JSON.parse(this.getAttribute('data-movie'));
                    openModal(movieData);
                }
            });
        });
    }

    // Функция инициализации карусели
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

        // Добавляем секцию для избранного
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

        // Добавляем обработчики клика на карточки
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.classList.contains('like') && !e.target.classList.contains('fav')) {
                    const movieData = JSON.parse(this.getAttribute('data-movie'));
                    openModal(movieData);
                }
            });
        });
    }

    // Функция установки featured movie
    function setFeaturedMovie(movieKey) {
        const movie = featuredMovies[movieKey];
        if (!movie) return;

        currentFeatured = movie;
        heroTitle.textContent = movie.title;
        heroTag.textContent = movie.description;
        heroPoster.innerHTML = `<img src="${movie.poster}" alt="${movie.title}" style="width: 100%; height: 100%; object-fit: cover;">`;

        // Обновляем активную кнопку
        featuredBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.featured-btn[data-movie="${movieKey}"]`).classList.add('active');
    }

    // Функция случайного featured movie
    function setRandomFeatured() {
        const keys = Object.keys(featuredMovies);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        setFeaturedMovie(randomKey);
    }

    // Функция открытия модального окна
    function openModal(movie) {
        modalImg.src = movie.poster;
        modalTitle.textContent = movie.title;
        modalMeta.textContent = `${movie.year} • ${movie.rating}`;
        modalDesc.textContent = movie.description;
        
        // Обновляем состояние кнопок
        const modalLikeBtn = document.getElementById('modalLike');
        const modalFavBtn = document.getElementById('modalFav');
        
        modalLikeBtn.innerHTML = likes.includes(movie.title) ? '❤️ Liked' : '🤍 Like';
        modalLikeBtn.className = `iconBtn small ${likes.includes(movie.title) ? 'active' : ''}`;
        
        modalFavBtn.innerHTML = favorites.includes(movie.title) ? '⭐ In Favorites' : '☆ Add to Favorites';
        modalFavBtn.className = `iconBtn small ${favorites.includes(movie.title) ? 'active' : ''}`;
        
        // Сохраняем текущий фильм в data-атрибут
        modal.setAttribute('data-current-movie', JSON.stringify(movie));
        
        modal.classList.add('show');
        
        // Предотвращаем прокрутку заднего фона
        document.body.style.overflow = 'hidden';
    }

    // Функция закрытия модального окна
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    // Функция лайка
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
        
        // Обновляем кнопку в модальном окне если она открыта
        const modalLikeBtn = document.getElementById('modalLike');
        if (modal.classList.contains('show')) {
            const currentMovie = JSON.parse(modal.getAttribute('data-current-movie'));
            if (currentMovie.title === title) {
                modalLikeBtn.innerHTML = likes.includes(title) ? '❤️ Liked' : '🤍 Like';
                modalLikeBtn.classList.toggle('active', likes.includes(title));
            }
        }
    }

    // Функция избранного
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
        
        // Обновляем кнопку в модальном окне если она открыта
        const modalFavBtn = document.getElementById('modalFav');
        if (modal.classList.contains('show')) {
            const currentMovie = JSON.parse(modal.getAttribute('data-current-movie'));
            if (currentMovie.title === title) {
                modalFavBtn.innerHTML = favorites.includes(title) ? '⭐ In Favorites' : '☆ Add to Favorites';
                modalFavBtn.classList.toggle('active', favorites.includes(title));
            }
        }
        
        // Перезагружаем карусель чтобы обновить секцию избранного
        if (currentGenre === 'Favorites') {
            initializeCarousel();
            showGenre('Favorites');
        }
    }

    // Функция рейтинга
    function setRating(rating) {
        if (userHasRated) {
            ratingResult.textContent = "You have already rated our portal. Thank you!";
            return;
        }

        userRating = rating;
        const userId = getUserId();
        
        // Обновляем звезды
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
        
        // Сохраняем рейтинг
        ratings.total += 1;
        ratings.sum += rating;
        ratings.average = ratings.sum / ratings.total;
        
        // Сохраняем информацию о голосовавшем
        if (!ratings.voters) {
            ratings.voters = {};
        }
        ratings.voters[userId] = {
            rating: rating,
            timestamp: Date.now()
        };
        
        localStorage.setItem('bm_ratings', JSON.stringify(ratings));
        
        // Показываем результат
        ratingResult.textContent = `Thank you for your ${rating} star rating!`;
        ratingMessage.textContent = "Thank you for your feedback!";
        userHasRated = true;
        
        // Обновляем статистику
        initializeRating();
    }

    // Функция для опроса
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

        // Убираем дубликаты
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
            
            // Показываем achievement
            const achievements = document.getElementById('achievements');
            achievements.innerHTML = `<div class="badge">🎯 Movie Matchmaker</div>`;
        } else {
            pollResult.textContent = "No specific recommendations found. Try selecting different preferences.";
        }
    }

    // Обработчики событий для модального окна
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

    // Обработчики для featured movies
    featuredBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            setFeaturedMovie(this.dataset.movie);
        });
    });

    // Обработчик для кнопки открытия featured movie
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

    // Обработчик для случайного featured movie
    randomBtn.addEventListener('click', setRandomFeatured);

    // Обработчики для рейтинга
    stars.forEach(star => {
        star.addEventListener('click', function() {
            if (!userHasRated) {
                setRating(parseInt(this.dataset.rating));
            }
        });
    });

    // Обработчики для поиска и сортировки
    searchInput.addEventListener('input', updateMovieCards);
    sortSelect.addEventListener('change', updateMovieCards);

    // Обработчик для опроса
    submitPoll.addEventListener('click', handlePollSubmission);

    // Закрытие модального окна при клике вне его
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Обработчики для кнопок жанров
    segButtons.forEach(button => {
        button.addEventListener('click', function() {
            showGenre(this.dataset.genre);
        });
    });

    // Инициализация
    initializeCarousel();
    showGenre('Action');
    initializeRating();
    
    // Устанавливаем случайный featured movie при загрузке
    setRandomFeatured();
    
    // Автоматическое определение мобильного устройства
    const isMobile = isMobileDevice();
    setMobileView(isMobile);
    
    document.getElementById('loader').style.display = 'none';

    // Делаем функции глобальными для обработчиков в HTML
    window.toggleLike = toggleLike;
    window.toggleFav = toggleFav;
});