export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-5 ">
      <p>
        &copy; {new Date().getFullYear()} - Made with ❤️ by{' '}
        <a
          href="https://www.linkedin.com/in/juanmanuelalvarezb/"
          className="text-orange-500 hover:text-orange-700"
          target="_blank"
          rel="noreferrer"
        >
          <span className="font-bold">Juan Manuel Alvarez</span>
        </a>
      </p>
    </footer>
  );
}
