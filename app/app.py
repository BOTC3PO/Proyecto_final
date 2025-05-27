from flask import Flask, render_template

app = Flask(__name__, 
           template_folder='./../app/resources',  # Especificamos la carpeta de templates
           static_folder='static')           # Especificamos la carpeta de archivos estáticos

@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/demo')
def demo():
    return render_template('demo.html')
if __name__ == '__main__':
    app.run(debug=True, use_reloader=True, host='0.0.0.0')

