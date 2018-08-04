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
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    if (e.target.name === "title") {
      this.props.onTitleChange(e.target.value);
    }
    if (e.target.name === "author") {
      this.props.onAuthorChange(e.target.value);
    }
    if (e.target.name === "pages") {
      this.props.onPagesChange(e.target.value);
    }
    if (e.target.name === "read") {
      this.props.onStatusChange(e.target.value);
    }
  }
  render() {
    return (
      <form className="forma">
        <h2>Insert new book</h2>
        <label>
          Title: <br />
          <input name="title" type="text" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Author: <br />
          <input name="author" type="text" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Pages:
          <input name="pages" type="number" onChange={this.handleChange} />
        </label>

        <label>
          Status:
          <input name="read" type="checkbox" onChange={this.handleChange} />
        </label>
        <br />
        <div className="button mali" onClick={() => this.props.onClick()}>
          Add{" "}
        </div>
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
    this.state = {
      button: false,
      library: books.slice(),
      title: "",
      author: "",
      pages: null,
      read: false
    };
    this.renderForm = this.renderForm.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handlePagesChange = this.handlePagesChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    let newBook = {
      title: this.state.title,
      author: this.state.author,
      pages: this.state.pages,
      status: this.state.read
    };

    const helper = this.state.library.slice().concat([newBook]);
    this.setState({ library: helper });
    let forma = document.querySelector(".transition");

    forma.classList.remove("transition");

    /*TU RADIMO*/
  }
  handleStatusChange(value) {
    this.setState({ read: value });
  }
  handlePagesChange(value) {
    this.setState({ pages: value });
  }
  handleAuthorChange(value) {
    this.setState({ author: value });
  }
  handleTitleChange(value) {
    this.setState({ title: value });
  }
  /*javi da je botun kliknut*/
  handleClick() {
    this.setState({ button: !this.state.button });
  }

  renderForm(f) {
    if (f) {
      let forma = document.querySelector("form");
      forma.classList.add("transition");
      this.setState({ button: false });
    }
  }

  render() {
    const kartice = this.state.library;
    const ispis = kartice.map(book => {
      return <Card value={book} />;
    });
    return (
      <div>
        <Forma
          onTitleChange={this.handleTitleChange}
          onAuthorChange={this.handleAuthorChange}
          onPagesChange={this.handlePagesChange}
          onStatusChange={this.handleStatusChange}
          onClick={() => this.handleSubmit()}
        />{" "}
        {/*onChange={() => this.onTitleChange} */}
        <header>
          <h1>My Library</h1>
        </header>
        <div id="main">
          <Button onClick={() => this.handleClick()} />{" "}
          {/*take control from the child*/}
          {ispis}
        </div>
        {this.renderForm(this.state.button)}
      </div>
    );
  }
}

/*==============================================*/
ReactDOM.render(<Library />, document.getElementById("root"));
