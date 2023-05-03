import cookie from 'cookie';

export default function handler(req, res) {
    const cookies = cookie.parse(req.headers.cookie || '');
    const cookieValue = cookies.token;

    res.send(`The value of the 'name' cookie is: ${cookieValue}`);
}
