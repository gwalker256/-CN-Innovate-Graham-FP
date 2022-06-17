from flask import render_template, Blueprint, request

views = Blueprint("views", __name__)

# view in this instance is a Blueprint

task_list = []

@views.route("/")
def home():
    return render_template("index.html")


# @views.route("/todos", methods=["GET", "POST"])
# def todos():
#     global task_list
#     if request.method == "POST":
#         task = request.form.get("task-input")
#         task_list.append(task)
#         print(task_list)
#         return render_template("todos.html", task_list=task_list)
#     return render_template("todos.html")