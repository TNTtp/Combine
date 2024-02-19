function combineWords() {
    var word1 = document.getElementById('word1').value;
    var word2 = document.getElementById('word2').value;

    if (word1 && word2) {
        fetch(`https://neal.fun/api/infinite-craft/pair?first=${word1}&second=${word2}`, {
            method: 'GET',
            headers: {
                'Referer': 'https://neal.fun/infinite-craft/'
            }
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = `${data.result} ${data.emoji}`;
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please enter both words.');
    }
}
