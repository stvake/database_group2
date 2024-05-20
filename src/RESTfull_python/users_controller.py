from flask import request, jsonify
from user_model import Users
from app_init import app

users = Users()


@app.route("/users", methods=['GET'])
def get_all_users():
    return jsonify(users.get_all_users())


@app.route("/user/<user_id>", methods=['GET'])
def get_user_by_id(user_id):
    return jsonify(users.get_user_by_id(user_id))


@app.route("/users/add", methods=['POST'])
def add_user():
    url_params = request.args.to_dict()
    return jsonify(users.add_user(url_params))


@app.route("/users/delete/<user_id>", methods=['DELETE'])
def delete_user(user_id):
    return jsonify(users.delete_user(user_id))


@app.route("/users/update/<user_id>", methods=['PUT'])
def update_user(user_id):
    url_params = request.args.to_dict()
    return jsonify(users.update_user(user_id, url_params))
