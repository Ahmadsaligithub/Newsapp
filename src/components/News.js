import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizedFirstWord = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updatenews = async () => {
    props.setProgress(10);
    let newsfetchURL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(newsfetchURL);
    props.setProgress(30);
    let datajson = await data.json();
    props.setProgress(70);
    setArticles(datajson.articles);
    setTotalResults(datajson.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizedFirstWord(props.category)} - NewsDay`;
    updatenews();
    // eslint-disable-next-line
  }, []);

  // buttons
  // nextclick = async () => {
  // setPage(page+1)
  //   updatenews();
  // };
  // previousClick = async () => {
  // setPage(page-1)
  //   updatenews();
  // };

  const fetchMoreData = async () => {
    let newsfetchURL = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(newsfetchURL);
    let datajson = await data.json();
    setArticles(articles.concat(datajson.articles));
    setTotalResults(datajson.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "80px" }}>
        NewsDay - Top <i>{capitalizedFirstWord(props.category)}</i> Headlines
      </h1>
      {loading && <Spinner />}
      {/* <Spinner /> */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row my-4">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageURL={element.urlToImage}
                    newsURL={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    name={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      
    </>
  );
};

export default News;
