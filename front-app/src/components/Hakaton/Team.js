import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import "moment/locale/ru";
import Spinner from "../Layout/spinner";
import { getTeam, addTeamMate } from "../../actions/hack";
import { Card, Button, Table, Modal } from "react-bootstrap";

const Team = ({ getTeam, addTeamMate, hack, auth: { user } }) => {
  const initialState = {
    name: "",
    capt: "",
    date: null,
    hackaton: null,
    team: null,
    email: "",
  };
  const [teamData, setTeamData] = useState(initialState);
  useEffect(() => {
    if (!hack.team) getTeam();
    if (!hack.loading && hack.team) setTeamData(hack.team);
  }, [getTeam, hack]);

  const { name, capt, date, hackaton, team } = teamData;

  const [teamMate, setTeamMate] = useState("");
  const OnChange = (e) => setTeamMate(e.target.value);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const OnSubmit = (e) => {
    e.preventDefault();
    addTeamMate(teamMate);
    setTeamMate("");
    setShow(false);
  };

  return hack.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="modal-window">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Добавить участника</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Введите E-mail участника:</p>
            <input
              type="email"
              className="form-control"
              placeholder="E-mail участника"
              name="email"
              required
              value={teamMate}
              onChange={OnChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Отмена
            </Button>
            <Button type="submit" variant="success" onClick={OnSubmit}>
              Добавить
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="team">
        {team === null ? (
          <div>
            <div className="container profile-user">
              <h4>У вас пока еще нет команды!</h4>
              <Link to="/hack/create-team" className="btn btn-danger">
                Создать команду
                <i className="far fa-address-card profile-icon"></i>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            {capt === user._id ? (
              <div>
                <h4 className="news-title">Вы капитан</h4>
                <hr />
              </div>
            ) : (
              <div>
                <h4 className="news-title">Вы участник</h4>
                <hr />
              </div>
            )}
            <Card className="text-center">
              <Card.Header style={styles.title}>
                Ваша команда: {name}
              </Card.Header>
              <Card.Body>
                <Card.Title>Хакатон</Card.Title>
                <hr />
                <div className="hackInfo">
                  {hackaton ? (
                    <Fragment>
                      <Card.Text>Наименование: {hackaton.name}</Card.Text>
                      <Card.Text>
                        Название Кейса: {hackaton.teamCase.name}
                      </Card.Text>
                      <Card.Text>
                        Описание задачи: {hackaton.teamCase.description}
                      </Card.Text>
                      <Card.Text>
                        Ссылка для решения кейса: {hackaton.link}
                      </Card.Text>
                    </Fragment>
                  ) : (
                    <Card.Text>Вы еще не выбрали Кейс в Хакатоне</Card.Text>
                  )}
                </div>
                <div className="teamInfo">
                  <Card.Title className="my-4">Участники команды:</Card.Title>
                  <hr />
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Имя</th>
                        <th>E-mail</th>
                        <th>Статус</th>
                      </tr>
                    </thead>
                    <tbody>
                      {team.map((el) => (
                        <tr key={el._id}>
                          <td>{team.indexOf(el) + 1}</td>
                          <td>{el.name}</td>
                          <td>{el.email}</td>
                          <td>{el.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Button variant="success" onClick={handleShow}>
                    Добавить Участника
                    <i className="fas fa-user profile-icon"></i>
                  </Button>
                </div>

                <div className="text-center mx-auto my-4">
                  <Button variant="primary">
                    Редактировать
                    <i className="far fa-address-card profile-icon"></i>
                  </Button>
                  <Button
                    type="submit"
                    onSubmit={OnSubmit}
                    variant="danger"
                    className="ml-1"
                  >
                    Удалить Команду
                    <i className="fas fa-trash-alt profile-icon"></i>
                  </Button>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">
                <p>
                  Дата создания:{" "}
                  <Moment locale="ru" format="ll">
                    {date}
                  </Moment>
                </p>
              </Card.Footer>
            </Card>
          </div>
        )}
      </div>
    </Fragment>
  );
};

const styles = {
  title: {
    fontSize: "1.5rem",
    fontWeight: 500,
  },
};

Team.propTypes = {
  getTeam: PropTypes.func.isRequired,
  addTeamMate: PropTypes.func.isRequired,
  hack: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  hack: state.hack,
  auth: state.auth,
});

export default connect(mapStateToProps, { getTeam, addTeamMate })(Team);
