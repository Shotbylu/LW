export default function Footer() {
  return (
    <footer className="bg-[#0a0e27] text-white py-6 text-center mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Lungelo Sibisi. All Rights Reserved.
      </p>
      <div className="flex justify-center gap-4 mt-3">
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-lg hover:text-blue-400"></i>
        </a>
        <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-lg hover:text-blue-400"></i>
        </a>
      </div>
    </footer>
  );
}
