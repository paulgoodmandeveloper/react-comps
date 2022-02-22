const Menu = () => {
    console.log(linksContent.links);
    return (
        <div className='menu-navigation'>
          <nav>
            <ul>
              <li>Item</li>
            </ul>
          </nav>
        </div>
    );
};

const domContainer = document.querySelector("#react-menu");
ReactDOM.render(<Menu />, domContainer);
