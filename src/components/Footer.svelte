<script>
// Social media links (replace with actual links)
const socialLinks = {
    instagram: "https://www.instagram.com/mika_bo1/",
    whatsapp: "https://wa.me/+77759534339",
    telegram: "https://t.me/+dtPUd3nmKCswNDYy",
};
</script>

<footer>
<div class="footer-container">
    <div class="footer-column">
    <h3>LIBON</h3>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/catalog/1">Books</a></li>
        <li><a href="/social">Social</a></li>
        <li><a href="#">Profile</a></li>
        <li><a href="/games">Games</a></li>
    </ul>
    </div>
    <div class="footer-column">
    <h3>Связтаься с нами</h3>
    <ul>
        <li><a href="mailto:sjajs.slqk1@gmail.com">1 Gmail </a></li>
        <li><a href="mailto:mukanov.amir@fizmat.kz">2 Gmail</a></li>
        <li><a href="mailto:manarbek.zangar@fizmat.kz">3 Gmail</a></li>
    </ul>
    </div>
</div>
<div class="social-media">
    <a href={socialLinks.instagram} target="_blank">
    <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram">
    </a>
    <a href={socialLinks.whatsapp} target="_blank">
    <img src="https://img.icons8.com/ios-filled/50/000000/whatsapp.png" alt="WhatsApp">
    </a>
    <a href={socialLinks.telegram} target="_blank">
    <img src="https://img.icons8.com/ios-filled/50/000000/telegram-app.png" alt="Telegram">
    </a>
</div>
</footer>

<style>
    footer {
    background-color: #ebe3d5;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 180px;
}

.footer-container {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin-bottom: 20px;
}

.footer-column h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.footer-column ul {
    list-style-type: none;
    padding: 0;
}

.footer-column li {
    margin-bottom: 5px;
}

.footer-column a {
    text-decoration: none;
    color: #000;
}

.social-media {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.social-media img {
    width: 40px;
    height: 40px;
}

.social-media a:hover {
    opacity: 0.7;
}
</style>
  