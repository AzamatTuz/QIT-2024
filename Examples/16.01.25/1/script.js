async function fetchPost() {
    try {
        const response = await fetch('https:/jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Postartdy alu mumkin emes');
        }
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error('Kate', error);
    }
};

fetchPost();