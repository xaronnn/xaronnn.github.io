console.log('[Birthday] Checking if it\'s August 31st...');
const d = new Date();

// Months are 0-indexed (0 = Jan, 11 = Dec)
if (d.getMonth() === 3 && d.getDate() === 31) {
    console.log('[Birthday] It is August 31st!');
    confetti.start();

    setTimeout(() => {
        console.log('[Birthday] Stopping confetti!');
        confetti.stop();
    }, 9000);
} else {
    console.log('[Birthday] It is not August 31st.');
}

function testConfetti(timeout) {
    const time = timeout ? timeout * 1000 : 3000;

    console.log('[Birthday] User wanted to test confetti');
    confetti.start();
    setTimeout(() => {
        console.log('[Birthday] Stopping confetti');
        confetti.stop();
    }, time);
}