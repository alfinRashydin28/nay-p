function sendMessage(option) {
    // Gantilah 'YOUR_BOT_TOKEN' dan 'YOUR_CHAT_ID' dengan informasi bot Telegram Anda.
    var botToken = '6441266112:AAHLvHHiJcKXrKDsifdyJVVt-RPzYu8asIY';
    var chatId = '903460372';

    // Gantilah 'https://api.telegram.org/bot' dengan URL API bot Telegram.
    var apiUrl = 'https://api.telegram.org/bot' + botToken + '/sendMessage';

    // Kumpulkan data untuk dikirim ke bot Telegram.
    var data = {
        chat_id: chatId,
        text: 'Nayla Memilih : ' + option
    };

    // Kirim permintaan POST ke API bot Telegram.
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sukses:', data);
        alert('Pesan berhasil dikirim ke Telegram!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat mengirim pesan ke Telegram.');
    });
}

onload = () =>{
    document.body.classList.remove("container");
};








 