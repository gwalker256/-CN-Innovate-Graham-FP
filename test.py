from flask import Flask, render_template_string, request, session, redirect, url_for

app = Flask(__name__)

app.secret_key = 'BAD_SECRET_KEY'


@app.route('/set_email', methods=['GET', 'POST'])
def set_email():
    if request.method == 'POST':

        session['email'] = request.form['email_address']
        return redirect(url_for('get_email'))

    return """
        <form method="post">
            <label for="email">Enter your email address:</label>
            <input type="email" id="email" name="email_address" required />
            <button type="submit">Submit</button
        </form>
        """


@app.route('/get_email')
def get_email():
    return render_template_string("""
            {% if session['email'] %}
                <h1>Welcome {{ session['email'] }}!</h1>
            {% else %}
                <h1>Welcome! Please enter your email <a href="{{ url_for('set_email') }}">here.</a></h1>
            {% endif %}
        """)


@app.route('/delete_email')
def delete_email():

    session.pop('email', default=None)
    return '<h1>Session deleted!</h1>'


if __name__ == '__main__':
    app.run()