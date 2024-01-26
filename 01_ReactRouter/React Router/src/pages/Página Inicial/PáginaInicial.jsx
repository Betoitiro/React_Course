import Headerbar from "../Headerbar/Headerbar";
import Banner from "../Página Inicial/banner.png";
import Categoria from "../Página Inicial/banner-categoria.png"
import Produto from "../Página Inicial/banner-produto.png";
import "./PáginaInicial.css"

function PáginaInicial() {
  return (
    <div>
     <Headerbar/>
      <Carousel />
      <CardContainer />
      <br />
      <div className="card text-center">
        <div className="card-body" style={{ backgroundColor: "red" }}>
          <h1 className="card-title" style={{ color: "white" }}>
            Queridas Compras
          </h1>
          <p className="card-text" style={{ color: "white" }}>
            <b>Ofertas Exclusivas:</b> Descontos irresistíveis que fazem seu
            dinheiro render mais.
          </p>
        </div>
      </div>
      <br />
      <Cards1 />
      <Cards2 />
      <br />
      <Widget />
      <br />
      <Cards3 />
      <Cards4 />
      <br />
    </div>
  );
}

function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Banner} className="d-flex w-100 img-fluid" alt="banner" />
        </div>
        <div className="carousel-item">
          <img src={Banner} className="d-flex w-100 img-fluid" alt="banner" />
        </div>
        <div className="carousel-item">
          <img src={Banner} className="d-flex w-100 img-fluid" alt="banner" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

function CardContainer() {
  return (
    <div className="center">
      <div className="article-card">
        <div className="content">
          <p className="title">Categoria A</p>
        </div>
        <img src={Categoria} alt="article-cover" />
      </div>

      <div className="article-card">
        <div className="content">
          <p className="title">Categoria B</p>
        </div>
        <img src={Categoria} alt="article-cover" />
      </div>

      <div className="article-card">
        <div className="content">
          <p className="title">Categoria C</p>
        </div>
        <img src={Categoria} alt="article-cover" />
      </div>

      <div className="article-card">
        <div className="content">
          <p className="title">Categoria D</p>
        </div>
        <img src={Categoria} alt="article-cover" />
      </div>

      <div className="article-card">
        <div className="content">
          <p className="title">Categoria E</p>
        </div>
        <img src={Categoria} alt="article-cover" />
      </div>

      <div className="article-card">
        <div className="content">
          <p className="title">Categoria F</p>
        </div>
        <img src={Categoria} alt="article-cover" />
      </div>
    </div>
  );
}

function Cards1() {
  return (
    <div className="container-xl">
      <div className="row">
        <div className="col-md-12">
          <h2>
            Os Produtos <b>Mais Pedidos</b>
          </h2>
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                className="active"
              ></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            </ol>
            {/* Wrapper for carousel items */}
            <div className="carousel-inner">
              <div className="item carousel-item active">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 1</h4>

                        <p className="item-price">
                          <strike>$400.00</strike> <b>$369.00</b>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 2</h4>

                        <p className="item-price">
                          <strike>R$25.00</strike> <b>R$23.99</b>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 3</h4>

                        <p className="item-price">
                          <strike>R$899.00</strike> <b>R$649.00</b>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 4</h4>

                        <p className="item-price">
                          <strike>R$315.00</strike> <b>R$250.00</b>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item carousel-item">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 5</h4>
                        <p className="item-price">
                          <strike>$289.00</strike> <span>$269.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 6</h4>
                        <p className="item-price">
                          <strike>$1099.00</strike> <span>$869.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 7</h4>
                        <p className="item-price">
                          <strike>$109.00</strike> <span>$99.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 8</h4>
                        <p className="item-price">
                          <strike>$599.00</strike> <span>$569.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item carousel-item">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 9</h4>
                        <p className="item-price">
                          <strike>$369.00</strike> <span>$349.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 10</h4>
                        <p className="item-price">
                          <strike>$315.00</strike> <span>$250.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 11</h4>
                        <p className="item-price">
                          <strike>$450.00</strike> <span>$418.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 12</h4>
                        <p className="item-price">
                          <strike>$350.00</strike> <span>$330.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel controls */}

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cards2() {
  return (
    <div className="container-xl">
      <div className="row">
        <div className="col-md-12">
          <h2>
            Os Produtos <b>Recomendados</b>
          </h2>
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                className="active"
              ></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            </ol>
            {/* Wrapper for carousel items */}
            <div className="carousel-inner">
              <div className="item carousel-item active">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 1</h4>

                        <p className="item-price">
                          <strike>$400.00</strike> <b>$369.00</b>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 2</h4>

                        <p className="item-price">
                          <strike>R$25.00</strike> <b>R$23.99</b>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 3</h4>

                        <p className="item-price">
                          <strike>R$899.00</strike> <b>R$649.00</b>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 4</h4>

                        <p className="item-price">
                          <strike>R$315.00</strike> <b>R$250.00</b>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item carousel-item">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 5</h4>
                        <p className="item-price">
                          <strike>$289.00</strike> <span>$269.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 6</h4>
                        <p className="item-price">
                          <strike>$1099.00</strike> <span>$869.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 7</h4>
                        <p className="item-price">
                          <strike>$109.00</strike> <span>$99.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 8</h4>
                        <p className="item-price">
                          <strike>$599.00</strike> <span>$569.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item carousel-item">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 9</h4>
                        <p className="item-price">
                          <strike>$369.00</strike> <span>$349.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 10</h4>
                        <p className="item-price">
                          <strike>$315.00</strike> <span>$250.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 11</h4>
                        <p className="item-price">
                          <strike>$450.00</strike> <span>$418.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 12</h4>
                        <p className="item-price">
                          <strike>$350.00</strike> <span>$330.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel controls */}

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Widget() {
  return (
    <div className="img-container">
      <img src={Banner} alt="Banner-Widget" />
      <div className="overlay">
        <h1>Some Text Here</h1>
        <hr />
        <a href="#" className="btn">
          Open&nbsp;
          <i className="fa fa-external-link-square" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function Cards3() {
  return (
    <div className="container-xl">
      <div className="row">
        <div className="col-md-12">
          <h2>
            Os Livros <b>Mais Pedidos e Recomendados</b>
          </h2>
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                className="active"
              ></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            </ol>
            {/* Wrapper for carousel items */}
            <div className="carousel-inner">
              <div className="item carousel-item active">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 1</h4>

                        <p className="item-price">
                          <strike>$400.00</strike> <b>$369.00</b>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 2</h4>

                        <p className="item-price">
                          <strike>R$25.00</strike> <b>R$23.99</b>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 3</h4>

                        <p className="item-price">
                          <strike>R$899.00</strike> <b>R$649.00</b>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 4</h4>

                        <p className="item-price">
                          <strike>R$315.00</strike> <b>R$250.00</b>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item carousel-item">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 5</h4>
                        <p className="item-price">
                          <strike>$289.00</strike> <span>$269.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 6</h4>
                        <p className="item-price">
                          <strike>$1099.00</strike> <span>$869.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 7</h4>
                        <p className="item-price">
                          <strike>$109.00</strike> <span>$99.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 8</h4>
                        <p className="item-price">
                          <strike>$599.00</strike> <span>$569.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item carousel-item">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 9</h4>
                        <p className="item-price">
                          <strike>$369.00</strike> <span>$349.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 10</h4>
                        <p className="item-price">
                          <strike>$315.00</strike> <span>$250.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 11</h4>
                        <p className="item-price">
                          <strike>$450.00</strike> <span>$418.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 12</h4>
                        <p className="item-price">
                          <strike>$350.00</strike> <span>$330.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel controls */}

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cards4() {
  return (
    <div className="container-xl">
      <div className="row">
        <div className="col-md-12">
          <h2>
            NOME <b>NOME</b>
          </h2>
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                className="active"
              ></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            </ol>
            {/* Wrapper for carousel items */}
            <div className="carousel-inner">
              <div className="item carousel-item active">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 1</h4>

                        <p className="item-price">
                          <strike>$400.00</strike> <b>$369.00</b>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 2</h4>

                        <p className="item-price">
                          <strike>R$25.00</strike> <b>R$23.99</b>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 3</h4>

                        <p className="item-price">
                          <strike>R$899.00</strike> <b>R$649.00</b>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 4</h4>

                        <p className="item-price">
                          <strike>R$315.00</strike> <b>R$250.00</b>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item carousel-item">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 5</h4>
                        <p className="item-price">
                          <strike>$289.00</strike> <span>$269.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 6</h4>
                        <p className="item-price">
                          <strike>$1099.00</strike> <span>$869.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 7</h4>
                        <p className="item-price">
                          <strike>$109.00</strike> <span>$99.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 8</h4>
                        <p className="item-price">
                          <strike>$599.00</strike> <span>$569.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item carousel-item">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 9</h4>
                        <p className="item-price">
                          <strike>$369.00</strike> <span>$349.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 10</h4>
                        <p className="item-price">
                          <strike>$315.00</strike> <span>$250.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 11</h4>
                        <p className="item-price">
                          <strike>$450.00</strike> <span>$418.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o" />
                      </span>
                      <div className="img-box">
                        <img
                          src={Produto}
                          className="img-fluid"
                          alt="Produto"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Produto 12</h4>
                        <p className="item-price">
                          <strike>$350.00</strike> <span>$330.00</span>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                        <a href="#" className="btn btn-primary">
                          Adicionar ao Carrinho
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel controls */}

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PáginaInicial;