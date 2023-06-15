function sendDataToServer (formData, url = 'http://localhost:4000/requests'){
        const formJson = JSON.stringify(Object.fromEntries(formData.entries()));
        fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: formJson,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Response:', data);
            // Дальнейшая обработка ответа сервера
        })
        .catch(error => {
            console.error('Error:', error);
            // Обработка ошибок при отправке запроса
        });
    }
export default sendDataToServer;