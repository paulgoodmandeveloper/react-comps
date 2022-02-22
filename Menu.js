const Menu = () => {
    console.log(linksContent.links);
    return (
        <div className='menu-navigation'>
          <nav>
            <ul>
              {linksContent.links.map((item) => (
                <li>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    );
};

const domContainer = document.querySelector("#react-menu");
ReactDOM.render(<Menu />, domContainer);
