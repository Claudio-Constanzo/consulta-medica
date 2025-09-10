from django.shortcuts import render

def usuarios_view(request):
    return render(request, 'usuarios/usuarios.html')
