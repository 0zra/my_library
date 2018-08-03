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
          {/*this.props.onClick() === pass control to parent*/} Add book
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
    return (
      <form className="forma">
        <h2>Insert new book</h2>
        <input type="text" />
      </form>
    );
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
    this.renderForm = this.renderForm.bind(this);
    this.state = {
      button: false,
      newBook: {
        title: "",
        author: "",
        pages: null,
        read: false
      }
    };
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

  render() {
    return (
      <div>
        <Forma />
        <header>
          <h1>My Library</h1>
        </header>
        <div id="main">
          <Button onClick={() => this.handleClick()} />{" "}
          {/*take control from the child*/}
          {books.map(book => {
            return <Card value={book} />;
          })}
        </div>
        {this.renderForm(this.state.button)}
      </div>
    );
  }
}

/*==============================================*/
ReactDOM.render(<Library />, document.getElementById("root"));
