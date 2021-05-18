import EditIcon from "./images/edit_black_24dp.svg";
import DeleteIcon from "./images/delete_black_24dp.svg";

function App(props) {
  const subject = props.subject;
  console.log(props);
  return (
    <div className="page">
      <header className="page__header header">
        <h1 className="title">TodoList</h1>
      </header>
      <main className="page__main main">
        {/* todoapp */}
        <div className="todoapp">
          <div className="todoapp__section">
            {/* form */}
            <form className="form">
              <div className="form__section">
                <h2 className="form__label-wrapper">
                  <label htmlFor="new-todo-input" className="form__label">
                    What needs to be done?
                  </label>
                </h2>
              </div>
              <div className="form__section">
                <input
                  type="text"
                  id="form__input-control"
                  className="form__input-control"
                  name="text"
                  autoComplete="off"
                />
                <button type="submit" className="btn btn--primary btn--form">
                  Add
                </button>
              </div>
            </form>
          </div>
          {/* filter buttns */}
          <div className="todoapp__section">
            <div className="filters btn-group">
              <button className="btn btn--filter btn--active btn--margin-right-s">
                All
              </button>
              <button className="btn btn--filter btn--margin-s">Active</button>
              <button className="btn btn--filter btn--margin-left-s">
                Completed
              </button>
            </div>
          </div>

          {/* Todo counter */}
          <div className="todoapp__section">
            <h2 className="todoapp__counter">4 tasks remaining</h2>
          </div>

          {/* todolist */}
          <div className="todoapp__section">
            <ul className="todolist">
              {/* Todo 1 */}
              <li className="todo">
                {/* Todo View */}
                <div className="todo__view">
                  <input
                    id="todo__checkbox1"
                    type="checkbox"
                    className="todo__checkbox"
                    defaultChecked={true}
                  />
                  <label className="todo__label" htmlFor="todo__checkbox1">
                    Eat
                  </label>
                  <div className="btn-group btn-group--inline">
                    <button className="btn btn--40 btn--rounded btn--margin-right-s">
                      <img className="btn__icon" src={EditIcon} alt="" />
                      <span className="visually-hidden">Edit Eat</span>
                    </button>
                    <button className="btn btn--40 btn--rounded btn--margin-right">
                      <img className="btn__icon" src={DeleteIcon} alt="" />
                      <span className="visually-hidden">Delete Eat</span>
                    </button>
                  </div>
                </div>
              </li>

              {/* Todo 2 */}
              <li className="todo">
                {/* Todo View */}
                <div className="todo__view">
                  <input
                    id="todo__checkbox2"
                    type="checkbox"
                    className="todo__checkbox"
                  />
                  <label className="todo__label" htmlFor="todo__checkbox2">
                    Sleep
                  </label>
                  <div className="btn-group btn-group--inline">
                    <button className="btn btn--40 btn--rounded btn--margin-right-s">
                      <img className="btn__icon" src={EditIcon} alt="" />
                      <span className="visually-hidden">Edit Sleep</span>
                    </button>
                    <button className="btn btn--40 btn--rounded btn--margin-right">
                      <img className="btn__icon" src={DeleteIcon} alt="" />
                      <span className="visually-hidden">Delete Sleep</span>
                    </button>
                  </div>
                </div>
              </li>

              {/* Todo 3 */}
              <li className="todo">
                {/* Todo View */}
                <div className="todo__view">
                  <input
                    id="todo__checkbox3"
                    type="checkbox"
                    className="todo__checkbox"
                  />
                  <label className="todo__label" htmlFor="todo__checkbox3">
                    Run
                  </label>
                  <div className="btn-group btn-group--inline">
                    <button className="btn btn--40 btn--rounded btn--margin-right-s">
                      <img className="btn__icon" src={EditIcon} alt="" />
                      <span className="visually-hidden">Edit Run</span>
                    </button>
                    <button className="btn btn--40 btn--rounded btn--margin-right">
                      <img className="btn__icon" src={DeleteIcon} alt="" />
                      <span className="visually-hidden">Delete Run</span>
                    </button>
                  </div>
                </div>
              </li>

              {/* Todo 4 */}
              <li className="todo">
                {/* Todo View */}
                <div className="todo__view">
                  <input
                    id="todo__checkbox4"
                    type="checkbox"
                    className="todo__checkbox"
                  />
                  <label className="todo__label" htmlFor="todo__checkbox4">
                    Code
                  </label>
                  <div className="btn-group btn-group--inline">
                    <button className="btn btn--40 btn--rounded btn--margin-right-s">
                      <img className="btn__icon" src={EditIcon} alt="" />
                      <span className="visually-hidden">Edit Code</span>
                    </button>
                    <button className="btn btn--40 btn--rounded btn--margin-right">
                      <img className="btn__icon" src={DeleteIcon} alt="" />
                      <span className="visually-hidden">Delete Code</span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="page__footer footer">
        <p className="footer__notice">Copyright Haroun Ach 2021</p>
      </footer>
    </div>
  );
}

export default App;
