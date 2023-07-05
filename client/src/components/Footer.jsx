
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-sm">© 2023 Your Company. All rights reserved.</div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
