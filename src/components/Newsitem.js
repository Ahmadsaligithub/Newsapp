import React from "react";

const Newsitem = (props) => {
  let { title, description, imageURL, newsURL, author, publishedAt, name } =
    props; 
  return (
    <div>
      <div className="card my-2">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{name}</span>
        </div>
        <img
          src={
            !imageURL
              ? "https://as2.ftcdn.net/v2/jpg/03/12/87/81/1000_F_312878147_R5cG84pnmoN5jS8MKYppUPGiAh5ZDBcU.jpg"
              : imageURL
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By <b>{!author ? "Unknown" : author}</b> on{" "}
              <b>{new Date(publishedAt).toGMTString()}</b>
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsURL}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
