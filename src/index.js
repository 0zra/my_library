import "./cssreset.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/*==============================================*/
const books = [
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    pages: 423,
    status: true
  },
  {
    title: "The Crystal Shard",
    author: "R.A. Salvatore",
    pages: 333,
    status: true
  },
  {
    title: "Wiedzmin - Ostatnie Zyczenie",
    author: "Andrzej Sapkowski",
    pages: 286,
    status: false
  }
];

class Button extends React.Component {
  render() {
    return (
      <div className="button-holder">
        <span className="button" onClick={() => this.props.onClick()}>
          Add book
        </span>{" "}
      </div>
    );
  }
}

class Forma extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  render() {
    return <form className="forma" />;
  }
}

function Card(props) {
  return (
    <div className="card">
      <strong>Book:</strong>
      <br />
      {props.value.title}
      <br />
      <strong>Author:</strong>
      <br />
      {props.value.author}
      <br />
      <strong>Pages:</strong>
      <br />
      {props.value.pages}
      <br />
      <strong>Status:</strong>
      {props.value.status ? "Read" : "Not yet"}
    </div>
  );
}

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = { button: false };
  }
  /*javi da je botun kliknut*/
  handleClick() {
    this.setState({ button: !this.state.button });
  }

  renderForm(f) {
    if (f) {
      let forma = document.querySelector("form");

      forma.classList.add("transition");
    }
  }
  transitionForm() {}

  render() {
    return (
      <div>
        <header>My Library</header>
        <div id="main">
          <Button onClick={() => this.handleClick()} />
          {books.map(book => {
            return <Card value={book} />;
          })}
        </div>
        <Forma />;
        {this.renderForm(this.state.button)}
      </div>
    );
  }
}

/*==============================================*/
ReactDOM.render(<Library />, document.getElementById("root"));
