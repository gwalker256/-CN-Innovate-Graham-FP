from flask import render_template, Blueprint, request

views = Blueprint("views", __name__)

# view in this instance is a Blueprint

# task_list = []

@views.route("/")
def home():
    return render_template("index.html", active="home")

@views.route("/pizzas")
def pizzas():
    return render_template("pizzas.html", active="pizzas")

@views.route("/sides")
def sides():
    return render_template("sides.html", active="sides")

@views.route("/desserts")
def desserts():
    return render_template("desserts.html" , active="desserts")

@views.route("/drinks")
def drinks():
    return render_template("drinks.html", active="drinks")

@views.errorhandler(404)
def not_found(e):
    return render_template("error.html"), 404






# @views.route("/todos", methods=["GET", "POST"])
# def todos():
#     global task_list
#     if request.method == "POST":
#         task = request.form.get("task-input")
#         task_list.append(task)
#         print(task_list)
#         return render_template("todos.html", task_list=task_list)
#     return render_template("todos.html")