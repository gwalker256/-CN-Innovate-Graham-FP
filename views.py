from flask import render_template, Blueprint, request

views = Blueprint("views", __name__)


@views.route("/")
def home():
    return render_template("index.html", active="home")


# @views.route("/pizzas")
# def pizzas():
#     return render_template("pizzas.html", active="pizzas")


@views.route("/sides")
def sides():
    return render_template("sides.html", active="sides")


@views.route("/desserts")
def desserts():
    return render_template("desserts.html", active="desserts")


@views.route("/drinks")
def drinks():
    return render_template("drinks.html", active="drinks")


@views.route("/basket")
def basket():
    return render_template("basket.html", active="basket")