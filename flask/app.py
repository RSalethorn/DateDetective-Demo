from flask import Flask, request, jsonify, abort
from datedetective import DateDetective
from werkzeug.exceptions import HTTPException

dd = DateDetective()
app = Flask(__name__)

@app.route("/api/format", methods=["POST"])
def format():
    date_str = request.form.get('date')

    # if request body doesn't have 'date' parameter
    if not date_str:
        abort(400, description="Missing 'date' parameter")
    
    date_format = dd.get_format(date_str)
    
    return jsonify({"date_format": date_format})


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
    app.run(debug=True)