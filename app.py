from flask import Flask, render_template
from views import views

app = Flask(__name__)


app.register_blueprint(views)

@app.errorhandler(404)
def not_found(e):
    return render_template("error.html"), 404

if __name__ == "__main__":
    app.run(debug=True, port=8000)

    