from django.shortcuts import render

def index (Request):
    return render(Request,'login/loginpage.html')
# Create your views here.
