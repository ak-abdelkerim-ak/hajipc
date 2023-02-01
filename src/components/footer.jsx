import {FaFacebookF,FaTwitter,FaYoutube,FaTiktok,FaTelegramPlane} from 'react-icons/fa'

export default function Footer(){

    return(
        <footer className="footer">
            <div>
                <a href="http://www.facebook.com/ahmedhajio"><FaFacebookF/>Facebook</a>
                <a href="http://www.twitter.com/ahmedhajio"><FaTwitter/>Twitter</a>
                <a href="http://www.youtube.com/@hajiapps"><FaYoutube/>Youtube</a>
                <a href="http://www.tiktok.com/@hajiapps"><FaTiktok/>Tiktok</a>
                <a href="https://t.me/ahmedhajio"><FaTelegramPlane/>Telegram</a>
            </div>
            <p>Copyright &copy; 2023 AbdelkerimAK</p>
        </footer>
    )
}