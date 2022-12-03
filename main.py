from app import app
from flask import render_template


@app.route("/", methods=["GET", "POST"])
def home():
    return render_template("site.html")



app.run(debug=True)