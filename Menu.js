const Menu = () => {
    console.log(linksContent.links);
    return (
        <h2>Menu</h2>
    );
};

const domContainer = document.querySelector("#react-menu");
ReactDOM.render(<Menu />, domContainer);
