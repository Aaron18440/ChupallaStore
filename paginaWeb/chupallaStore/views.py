from django.shortcuts import render
from chupallaStore.models import Marca
from django.shortcuts import redirect
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

# Create your views here.
def index (request):
    return render(request, 'index.html', {})

def login (request):
    return render(request, 'registration/login.html', {})

def registrar (request):
    if request.method == "POST":
        nombre = request.POST["txtNombre"]
        correo = request.POST["username"]
        clave  = request.POST["txtClave"]
        User.objects.create(username=nombre, email=correo, password=make_password(clave))

        return redirect('%s?next=%s' % (settings.LOGIN_URL, request.path))
    return render(request, 'registration/registrar.html', {})