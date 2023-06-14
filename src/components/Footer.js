import { footerIcons } from "../data";
import { footerLinks } from "../data";

export const Footer = () =>{
    return (
        <footer className="section footer">
      <ul className="footer-links">
        {
            footerLinks.map((link)=>{
                return (
                    <li key={link.id}>
                        <a href={link.href} className="footer-link">{link.title}</a>
                    </li>
                );
            })
        }
      </ul>

      <ul className="footer-icons">
        {
            footerIcons.map((icon)=>{
                return (
                    <li key={icon.id}>
                        <a href={icon.href} target="_blank" className="footer-icon"><i className={icon.icon}></i></a>
                    </li>
                );
            })
        }
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    );
};