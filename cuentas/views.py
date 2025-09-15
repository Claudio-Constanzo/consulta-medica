from django.shortcuts import render, redirect




# Login
def login_view(request):
    return render(request, "cuenta/loginUsuario.html")

#Menú de doctor

def menuDoctor_view(request):
    return render(request, "cuenta/menuDoctor.html")



