from flask import Flask, request, jsonify, abort
from datedetective import DateDetective
from werkzeug.exceptions import HTTPException
from flask_cors import CORS

from tag_date import tag_date


dd = DateDetective()
app = Flask(__name__)
CORS(app)

@app.route("/api/format", methods=["POST"])
def format():
    date_str = request.form.get('date')
    return_tagged = request.form.get('tag')

    # if request body doesn't have 'date' parameter
    if not date_str:
        abort(400, description="Missing 'date' parameter")
    
    date_format = dd.get_format(date_str)
    
    response = {"date_format": date_format}

    if bool(return_tagged) == True:
        response["date_tagged"] = tag_date(date_str, date_format)
        
    return jsonify(response)
 

@app.errorhandler(Exception)
def handle_exception(error):
    # checks error is a http excaption
    if isinstance(error, HTTPException):
        response = {
            "error": error.name,
            "message": error.description,
            "status_code": error.code
        }
        return jsonify(response), error.code
    else:
        # Handle generic python exceptions
        return jsonify({"error": "Internal Server Error", "message": str(error), "status_code": "500"}), 500


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")