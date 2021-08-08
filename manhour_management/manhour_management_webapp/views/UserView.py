from rest_framework import status
from rest_framework.decorators import action, api_view
from rest_framework import viewsets
from rest_framework.request import Request
from rest_framework.response import Response

# Create your views here.

from manhour_management_database.models.User import User
from manhour_management_webapp.serializers.UserSerializer import UserSerializer

class UserView(viewsets.ViewSet):

    def list(self, request: Request):

        serializer = UserSerializer(User.objects.all(), many=True)

        return Response(serializer.data)

    def retrieve(self, request: Request, pk: int):

        serializer = UserSerializer(User.objects.get(id=pk))

        return Response(serializer.data)

    def create(self, request: Request):
        pass

    def update(self, request: Request, pk: int):
        user = User.objects.get(id=pk)
        serializer = UserSerializer(user, request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(None)
