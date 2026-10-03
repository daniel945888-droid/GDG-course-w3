let timeLeft = 25 * 60; // 預設 25 分鐘，換算成秒
let timerInterval;

// 取得 HTML 元素
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

// 更新畫面的函式
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // 如果秒數小於 10，前面補 0
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    display.textContent = minutes + ":" + seconds;
}

// 開始計時
function startTimer() {
    // 😈 Bug 1: 忘記檢查是否已經有計時器在跑，直接賦予新的 setInterval
    timerInterval = setInterval(() => {
        timeLeft--;
        updateDisplay();
        
        // 😈 Bug 2: 沒有檢查 timeLeft 是否小於 0，所以計時器會變負數繼續跑
        
    }, 1000);
}

// 暫停計時
function pauseTimer() {
    clearInterval(timerInterval);
}

// 重置計時
function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 25 * 60;
    updateDisplay();
}

// 綁定按鈕點擊事件
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// 網頁載入時先顯示初始時間
updateDisplay();