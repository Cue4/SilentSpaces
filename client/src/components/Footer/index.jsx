import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer">
        <h4>&copy; {new Date().getFullYear()} - Akward Socialist</h4>
      </div>
    </footer>
  );
};

export default Footer;