from waitress import serve
from cmsimde import flaskapp
# 8xxxx is for Stunnel accept port
# 9xxxx is for localhost internal port
serve(flaskapp.app, listen='127.0.0.1:9009', threads=8)
