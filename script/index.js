let minYear = 2023, minMonth = 8; // Сентябрь 2023 (месяцы в JS начинаются с 0)
let currentYear = localStorage.getItem("year") ? parseInt(localStorage.getItem("year")) : minYear;
let currentMonth = localStorage.getItem("month") ? parseInt(localStorage.getItem("month")) : minMonth;

function getNotesKey(year, month) {
    return `notes_${year}_${month}`;
}


function updateCounter() {
    let startDate = new Date(2023, 8, 2);
    let now = new Date();
    let diff = Math.floor((now - startDate) / 1000);
    let days = Math.floor(diff / 86400);
    let hours = Math.floor((diff % 86400) / 3600);
    let minutes = Math.floor((diff % 3600) / 60);
    let seconds = diff % 60;
    document.getElementById("days-counter").textContent = `Дней вместе: ${days}`;
    document.getElementById("time-counter").textContent = `Вместе уже: ${days} дн ${hours} ч ${minutes} мин ${seconds} с`;
}

function updateTime() {
    let now = new Date();
    let timeString = now.toLocaleTimeString("ru-RU", {hour12: false});
    document.getElementById("my-time").textContent = timeString;
    document.getElementById("partner-time").textContent = timeString;
}

setInterval(updateCounter, 1000);
setInterval(updateTime, 1000);
updateCounter();
updateTime();


document.addEventListener("DOMContentLoaded", function () {
    // Скрываем сердечки при загрузке страницы
    let hearts = document.querySelectorAll(".bubble");
    hearts.forEach(heart => {
        heart.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const bubblesContainer = document.querySelector(".bubbles");

    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("class", "heart");
        svg.setAttribute("viewBox", "0 0 32 32");

        const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
        title.textContent = "heart22";

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute(
            "d",
            "M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
        );

        svg.appendChild(title);
        svg.appendChild(path);
        bubble.appendChild(svg);
        bubblesContainer.appendChild(bubble);
    }

    function showHearts() {
        // Удаляем старые пузырьки, если они есть
        document.querySelectorAll(".bubble").forEach(heart => heart.remove());

        // Создаём новые пузырьки
        for (let i = 0; i < 20; i++) {  
            createBubble();
        }

        // Запускаем таймер на удаление через 30 секунд
        setTimeout(() => {
            document.querySelectorAll(".bubble").forEach(heart => heart.remove());
        }, 10000);
    }

    // Привязываем функцию к кнопке
    document.querySelector(".gift-button").addEventListener("click", showHearts);
});


function September2023(){


    const calendar = document.getElementById("calendar");
    const monthTitle = document.getElementById("month-title");

    monthTitle.innerText = "Сентябрь 2023";
    calendar.innerHTML = ""; // Очищаем перед загрузкой

    const musicData = {
        1: {
            cover: "assets/img/ice.png",
            track: "assets/mus/Айскрин - Между нами километры.mp3",
            title: "Километры и города",
            duration: "02:54"
        },
        2: {
            cover: "assets/img/myloveall.png",
            track: "assets/mus/Cavetown - My Love Mine All Mine (Mitski Cover).mp3",
            title: "My love all mine all mine",
            duration: "03:15"
        },
        3: {
            cover: "assets/img/loveme.png",
            track: "assets/mus/Гречка  Люби меня люби (Текст песни).mp3",
            title: "Люби меня люби",
            duration: "02:30"
        },
        4: {
            cover: "assets/img/lovemeMiyagi.png",
            track: "assets/mus/Люби меня (feat. Sимптом).mp3",
            title: "Люби меня",
            duration: "04:05"
        },
        5: {
            cover: "assets/img/stars.png",
            track: "assets/mus/OneRepublic - Counting Stars (Lyrics).mp3",
            title: "Counting Stars",
            duration: "02:45"
        },
        6: {
            cover: "assets/img/andetem.png",
            track: "assets/mus/Әндетемін.mp3",
            title: "Әндетемін",
            duration: "03:10"
        },
        7: {
            cover: "assets/img/menseni.png",
            track: "assets/mus/Son Pascal - Men Seni Süıemin (Lyrics) Сон Паскаль  - Мен Сені Сүйемін (Мәтін, Текст, Караоке).mp3",
            title: "Men Seni Suyemin",
            duration: "03:50"
        },
        8: {
            cover: "assets/img/hap.png",
            track: "assets/mus/Нервы - Счастье [5EhG-_WckuQ].mp3",
            title: "Счастье",
            duration: "03:20"
        },
        9: {
            cover: "assets/img/sleep.png",
            track: "assets/mus/Нервы - Спи спокойно (Слэм и депрессия. Аудио).mp3",
            title: "Спи спокойно",
            duration: "02:55"
        },
        10: {
            cover: "assets/img/light.png",
            track: "assets/mus/Ярче и теплее.mp3",
            title: "Ярче и теплее",
            duration: "03:40"
        },
        11: {
            cover: "assets/img/swim.png",
            track: "assets/mus/Chase Atlantic - SWIM (Official Music Video).mp3",
            title: "Swim",
            duration: "02:35"
        },
        12: {
            cover: "assets/img/meddleabout.png",
            track: "assets/mus/Meddle About.mp3",
            title: "MEDDLE ABOUT",
            duration: "03:25"
        },
        13: {
            cover: "assets/img/half.png",
            track: "assets/mus/Половина моя.mp3",
            title: "Половина моя",
            duration: "04:00"
        },
        14: {
            cover: "assets/img/cap.png",
            track: "assets/mus/Мот - Капкан (премьера трека, 2016).mp3",
            title: "Капкан",
            duration: "02:20"
        },
        15: {
            cover: "assets/img/aug.png",
            track: "assets/mus/МОТ - Август - это ты.mp3",
            title: "Август",
            duration: "03:45"
        },
        16: {
            cover: "assets/img/mde.png",
            track: "assets/mus/18 (feat. Dequine).mp3",
            title: "18",
            duration: "02:50"
        },
        17: {
            cover: "assets/img/home.png",
            track: "assets/mus/Айкын - Алтыным (lyricsтекст песни).mp3",
            title: "Алтыным",
            duration: "03:55"
        },
        18: {
            cover: "assets/img/when.png",
            track: "assets/mus/Мот - Когда исчезнет слово (премьера клипа, 2017).mp3",
            title: "Когда исчезнет слово",
            duration: "02:40"
        },
        19: {
            cover: "assets/img/words.png",
            track: "assets/mus/Мот  По буквам (премьера трека, 2018).mp3",
            title: "По буквам",
            duration: "03:30"
        },
        20: {
            cover: "assets/img/btwus.png",
            track: "assets/mus/Lizer  Между Нами.mp3",
            title: "Между нами",
            duration: "03:10"
        },
        21: {
            cover: "assets/img/fallinlove.png",
            track: "assets/mus/Miyagi - По уши в тебя влюблён (Lyric video).mp3",
            title: "По уши в тебя влюблен",
            duration: "02:25"
        },
        22: {
            cover: "assets/img/samaya.png",
            track: "assets/mus/Самая (feat. Amigo).mp3",
            title: "Самая",
            duration: "03:35"
        },
        23: {
            cover: "assets/img/samayasamaya.png",
            track: "assets/mus/Егор Крид - Самая Самая (Премьера клипа, 2014).mp3",
            title: "Самая Самая",
            duration: "02:15"
        },
        24: {
            cover: "assets/img/del.png",
            track: "assets/mus/КАК ДЕЛИШКИ.mp3",
            title: "Как делишки у моей малышки",
            duration: "04:10"
        },
        25: {
            cover: "assets/img/train.png",
            track: "assets/mus/Поезда.mp3",
            title: "Поезда",
            duration: "02:30"
        },
        26: {
            cover: "assets/img/505.png",
            track: "assets/mus/505.mp3",
            title: "505",
            duration: "03:50"
        },
        27: {
            cover: "assets/img/heaven.png",
            track: "assets/mus/Chase Atlantic - HEAVEN AND BACK (Lyrics).mp3",
            title: "HEAVEN AND BACK",
            duration: "03:00"
        },
        28: {
            cover: "assets/img/slowdown.png",
            track: "assets/mus/Chase Atlantic - Slow Down (Lyrics).mp3",
            title: "Slow down",
            duration: "02:45"
        },
        29: {
            cover: "assets/img/ch.png",
            track: "assets/mus/Chase Atlantic - Church (Lyrics).mp3",
            title: "Church",
            duration: "03:55"
        },
        30: {
            cover: "assets/img/secdr.png",
            track: "assets/mus/Beach Weather - Sex, Drugs, Etc. (Official Video).mp3",
            title: "Sex, drugs, ect",
            duration: "02:35"
        },
        31: {
            cover: "assets/img/wanna.png",
            track: "assets/mus/Arctic Monkeys - I Wanna Be Yours (Lyrics).mp3",
            title: "I Wanna Be Yours",
            duration: "03:20"
        }
    };
    

    let currentAudio = null;
    let currentButton = null;
    let currentProgress = null;

    calendar.innerHTML = "";

    // Определяем день недели для 1 сентября (например, 2024)
    let firstDayOfWeek = new Date(2023, 8, 1).getDay(); // 0 - воскресенье, 1 - понедельник, ...

    if (firstDayOfWeek === 0) firstDayOfWeek = 7; // Сдвигаем воскресенье в конец недели

    // Добавляем пустые ячейки перед 1 числом
    for (let i = 1; i < firstDayOfWeek; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("day", "empty");
        calendar.appendChild(emptyCell);
    }

    for (let dayNumber = 1; dayNumber <= 31; dayNumber++) {
        const data = musicData[dayNumber] || {
            cover: "assets/img/placeholder.png",
            track: "",
            title: "Нет данных",
            duration: "--:--"
        };
    
        const day = document.createElement("div");
        day.classList.add("day");
        day.style.backgroundImage = `url('${data.cover}')`;
        day.style.backgroundSize = "cover";
        day.style.backgroundPosition = "center";
        day.style.position = "relative";
        day.style.borderRadius = "10px";
        day.style.overflow = "hidden";
    
        const overlay = document.createElement("div");
        overlay.style.position = "absolute";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0, 0, 0, 0.5)";
        day.appendChild(overlay);
    
        const dayNumberElement = document.createElement("div");
        dayNumberElement.classList.add("day-number");
        dayNumberElement.innerText = dayNumber;
        dayNumberElement.style.position = "absolute";
        dayNumberElement.style.top = "5px";
        dayNumberElement.style.left = "5px";
        dayNumberElement.style.color = "white";
        dayNumberElement.style.fontSize = "18px";
        dayNumberElement.style.fontWeight = "bold";
        day.appendChild(dayNumberElement);
    
        const trackInfo = document.createElement("div");
        trackInfo.classList.add("track-info");
        trackInfo.innerHTML = `<strong>${data.title}</strong>`;
        trackInfo.style.color = "white";
        trackInfo.style.position = "absolute";
        trackInfo.style.fontSize = "12px";
        trackInfo.style.right = '25px';
        trackInfo.style.textAlign = "start";
        trackInfo.style.width = "80%";  // Фиксированная ширина
        trackInfo.style.height = "35px"; // Фиксированная высота
        trackInfo.style.overflow = "hidden"; // Скрытие лишнего текста
        trackInfo.style.textOverflow = "ellipsis"; // Добавляем многоточие, если текст не влазит
        day.appendChild(trackInfo);
    
        const audio = document.createElement("audio");
        audio.src = data.track;
        day.appendChild(audio);
    
        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
        progressBar.style.position = "absolute";
        progressBar.style.bottom = "25px";
        progressBar.style.left = "10px";
        progressBar.style.width = "80%";
        progressBar.style.height = "4px";
        progressBar.style.background = "rgba(255, 255, 255, 0.3)";
        progressBar.style.borderRadius = "3px";
        day.appendChild(progressBar);
    
        const progress = document.createElement("div");
        progress.classList.add("progress");
        progress.style.height = "100%";
        progress.style.width = "0%";
        progress.style.background = "#ff5e62";
        progressBar.appendChild(progress);
    
        const timeDisplay = document.createElement("div");
        timeDisplay.innerText = "00:00 / " + data.duration;
        timeDisplay.style.position = "absolute";
        timeDisplay.style.bottom = "5px";
        timeDisplay.style.left = "10px";
        timeDisplay.style.color = "white";
        timeDisplay.style.fontSize = "12px";
        day.appendChild(timeDisplay);
    
        const playButton = document.createElement("button");
        playButton.classList.add("play-button");
        playButton.innerText = "▶";
        playButton.style.position = "absolute";
        playButton.style.bottom = "40px";
        playButton.style.right = "13px";
        playButton.style.background = "rgba(255, 255, 255, 0.3)";
        playButton.style.border = "none";
        playButton.style.color = "white";
        playButton.style.padding = "5px 10px";
        playButton.style.borderRadius = "5px";
        playButton.style.cursor = "pointer";
        playButton.style.fontSize = "12px";
        day.appendChild(playButton);

        if (window.innerWidth <= 768) {
            playButton.style.bottom = "37px";
            playButton.style.right = "70%";
            playButton.style.transform = "translateX(50%)";
            playButton.style.fontSize = "8px";
        
            trackInfo.style.fontSize = "8px";
            trackInfo.style.bottom = "58px";
            trackInfo.style.left = "15%";
        }
        
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 768) {
                playButton.style.bottom = "37px";  // Совпадает
                playButton.style.right = "70%";    // Совпадает
                playButton.style.transform = "translateX(50%)"; // Совпадает
                playButton.style.fontSize = "8px"; // Совпадает
        
                trackInfo.style.maxWidth = '85%'
                trackInfo.style.fontSize = "8px";  // Совпадает
                trackInfo.style.bottom = "47px";   // Совпадает
                trackInfo.style.left = "25px";      // Совпадает
            } else {
                playButton.style.bottom = "40px";
                playButton.style.right = "13px";
                playButton.style.transform = "none";
                playButton.style.fontSize = "12px";
        
                trackInfo.style.bottom = "40px";
                trackInfo.style.fontSize = "12px";
                trackInfo.style.textAlign = 'start';
                trackInfo.style.position = "absolute";
                trackInfo.style.left = '0';
            }
        });
        
        

        
    
        playButton.addEventListener("click", function () {
            if (currentAudio && currentAudio !== audio) {
                currentAudio.pause();
                if (currentButton) currentButton.innerText = "▶";
            }
    
            if (audio.paused) {
                audio.play();
                this.innerText = "⏸";
                currentAudio = audio;
                currentButton = this;
                currentProgress = progress;
            } else {
                audio.pause();
                this.innerText = "▶";
                currentAudio = null;
                currentButton = null;
                currentProgress = null;
            }
        });
    
        audio.addEventListener("timeupdate", function () {
            if (currentProgress) {
                const percent = (audio.currentTime / audio.duration) * 100;
                currentProgress.style.width = percent + "%";
                const currentMinutes = Math.floor(audio.currentTime / 60);
                const currentSeconds = Math.floor(audio.currentTime % 60);
                timeDisplay.innerText = 
                    (currentMinutes < 10 ? "0" : "") + currentMinutes + ":" +
                    (currentSeconds < 10 ? "0" : "") + currentSeconds +
                    " / " + data.duration;
            }
        });
    
        calendar.appendChild(day);
        day.appendChild(playButton);

    }

}

function generateCalendar(year, month) {
    if(year === 2023 && month == 8){
        September2023()
        return
    }

    let container = document.getElementById("calendar");
    let monthTitle = document.getElementById("month-title");
    container.innerHTML = "";
    let monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let firstDay = new Date(year, month, 1).getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    monthTitle.textContent = `${monthNames[month]} ${year}`;
    localStorage.setItem("year", year);
    localStorage.setItem("month", month);

    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
        let emptyDiv = document.createElement("div");
        emptyDiv.className = "empty";
        container.appendChild(emptyDiv);
    }
    for (let day = 1; day <= daysInMonth; day++) {
        let dayDiv = document.createElement("div");
        dayDiv.className = "day";
        dayDiv.textContent = day;
        container.appendChild(dayDiv);
    }
    document.getElementById("priority-text").value = localStorage.getItem(`priority_${year}_${month}`) || "";
    document.getElementById("notes-text").value = localStorage.getItem(getNotesKey(year, month)) || "";

    document.getElementById("prev-btn").disabled = (year === minYear && month === minMonth);
}

function savePlayerState() {
    if (currentAudio) {
        localStorage.setItem("player_track", currentAudio.src);
        localStorage.setItem("player_time", currentAudio.currentTime);
        localStorage.setItem("player_playing", !currentAudio.paused);
    }
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
}

function prevMonth() {
    if (currentYear === minYear && currentMonth === minMonth) return; // Достигли минимума

    if (currentYear === 2023 && currentMonth === 9) {
        currentMonth = 8; // Переход на сентябрь 2023
        localStorage.setItem("year", currentYear);
        localStorage.setItem("month", currentMonth);
        document.getElementById("month-title").textContent = "Сентябрь 2023"; // Обновление заголовка

        document.getElementById("calendar").innerHTML = ""; // Очистка календаря перед загрузкой кастомного

        September2023(); // Принудительно вызываем кастомный календарь
        return; // Останавливаем дальнейшее выполнение
    }

    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }

    generateCalendar(currentYear, currentMonth);
}




document.getElementById("priority-text").addEventListener("input", () => {
    localStorage.setItem(`priority_${currentYear}_${currentMonth}`, document.getElementById("priority-text").value);
});
document.getElementById("notes-text").addEventListener("input", () => {
    localStorage.setItem(getNotesKey(currentYear, currentMonth), document.getElementById("notes-text").value);
});

generateCalendar(currentYear, currentMonth);
