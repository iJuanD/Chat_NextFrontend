import 'bootstrap/dist/css/bootstrap.min.css';


export const metadata = {
  title: "Chat with Django",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className="mb-3">{children}</div>
        
        <footer className="footer  bg-dark text-white py-3" >
          <div className="container text-center">
            <p className="mb-0">&copy; Creado por Juan David Herrera Galviz. 1005060849</p>
          </div>
        </footer>
      </body>
        
    </html>
  );
}
