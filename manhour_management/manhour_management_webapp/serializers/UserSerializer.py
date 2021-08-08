from rest_framework import serializers

from manhour_management_database.models.User import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')

