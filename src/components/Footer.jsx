const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900 mt-10">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-6">
            <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2025 <a href="https://github.com/miguelcejas16" className="hover:underline">Miguel Cejas</a>. Todos los derechos reservados.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                <span className="mr-4 hover:underline md:mr-6">React + Vite</span>
                </li>
                <li>
                <span className="mr-4 hover:underline md:mr-6">Node.js Backend</span>
                </li>
                <li>
                <span className="hover:underline">Curso Full Stack - Nodo Tecnológico</span>
                </li>
            </ul>
            </div>
        </div>
    </footer>
  );
}

export default Footer;