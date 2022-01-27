from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def upload_csv(request):
    data = json.loads(request.body.decode("utf-8"))
    username = data['user']
    password = data['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        return JsonResponse({"response":"Success"})
    else:
        return JsonResponse({"response":"Fail"})
