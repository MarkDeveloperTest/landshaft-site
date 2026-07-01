import { Component } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "./Icons";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Landshaft runtime error", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="site-shell">
        <section className="not-found shell">
          <div
            className="not-found__inner error-state section-frame section-frame--compact"
            role="alert"
          >
            <h1>Щось пішло не так.</h1>
            <p>
              Спробуйте оновити сторінку. Якщо проблема повториться, поверніться на
              головну й відкрийте потрібний розділ знову.
            </p>
            <div className="error-state__actions">
              <button type="button" className="button button--solid" onClick={this.handleReload}>
                Оновити сторінку
                <ArrowIcon className="icon icon--arrow" />
              </button>
              <Link className="button button--outline" to="/">
                На головну
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
