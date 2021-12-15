const list = document.querySelector('#container');
    const start = document.querySelector('#start');
    const stop = document.querySelector('#stop');
    let interval;

    start.onclick = () => {
        interval = setInterval(() => {
            const element = document.createElement('div');
            element.className = 'element';
            const randomNumber = Math.floor(Math.random() * 20);
            element.innerText = randomNumber;
            list.append(element);
        }, 3000);
    }

    stop.onclick = () => {
        clearInterval(interval)
    }