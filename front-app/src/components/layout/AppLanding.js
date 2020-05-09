import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Accordion, Card, Button, Carousel } from "react-bootstrap";
import img3 from "../../img/img3.jpg";
import img5 from "../../img/img5.jpg";
import img6 from "../../img/img6.jpg";

const AppLanding = () => {
  return (
    <Fragment>
      <div className="container">
        <h1 className="mt-4 mb-3 card-title">Абитуриент ККРИТ</h1>

        <div className="row">
          <div className="col-md-8">
            <Carousel>
              <Carousel.Item>
                <img className="img-fluid" src={img3} alt="img3" />
                <Carousel.Caption>
                  <p>Красноярский рабочий 156.</p>
                </Carousel.Caption>
              </Carousel.Item>{" "}
              <Carousel.Item>
                <img className="img-fluid" src={img5} alt="img5" />
                <Carousel.Caption>
                  <p>Красноярский рабочий 156.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="img-fluid" src={img6} alt="img6" />
                <Carousel.Caption>
                  <p>Проспект Свободный 67.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-4">
            <h3 className="my-3">КГБПОУ "ККРИТ"</h3>
            <p>
              В современном мире сложно представить профессию, не связанную с
              применением информационных технологий. Умение обращаться с ПК
              требуется повсеместно.
            </p>
            <br />
            <Link to="/applicant/test">
              <button className="btn btn-primary">
                <i className="fas fa-file-alt"></i>Профориентационная онлайн диагностика
              </button>
            </Link>
            <small className="form-text">
              *Данный тест состоит из вопросов по: математике, информатике и
              физике.
            </small>
          </div>
        </div>

        <div className="content">
          <h3 className="my-4 card-title">В нашем колледже вы сможете:</h3>
          <hr />
          <ul>
            <li>
              научиться свободно владеть современным и востребованным прикладным
              программным обеспечением;
            </li>
            <li>самостоятельно разрабатывать ПО;</li>
            <li>
              проводить настройку и конфигурирование ПК под требования
              заказчика;
            </li>
            <li>
              осуществлять организацию различных видов деятельности с
              применением специализированного программного обеспечения;
            </li>
            <li>
              осуществлять техническое обслуживание и ремонт компьютерных систем
              и комплексов;
            </li>
            <li>
              разрабатывать различные электронные устройства на базе
              микроконтроллеров.
            </li>
          </ul>
        </div>
        <div className="accordion">
          <h3 className="my-4 card-title">Дополнительно</h3>
          <hr />
          <Accordion>
            <Card>
              <Card.Header className="dash-header">
                <Accordion.Toggle
                  as={Button}
                  variant="primary"
                  eventKey="1"
                  className="dash-btn"
                >
                  <i className="fas fa-university"></i> Специальности
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <table className="table table-striped">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Наименование</th>
                        <th scope="col">ФГОС</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>09.02.01 - Компьютерные системы и комплексы</td>
                        <td>
                          <a
                            href="http://www.kraskrit.ru/images/FGOS/09.02.01.pdf"
                            target="_blanc"
                          >
                            ФГОС
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>09.02.02 - Компьютерные сети</td>
                        <td>
                          <a
                            href="http://www.kraskrit.ru/images/FGOS/09.02.02.pdf"
                            target="_blanc"
                          >
                            ФГОС
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>09.02.04 - Информационные системы (по отраслям)</td>
                        <td>
                          <a
                            href="http://www.kraskrit.ru/images/FGOS/09.02.04.pdf"
                            target="_blanc"
                          >
                            ФГОС
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>09.02.05 - Прикладная информатика (по отраслям)</td>
                        <td>
                          <a
                            href="http://www.kraskrit.ru/images/FGOS/09.02.05.pdf"
                            target="_blanc"
                          >
                            ФГОС
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">5</th>
                        <td>
                          09.02.07 - Информационные системы и программирование
                        </td>
                        <td>
                          <a
                            href="http://www.kraskrit.ru/images/FGOS/09.02.07.pdf"
                            target="_blanc"
                          >
                            ФГОС
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">6</th>
                        <td>11.02.01 - Радиоаппаратостроение</td>
                        <td>
                          <a
                            href="http://www.kraskrit.ru/images/FGOS/11.02.01.pdf"
                            target="_blanc"
                          >
                            ФГОС
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">7</th>
                        <td>
                          11.02.02 - Техническое обслуживание и ремонт РЭТ (по
                          отраслям)
                        </td>
                        <td>
                          <a
                            href="http://www.kraskrit.ru/images/FGOS/11.02.02.pdf"
                            target="_blanc"
                          >
                            ФГОС
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">8</th>
                        <td>
                          15.02.15 - Технология металлообрабатывающего
                          производства
                        </td>
                        <td>
                          <a
                            href="http://www.kraskrit.ru/images/FGOS/15.02.15.pdf"
                            target="_blanc"
                          >
                            ФГОС
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">9</th>
                        <td>20.02.04 - Пожарная безопасность</td>
                        <td>
                          <a
                            href="http://www.kraskrit.ru/images/FGOS/20.02.04.pdf"
                            target="_blanc"
                          >
                            ФГОС
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">10</th>
                        <td>
                          38.02.01 - Экономика и бухгалтерский учет (по
                          отраслям)
                        </td>
                        <td>
                          <a
                            href="http://www.kraskrit.ru/images/FGOS/38.02.01.pdf"
                            target="_blanc"
                          >
                            ФГОС
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">11</th>
                        <td>38.02.07 - Банковское дело</td>
                        <td>
                          <a
                            href="http://www.kraskrit.ru/images/FGOS/38.02.07.pdf"
                            target="_blanc"
                          >
                            ФГОС
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="dash-header">
                <Accordion.Toggle
                  as={Button}
                  variant="success"
                  eventKey="2"
                  className="dash-btn"
                >
                  <i className="far fa-address-card"></i> Приёмная комиссия
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <div>
                    <h4 className="card-title">
                      КГБПОУ «Красноярский колледж радиоэлектроникии
                      информационных технологий» ждет абитуриентов
                    </h4>
                    <p>
                      с 15 июня по 15 августа 2020 года в учебном корпусе по
                      адресу: проспект имени газеты «Красноярский рабочий», 156
                      – кабинет 112 Тел. 8(391) 218-17-99 доб. 219 8(391)
                      298-52-01
                    </p>
                    <ul>
                      <h6>Режим работы приемной комиссии:</h6>
                      <li>Понедельник - пятница: 8.30 - 16.30</li>
                      <li>Суббота, воскресенье: выходные дни.</li>
                    </ul>
                    <p>
                      Прием документов на ОЧНУЮ ФОРМУ ОБУЧЕНИЯ осуществляется до
                      15 августа 2020 года. (кроме специальности 20.02.04
                      «Пожарная безопасность»)
                    </p>
                    <p>
                      Прием документов на специальность 20.02.04 «Пожарная
                      безопасность» осуществляется до 10 августа 2020 года.
                    </p>
                    <p>
                      Приказы о зачислении в колледж утверждаются и размещаются
                      на сайте колледжа 20 августа. Для зачисления поступающим
                      необходимо представить оригинал документа об образовании
                      до 15 августа.
                    </p>
                    <a href="http://www.kraskrit.ru/index.php/advanced-stuff/2018-04-03-02-15-40">
                      <button className="btn btn-primary">Подробнее</button>
                    </a>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </Fragment>
  );
};

export default AppLanding;
